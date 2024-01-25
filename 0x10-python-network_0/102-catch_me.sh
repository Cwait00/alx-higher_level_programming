#!/bin/bash
# This Bash script makes a request to 0.0.0.0:5000/catch_me causing the server to respond with "You got me!"

# Use curl to make the request and display the message using the -w option
curl -sLX PUT -d "user_id=98" -H "Origin: HolbertonSchool" -w "You got me!\n" 0.0.0.0:5000/catch_me
