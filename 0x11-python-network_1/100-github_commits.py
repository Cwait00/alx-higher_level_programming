import requests
import sys

def github_commits(repo, owner):
    url = f'https://api.github.com/repos/{owner}/{repo}/commits'
    response = requests.get(url)
    
    if response.status_code == 200:
        commits = response.json()[:10]  # Get the first 10 commits
        for commit in commits:
            sha = commit['sha']
            author_name = commit['commit']['author']['name']
            print(f'{sha}: {author_name}')
    else:
        print(f'Error: {response.status_code}')

if __name__ == "__main__":
    if len(sys.argv) == 3:
        repo_name = sys.argv[1]
        owner_name = sys.argv[2]
        github_commits(repo_name, owner_name)
    else:
        print('Usage: ./100-github_commits.py <repo_name> <owner_name>')
