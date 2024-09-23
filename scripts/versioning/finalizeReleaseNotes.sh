#!/usr/bin/env bash

DIR="${BASH_SOURCE%/*}"
if [[ ! -d "$DIR" ]]; then DIR="$PWD"; fi
. $(dirname "${DIR}")/utils.sh

TAG_NAME="$1"

if [ -z "$TAG_NAME" ]
then
  echo "Script param: Tag Name parameter is missing or empty!";
  echo "Usage: $0 <tag_name>"
  exit 1;
fi

RELEASE_NOTES_FILE=release-notes.html

if [ -z "$(cat ${RELEASE_NOTES_FILE})" ]
then
  echo "File: Release notes file is empty - No changelog exists!";
  exit 1;
fi

if grep -q "v${TAG_NAME}" $RELEASE_NOTES_FILE
then
  echo "Message: Release notes for '$TAG_NAME' already exist!";
  exit 1;
fi

FEATURES_LABEL="New features"
FIXES_LABEL="Fixes"
DEPRECATED_LABEL="Removed Features (deprecated)"
MISC_LABEL="Maintenance"

if ! grep -q "$FIXES_LABEL" $RELEASE_NOTES_FILE
then
  echo "Labels: $FIXES_LABEL label does not exist in previous release notes!";
  exit 1;
fi

if ! grep -q "$FEATURES_LABEL" $RELEASE_NOTES_FILE
then
  echo "Labels: $FEATURES_LABEL label does not exist in previous release notes!";
  exit 1;
fi

if ! grep -q "$DEPRECATED_LABEL" $RELEASE_NOTES_FILE
then
  echo "Labels: $DEPRECATED_LABEL label does not exist in previous release notes!";
  exit 1;
fi

if ! grep -q "$MISC_LABEL" $RELEASE_NOTES_FILE
then
  echo "Labels: $MISC_LABEL label does not exist in previous release notes!";
  exit 1;
fi

CURRENT_DATE=$(date +%d-%m-%Y) # dd-mm-yyyy

sed -i "s/NEXT_DATE/${CURRENT_DATE}/g; s/NEXT_VERSION/${TAG_NAME}/g" $RELEASE_NOTES_FILE

sed -i "/- Release v${TAG_NAME}/i [NEXT_DATE] - $(echo "Release vNEXT_VERSION\n")\
$(echo "==========================================\n")\
$(echo "\n")\
$(echo "${FEATURES_LABEL}\n")\
$(echo "-------------\n")\
$(echo "\n")\
$(echo "    - none")\
$(echo "\n")\
$(echo "\n")\
$(echo "${FIXES_LABEL}\n")\
$(echo "------\n")\
$(echo "\n")\
$(echo "    - none")\
$(echo "\n")\
$(echo "\n")\
$(echo "${DEPRECATED_LABEL}\n")\
$(echo "-------------\n")\
$(echo "\n")\
$(echo "    - none")\
$(echo "\n")\
$(echo "\n")\
$(echo "${MISC_LABEL}\n")\
$(echo "-------------\n")\
$(echo "\n")\
$(echo "    - none")\
$(echo "\n")\
$(echo "\n")\
" $RELEASE_NOTES_FILE

git add $RELEASE_NOTES_FILE
git commit -m "Release notes tagged as $TAG_NAME and updated"

echo "Message: New version line '$TAG_NAME' and template were added successfully in the ${RELEASE_NOTES_FILE} file!";
