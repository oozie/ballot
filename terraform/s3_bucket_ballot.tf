resource "aws_s3_bucket" "ballot" {
  bucket = "ballot.trullla.com"

  tags = {
    Environment = "PROD"
  }

  grant {
    type        = "Group"
    uri         = "http://acs.amazonaws.com/groups/global/AllUsers"
    permissions = ["READ"]
  }

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "POST"]
    allowed_origins = ["*"]
    expose_headers  = ["ETag"]
    max_age_seconds = 2592000
  }

}

resource "aws_s3_bucket_policy" "public-by-default" {
  bucket = "${aws_s3_bucket.ballot.id}"

  policy = <<POLICY
{
    "Version": "2008-10-17",
    "Id": "public-by-default",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "AWS": "*"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::ballot.trullla.com/*"
        }
    ]
}
POLICY

}
