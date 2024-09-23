#!/bin/sh

ENCRYPTION_KEY="$1"
INPUT_FILE_PATH="$2"
OUTPUT_FILE_PATH="$3"

echo "ENCRYPTION_KEY: ${ENCRYPTION_KEY}";
echo "INPUT_FILE_PATH: ${INPUT_FILE_PATH}";
echo "OUTPUT_FILE_PATH: ${OUTPUT_FILE_PATH}";

if [ -z "$ENCRYPTION_KEY" ]; then
  echo "Script param: Encryption Key parameter is missing or empty!";
  echo "Usage: $0 <encryption_key> <input_file_path> [output_file_path]"
  exit 1;
fi

if [ ! -e "$INPUT_FILE_PATH" ]; then
  echo "Script param: Input File Path key parameter is missing or empty!";
  echo "Usage: $0 <encryption_key> <input_file_path> [output_file_path]"
  exit 1
fi

if [ -z "$OUTPUT_FILE_PATH" ]; then
  gpg -a --batch --output "${INPUT_FILE_PATH}.enc" --passphrase "$ENCRYPTION_KEY" --symmetric "${INPUT_FILE_PATH}"
  rm -rf "${INPUT_FILE_PATH}"
  mv "${INPUT_FILE_PATH}.enc" "${INPUT_FILE_PATH}"
else
  if [ -e "$OUTPUT_FILE_PATH" ]; then
    rm -rf "$OUTPUT_FILE_PATH"
  fi

  gpg -a --batch --output "${OUTPUT_FILE_PATH}" --passphrase "$ENCRYPTION_KEY" --symmetric "${INPUT_FILE_PATH}"
fi

# Check if encryption was successful
if [ $? -eq 0 ]; then
  echo "Encryption successful!"
else
  echo "Encryption failed!"
fi