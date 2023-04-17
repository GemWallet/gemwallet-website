#!/bin/bash

if [ -z "$1" ]; then
  echo "Error: Missing argument - new version number required."
  exit 1
fi

# Receive new version number as an argument
new_version=$1

latest_version_dir=$(ls -d versioned_docs/version-* | sort -rV | head -n 1)
previous_version=$(basename "$latest_version_dir" | cut -d '-' -f 2)

if [ "$previous_version" == "$new_version" ]; then
  echo "Error: New version number is the same as the previous version."
  exit 1
fi

# Replace the version number in docs/api/using-in-browser.md
sed -i "s/@gemwallet\/api@[0-9]*\.[0-9]*\.[0-9]*/@gemwallet\/api@$new_version/g" docs/api/using-in-browser.md

# Update the version in package.json
sed -i "s/\"@gemwallet\/api\": \"[0-9]*\.[0-9]*\.[0-9]*\"/\"@gemwallet\/api\": \"$new_version\"/g" package.json

# Update versions.json by adding the new version to the beginning of the array
if grep -q "\"$new_version\"" versions.json; then
  echo "Version $new_version already exists in versions.json."
else
  sed -i "s/\[\(.*\)\]/[\"$new_version\", \1]/" versions.json
fi

# Duplicate the latest versioned_docs/version directory and rename the new folder
cp -R "$latest_version_dir" "versioned_docs/version-$new_version"

# Replace the version number in versioned_docs/version-<new_version>/api/using-in-browser.md
sed -i "s/@gemwallet\/api@[0-9]*\.[0-9]*\.[0-9]*/@gemwallet\/api@$new_version/g" "versioned_docs/version-$new_version/api/using-in-browser.md"

# Duplicate the latest version sidebars.json and rename the new file
cp "versioned_sidebars/version-$previous_version-sidebars.json" "versioned_sidebars/version-$new_version-sidebars.json"

# Replace the version number in versioned_sidebars/version-<new_version>-sidebars.json
sed -i "s/version-[0-9]*\.[0-9]*\.[0-9]*\//version-$new_version\//g" "versioned_sidebars/version-$new_version-sidebars.json"
