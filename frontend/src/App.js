import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { InjectedConnector } from '@web3-react/injected-connector'

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
})


function ButtonAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blockchain Ballot
          </Typography>
          <Button color="inherit" onClick={ props.active ? () => {} : props.connect }>
            { props.active ? props.account : "Connect wallet" }
        </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}



function App() {
  const { active, account, library, connector, activate, deactivate } = useWeb3React()

  const [ authorized, setAuthorized ] = useState(false);
  async function connect() {
    try {
      await activate(injected)
      console.log("conn")
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      await deactivate()
      setAuthorized(false);
      console.log("disc")
    } catch (ex) {
      console.log(ex)
    }
  }

  useEffect(() => {
    injected.isAuthorized().then((isAuth) => {
      setAuthorized(isAuth)
      if (isAuth) {
        activate(injected)
      }
    })
  }, []);

  return (
    <div className="App">
      <ButtonAppBar active={active} connect={connect} disconnect={disconnect} account={account} />
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
