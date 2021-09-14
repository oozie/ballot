import './App.css';
import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';

import { InjectedConnector } from '@web3-react/injected-connector'

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
})


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
      <header className="App-header">

        <p>
          Account: { account }
        </p>
        <p>
          Authorized: { authorized ? "YES" : "NO" }
        </p>

        <button onClick={ active ? disconnect : connect }>
          { active ? "Disconnect" : "Connect" }
        </button>

      </header>
    </div>
  );
}

export default App;
