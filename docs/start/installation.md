# Installation

## CLI

Spica provides CLI to manage your instances on your local machine.

1. To install CLI, simply enter the following command to your terminal:

```shell
$ npm install @spica/cli -g
```

2. After CLI has been installed successfully, you can run a Spica instance on your local machine:

```shell
$ spica project start <instance name>
```

> Important: To run `start` command, you must have [Docker](https://www.docker.com/) installed on your development environment.

3. Accessible URL and credentials of your instance will appear on the console. After you logged in, you can start to develop your first project.

## Libraries

#### Bucket Module

The Bucket module is used for all Bucket operations including data and real-time data operations. 

```shell
npm install @spica-devkit/bucket
```

#### Database Module

The Database Module is an in-memory module that has a public API for basic database operations.

```shell
npm install @spica-devkit/database
```

#### Identity Module

The Identity module helps in the creation, management and manipulation of identites. This module also provides
attaching and detaching policies to such identities. 

```shell
npm install @spica-devkit/identity
```

#### Storage Module

The Storage module is utilized to make basic storage operations like downloading the storage entries.

```shell
npm install @spica-devkit/storage
```
