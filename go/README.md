# Microservice utilities with Golang.

### Configure your AWS Deployment Account

Provide an AWS account that have sufficient access so that serverless can deploy the stack.

```sh
serverless config credentials --provider aws --key YOUR_AWS_ACCESS_KEY --secret YOUR_AWS_SECRET_KEY
```

### Compile the functions

The default command in the included Makefile will gather your dependencies and build the proper binaries for your functions

```sh
make
```

### Deploy

This will deploy your function to AWS Lambda based on the settings in serverless.yml.

```sh
serverless deploy
```

Finally, invoke your function

```sh
serverless invoke -f xml2json
```