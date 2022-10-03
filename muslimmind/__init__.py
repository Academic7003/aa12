# import json
# import requests
# import json

# url = "http://notify.eskiz.uz/api/message/sms/send"

# payload={'mobile_phone': '998933277257',
# 'message': 'Foydali ish qilaylik',
# 'from': '4546',
# 'callback_url': 'http://0000.uz/test.php'}
# files=[

# ]
# headers = {
#     "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjUsInJvbGUiOiJ1c2VyIiwiZGF0YSI6eyJpZCI6NSwibmFtZSI6Ilx1MDQyN1x1MDQxZiBCZXN0IEludGVybmV0IFNvbHV0aW9uIiwiZW1haWwiOiJ0ZXN0QGVza2l6LnV6Iiwicm9sZSI6InVzZXIiLCJhcGlfdG9rZW4iOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpJVXpJMU5pSjkuZXlKemRXSWlPalVzSW5KdmJHVWlPaUoxYzJWeUlpd2laR0YwWVNJNmV5SnBaQ0k2TlN3aWJtRnRaU0k2SWx4MU1EUXlOMXgxTURReFppQkNaWE4wSUVsdWRHVnlibVYwSUZOdmJIVjBhVzl1SWl3aVpXMWhhV3dpT2lKMFpYTjBRR1Z6YTJsNkxuVjZJaXdpY205c1pTSTZJblZ6WlhJaUxDSmhjR2xmZEc5clpXNGlPaUpsZVVvd1pWaEJhVTlwU2t0V01WRnBURU5LYUdKSFkybFBhVXBKVlgiLCJzdGF0dXMiOiJhY3RpdmUiLCJzbXNfYXBpX2xvZ2luIjoiZXNraXoyIiwic21zX2FwaV9wYXNzd29yZCI6ImUkJGsheiIsInV6X3ByaWNlIjo1MCwidWNlbGxfcHJpY2UiOjUwLCJiYWxhbmNlIjo4NjAwLCJpc192aXAiOjAsImhvc3QiOiJzZXJ2ZXIxIiwiY3JlYXRlZF9hdCI6bnVsbCwidXBkYXRlZF9hdCI6IjIwMjItMDgtMDFUMDY6MjY6NTYuMDAwMDAwWiJ9LCJpYXQiOjE2NTkzMzcwNjcsImV4cCI6MTY2MTkyOTA2N30.1GRJV5HKQK0L6cLjqk9GBGvA8JUInIrJdnqUBYtS50c"
# }
# response = requests.request("POST", url, headers=headers, data=payload, files=files)

# print(json.loads(response.text))

