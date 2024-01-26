import requests
import sys

def github_commits(repo, owner):
    # GitHub API endpoint for commits
    url = f'https://api.github.com/repos/{owner}/{repo}/commits'

    # Make a GET request to the GitHub API
    response = requests.get(url)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Extract and print the information for each commit
        for commit in response.json()[:10]:  # Take only the first 10 commits
            sha = commit['sha']
            author_name = commit['commit']['author']['name']
            print(f'{sha}: {author_name}')

    else:
        print(f'Error: Unable to fetch commits. Status code: {response.status_code}')

if __name__ == '__main__':
    # Check if the correct number of arguments is provided
    if len(sys.argv) != 3:
        print('Usage: python3 100-github_commits.py <repository> <owner>')
    else:
        # Extract repository and owner from command-line arguments
        repository, owner = sys.argv[1], sys.argv[2]
        github_commits(repository, owner)
