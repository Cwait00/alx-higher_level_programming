import requests
import sys

if __name__ == "__main__":
    url = sys.argv[1]
    email = sys.argv[2]

    payload = {'email': email}

    # No need to modify the URL if your Flask app is running on port 5000
    response = requests.post(url + '/post_email', data=payload)

    print("Your email is:", email)
    print(response.text)
