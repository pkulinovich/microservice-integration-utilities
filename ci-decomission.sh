#!/bin/bash
declare -a folders=("go", "nodejs8")

  for folder in "${folders[@]}"
  do
    cd $folder
    pwd

    serverless remove

    cd ..
  done
