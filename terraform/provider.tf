provider "aws" {
  profile    = "ballot"
  region     = "us-west-2"
}

provider "aws" {
  alias = "ballot-old"
  region     = "us-east-1"
}

