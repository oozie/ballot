provider "aws" {
  profile    = "ballot"
  region     = "us-west-1"
}

provider "aws" {
  # us-east-1 instance
  region = "us-east-1"
  alias = "us-east-1"
}

