#!/usr/bin/python3
"""
Python script that takes in a URL, sends a request to the URL,
and displays the body of the response.
"""

import requests
import sys

if __name__ == "__main__":
    url = sys.argv[1]

    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise HTTPError for bad responses (4xx or 5xx)
        print(response.text)

    except requests.exceptions.HTTPError as e:
        print(f"Error code: {e.response.status_code}")

    except requests.exceptions.RequestException as e:
        print(f"Request error: {e}")

# Pycodestyle validation
# W293: Remove whitespace at the end of a line
# E501: Limit all lines to a maximum of 79 characters
