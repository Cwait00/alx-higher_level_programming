#!/usr/bin/python3
"""
Python script that takes GitHub credentials (username and password)
and uses the GitHub API to display your id.
"""
import requests
import sys

if __name__ == "__main__":
    # Check if correct number of arguments is provided
    if len(sys.argv) != 3:
        print("Usage: ./10-my_github.py <username> <token>")
        sys.exit(1)

    # GitHub API endpoint for user information
    url = 'https://api.github.com/user'

    # GitHub username and personal access token
    username = sys.argv[1]
    token = sys.argv[2]

    # Prepare headers for Basic Authentication
    headers = {
        'Authorization': 'Basic ' + f'{username}:{token}'.encode('utf-8').decode('utf-8')
    }

    # Make request to GitHub API
    response = requests.get(url, headers=headers)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Parse the JSON response
        user_data = response.json()
        
        # Display the user ID
        print(user_data['id'])
    else:
        # Display None for unsuccessful requests
        print(None)
