#!/usr/bin/env bash

DIR="${BASH_SOURCE%/*}"
if [[ ! -d "$DIR" ]]; then DIR="$PWD"; fi
. $(dirname "${DIR}")/utils.sh

NEW_VERSION="$1"

if [ -z "$NEW_VERSION" ]
then
  echo "Script param: New Version parameter is missing or empty!";
  echo "Usage: $0 <new_version>"
  exit 1;
fi

./updateProjectVersion.sh $NEW_VERSION
status=$?

if [ $status -eq 1 ]
then
  exit 1;
fi

PROPERTY_FILE="package.json"

# Read the version from package.json and not from NEW_VERSION, so that to be sure that it was updated from the previous script (updateProjectVersion.sh)
VERSION=$(getProperty $PROPERTY_FILE "version")

if [ "$VERSION" != "$NEW_VERSION" ]
then
  echo "Message: Version '$NEW_VERSION' could not be updated!";
  exit 1;
fi

TAG_NAME="v$VERSION";

./finalizeReleaseNotes.sh $TAG_NAME
status=$?

if [ $status -eq 1 ]
then
  exit 1;
fi

if git ls-remote --exit-code --tags origin refs/tags/$TAG_NAME > /dev/null 2>&1; then
  echo "Tag $TAG_NAME already exists";
else
  git tag -a $TAG_NAME -m "Tagged version $VERSION";
  git push origin master $TAG_NAME -o ci.skip; # Prevent triggering pipeline again

  echo "Message: Master branch tagged successfully as '$TAG_NAME' with the relevant release notes!";
fi
