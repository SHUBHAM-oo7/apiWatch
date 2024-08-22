import requests

def test_api(api_url):
    response = requests.post(api_url)
    if response.status_code == 200:
        return 'Success'
    else:
        print("====",response)
        return 'Fail'

if __name__ == "__main__":
    api_url = 'http://localhost:3000/api/test'
    print(test_api(api_url))
