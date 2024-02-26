#!/bin/bash

act push --container-architecture linux/amd64 --artifact-server-path /tmp/artifacts -s GITHUB_TOKEN="$(gh auth token)"
