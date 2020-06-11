aws cloudformation deploy --template-file cf-deploy-s3.yaml --stack-name joke-lang-website
aws s3 cp --recursive build s3://joke-lang-website-jokelangbucket-10ykbrm8tthr8
aws s3 rb s3://joke-lang-website-jokelangbucket-1eyqz2ld4ifei --force
