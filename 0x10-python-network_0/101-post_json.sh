#!/bin/bash
# This Bash script sends a JSON POST request to a URL and displays the body of the response

# Check if the correct number of arguments is provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <URL> <JSON file>"
    exit 1
fi

# Check if the provided JSON file exists
if [ ! -f "$2" ]; then
    echo "File not found: $2"
    exit 1
fi

# Send the POST request and display the body of the response
curl -sX POST -H "Content-Type: application/json" -d @"$2" "$1"
