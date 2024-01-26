#!/usr/bin/python3
"""
Python script that takes in a URL, sends a request to the URL,
and displays the value of the X-Request-Id variable found in the header of the response.
"""

import urllib.request
import sys

def fetch_x_request_id(url):
    with urllib.request.urlopen(url) as response:
        # Get the value of the X-Request-Id header from the response
        x_request_id = response.getheader('X-Request-Id')
        return x_request_id

if __name__ == "__main__":
    # Check if the correct number of arguments is provided
    if len(sys.argv) != 2:
        print("Usage: ./1-hbtn_header.py <URL>")
        sys.exit(1)

    url = sys.argv[1]
    x_request_id = fetch_x_request_id(url)
    print(x_request_id)
