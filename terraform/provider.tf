provider "aws" {
  profile    = "ballot"
  region     = "us-east-1"
}

provider "aws" {
  alias = "ballot-old"
  region     = "us-west-2"
}

