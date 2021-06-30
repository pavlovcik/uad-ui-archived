#!/bin/bash

# CHECK IF .ENV FILE EXISTS
if [ -f ./contracts/.env ]; then
  source ./contracts/.env
else
  echo "Please add a .env inside the contracts folder."
  exit 1
fi

# SPINNER FUNCTIONS
spinnerChar="⠁⠂⠄⡀⢀⠠⠐⠈"
spinnerIndex=0
spinnerSTART() {
  printf "\b${spinnerChar:spinnerIndex++:1}"
  ((spinnerIndex == ${#spinnerChar})) && spinnerIndex=0
}
spinnerSTOP() {
  printf "\r%s\n" "$@"
}

DIR="./frontend/src"
FINAL_ARTIFACT="$DIR/uad-contracts-deployment.json"
TEMP_ARTIFACT="./.tmp-uad-contracts-deployment.json"

rm -f $FINAL_ARTIFACT
mkdir -p $DIR

# KILL BLOCKCHAIN
kill $(lsof -t -i:8545) || true

# CONTRACTS FOLDER
cd ./contracts || echo "ERROR: ./contracts/ doesn't exist?"

yarn
yarn compile

# EXPORT ARTIFACT
yarn hardhat node --fork https://eth-mainnet.alchemyapi.io/v2/$ALCHEMY_API_KEY --fork-block-number 12150000 --show-accounts --export-all $TEMP_ARTIFACT >../local.node.log &

# WAIT FOR ARTIFACT EXPORT
echo "Pausing until $TEMP_ARTIFACT exists."
while :; do
  spinnerSTART
  [[ -f $TEMP_ARTIFACT ]] && break
  sleep .06
done

# ARTIFACT EXPORT COMPLETE
spinnerSTOP " $TEMP_ARTIFACT found!"

# EXTRACT LOCALHOST DEPLOYMENT
node ../hooks/process-deployment.js $TEMP_ARTIFACT $FINAL_ARTIFACT
rm -f $TEMP_ARTIFACT

cd ..

# COPY ARTIFACTS TO BE ACCESSIBLE BY FRONTEND
mkdir -p $DIR/types && cp -r ./contracts/artifacts/types/* $DIR/types

exit 0
