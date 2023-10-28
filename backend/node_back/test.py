#!/bin/python

#!/bin/python

import os
import requests
import json

backend = "http://localhost:3001"


def debug(message):
    if os.environ.get("DEBUG") is not None:
        print("[DEBUG]", message)


def get(endpoint, data=None):
    res = requests.get(backend + endpoint, params=data)
    debug(endpoint + " => " + str(res.content))
    return json.loads(res.content)


def post(endpoint, data=None):
    res = requests.post(backend + endpoint, json=data)
    debug(endpoint + " => " + str(res.content))
    return json.loads(res.content)


def ok(res):
    return res["status"] == "OK"


if __name__ == "__main__":
    print(post("/new_joboffer", {"asdf": 2}))
