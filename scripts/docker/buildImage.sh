#!/usr/bin/env bash

ENVIRONMENT="$1" # Could be 'development', 'uat' or 'Production'
ENCRYPTION_KEY="$2"
VERSION="$3" # Could be e.g 'XXX.YYY.ZZZ'

# Check if the required arguments are provided
if [ "$#" -ne 2 ]; then
  echo "Usage: $0 <environment> <encryption_key> [version]"
  exit 1
fi

if [ -z "$ENVIRONMENT" ]; then
  echo "Script param: Environment parameter is missing or empty!";
  echo "Usage: $0 <environment> <encryption_key> [version]"
  exit 1;
else
  if [ -z "$ENCRYPTION_KEY" ]
  then
    echo "Script param: Encryption Key parameter is missing or empty!";
    echo "Usage: $0 <environment> <encryption_key> [version]"
    exit 1;
  fi

  PROPERTY_FILE="package.json"

  if [ -z "$VERSION" ]
  then
     VERSION=$(getProperty $PROPERTY_FILE "version")
  fi

  echo "Using environment: $ENVIRONMENT"
  echo "Using version: $VERSION"

  IMAGE_NAME="angular-redux-rxjs-clean-architecture-skeleton"

  if [[ "$ENVIRONMENT" == "development"  ||  "$ENVIRONMENT" == "uat" ]]; then
    TAG="${IMAGE_NAME}:${ENVIRONMENT}-v${VERSION}"

    echo "Creating an image with the tag '${TAG}'"
    docker build --build-arg BUILD_ENV_TAG="${ENVIRONMENT}" --build-arg APP_UI_ENCRYPTION_KEY="${ENCRYPTION_KEY}" -t "${TAG}" --progress=plain --no-cache .

    #echo "Pushing the image '${TAG}' to registry"
    #docker push "${TAG}"
  else
    TAG="${IMAGE_NAME}:v${VERSION}"
    LATEST_TAG="${IMAGE_NAME}:latest"

    echo "Creating an image with tags '${TAG}' and '${LATEST_TAG}'"
    docker build --build-arg BUILD_ENV_TAG=production --build-arg APP_UI_ENCRYPTION_KEY="${ENCRYPTION_KEY}" -t "${TAG}" -t "${LATEST_TAG}" --progress=plain --no-cache .

    #echo "Pushing the image '${TAG}' to registry"
    #docker push "${TAG}"

    #echo "Pushing the image '${LATEST_TAG}' to registry"
    #docker push "${LATEST_TAG}"
  fi
fi