#!/bin/bash
declare -a folders=("go" "nodejs8")

export AWS_PROFILE=default
export AWS_REGION=us-east-1

for folder in "${folders[@]}"
  do
    cd $folder
    pwd

    serverless deploy --region $AWS_REGION

    cd ..
done