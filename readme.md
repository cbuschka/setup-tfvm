# setup-tfvm - Github Action to setup [Terraform Version Manager](https://github.com/cbuschka/tfvm)

## Usage

```yaml
name: 'deploy'

on:
  push:
    branches:
      - main
  pull_request:

jobs:
  test:
    name: deploy
    runs-on: ubuntu-latest

    steps:
      - name: checkout
        uses: actions/checkout@v2

      - name: setup tfvm
        uses: cbuschka/setup-tfvm@v1

      - name: run terraform version
        run: terraform init && terraform apply --auto-approve
```

## License

Copyright (c) 2020 by [Cornelius Buschka](https://github.com/cbuschka).

[Apache License, Version 2.0](./license.txt)

