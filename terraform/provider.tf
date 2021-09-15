provider "aws" {
  profile    = "ballot"
  region     = "us-west-1"
}

provider "aws" {
  alias = "ballot-old"
  region     = "us-east-1"
}

