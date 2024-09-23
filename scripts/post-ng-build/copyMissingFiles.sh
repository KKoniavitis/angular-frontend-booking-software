#!/usr/bin/env bash

# Define the source directory and the target directory
SOURCE_DIR="./src"
TARGET_DIR="./dist/angular-redux-rxjs-clean-architecture-skeleton"

# Define an array of file names
MISSING_FILENAMES=("robots.txt")

# Loop through the array and copy the files
for FILE_NAME in "${MISSING_FILENAMES[@]}"; do
    SOURCE_FILE="${SOURCE_DIR}/${FILE_NAME}"
    TARGET_FILE="${TARGET_DIR}/${FILE_NAME}"

    if [ -e "$SOURCE_FILE" ]; then
        cp "$SOURCE_FILE" "$TARGET_FILE"
        echo "Copied ${SOURCE_FILE} to ${TARGET_FILE}"
    else
        echo "File ${SOURCE_FILE} does not exist in the source directory."
    fi
done

echo "Message: Missing files copied successfully!";
