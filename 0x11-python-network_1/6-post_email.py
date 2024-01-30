#!/usr/bin/python3
"""
Python script that takes in a URL and an email address,
sends a POST request to the passed URL with the email as a parameter,
and finally displays the body of the response.
"""

import requests
import sys

if __name__ == "__main__":
    url = sys.argv[1]
    email = sys.argv[2]

    payload = {'email': email}
    response = requests.post(url, data=payload)

    # Check if the response contains the expected output
    if "Your email is:" in response.text:
        print(response.text.split("Your email is: ")[1].strip())
    else:
        print("Unexpected response format.")
