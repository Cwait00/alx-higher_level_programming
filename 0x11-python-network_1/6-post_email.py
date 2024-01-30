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
    response = requests.post(url + '/post_email', data=payload)

    # Print the entire response content for debugging
    print(response.text)

    # Check if the response contains the email
    if email in response.text:
        print("Email:", email)
    else:
        print("Unexpected response format.")
