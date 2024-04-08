#!/bin/bash

echo "Preparing Development Source Dependency"
DEPENDENCIES="dependencies"
mkdir -p "$DEPENDENCIES"
cd "$DEPENDENCIES"

git clone -b dev https://github.com/banglafighter/react-rapid-app.git
git clone -b dev https://github.com/banglafighter/react-rapid-bootstrap.git
git clone -b dev https://github.com/banglafighter/react-rapid-i18n.git

APPLICATION="application"
mkdir -p "$APPLICATION"