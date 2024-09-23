#!/usr/bin/env bash

function getProperty() {
  PROPERTY_FILE=$1
  PROP_KEY=$2

  PROP_VALUE=$(awk -v prop="$PROP_KEY" -F '[:,]' '$0 ~ "\""prop"\""{print $2; exit}' ${PROPERTY_FILE} | tr -d '" ')
  echo $PROP_VALUE
}
