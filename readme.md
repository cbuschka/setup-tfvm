# setup-tfvm
[![Build](https://github.com/cbuschka/setup-tfvm/workflows/build/badge.svg)](https://github.com/cbuschka/setup-tfvm) [![Integration-Test](https://github.com/cbuschka/setup-tfvm/workflows/integration-test/badge.svg)](https://github.com/cbuschka/setup-tfvm) [![Latest Release](https://img.shields.io/github/release/cbuschka/setup-tfvm.svg)](https://github.com/cbuschka/setup-tfvm/releases) [![License](https://img.shields.io/github/license/cbuschka/setup-tfvm.svg)](https://github.com/cbuschka/setup-tfvm/blob/main/license.txt)

### Github Action to setup [tfvm](https://github.com/cbuschka/tfvm)

tfvm is a terraform version manager that installs the right terraform version
configured in your project on demand. tfvm looks like the original terraform
bin and can be called in the same way as terraform can be called.

For more information, please visit [tfvm - Terraform Version Manager](https://github.com/cbuschka/tfvm).

This github action can be considered as an alternative to [setup-terraform](https://github.com/hashicorp/setup-terraform)
that requires the terraform version number to be configured redundantly in the workflow file.

setup-tfvm runs on Linux, MacOS and Windows.

## Usage

```yaml
steps:
  - name: setup tfvm
    uses: cbuschka/setup-tfvm@v1

  - name: run terraform
    run: terraform init && terraform apply --auto-approve
```

## License

Copyright (c) 2020 by [Cornelius Buschka](https://github.com/cbuschka).

[Apache License, Version 2.0](./license.txt)

