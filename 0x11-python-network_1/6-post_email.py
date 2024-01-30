import requests
import sys

if __name__ == "__main__":
    url = sys.argv[1]
    email = sys.argv[2]

    payload = {'email': email}

    try:
        response = requests.post(url + '/post_email', data=payload)
        response.raise_for_status()  # Check if the request was successful

        print("Your email is:", email)
        print(response.text)

    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        sys.exit(1)
