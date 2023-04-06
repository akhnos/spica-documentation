---
# Display h2 to h4 headings
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# Command Line Interface

Spica provides command line interface (CLI) to manage your instances on your local machine.

To install it, enter the following into your terminal:

```shell
$ npm install @spica/cli
```

Usage: 

```shell
$ spica <command> [ARGUMENTS...] [OPTIONS...]
```
:::info
You can use `-h` or `--help` after a command to get more information about it.
:::

CLI has different types of commands. These are; ORM, Context, Objects, Project.

### Object Relational Mapping (ORM) Commands

Spica has its own ORM commands. Our ORM feature supports `bucket` and `function` modules. To get more information
about the ORM feature, check out [here](/docs/concept/orm.md).

- `spica bucket orm`
- `spica function orm`

### Context Commands

Contexts are where you can keep your different Spica instances. 

- `spica context ls`: Lists all of the context instances.
- `spica context remove <name>`: Removes context. 
- `spica context set [-a <apikey> | --apikey <apikey> ] [--name <name>] [--url <url>]`: Sets context.
- `spica context switch <name>`: Switches context.

#### Context Command Options

| Parameter  | Description                                      | Required |Type                                                                                                                                                                                     |
| ---------- | ------------------------------------------------ | -------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `a`-`apikey`    | Authorize via an API key.                 | Yes | number          |
| `name`          | Name of the context.                      | Yes | string          |
| `url`           | URL of the API.                           | Yes | string          |

### Objects Commands

- `spica objects apply [-f | --filename]`: Puts objects to the API.
- `spica objects delete [-f | --filename] [--ignore-not-found]`: Deletes object(s) from the API.
- `spica objects get <kind> <name> [-n | --namespace]`: Gets an object from the API.

#### Object Command Options 

| Parameter  | Description                                      | Required |Type                                                                                                                                                                                     |
| ---------- | ------------------------------------------------ | -------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `n`, `namespace`    | Namescape of the object.                        | Yes | string          |
| `kind`              | Kind of the object.                             | Yes | string          |
| `f`, `filename`     | File that contains the configuration to apply.  | No  | string          |
| `ignore-not-found`  | Treat "resource not found" as a successful delete. Defaults to "true" when `--all` is specified. | No | boolean |

### Project Commands

- `spica project ls`: Lists all of the local projects.
- `spica project remove <name> [--retain-volumes]`: Stops and removes a project.
- `spica project start <name> [--api-options] [database-replicas] [-f | --force] [--image-pull-policy] [image-version] [-o | --open] [-p --port] [--restart] [retain-volumes]`: Starts a project on your local machine.
- `spica project sync [--concurrency-limit] [--dry-run] [--ignore-errors] [--modules] [--source-apikey] [--source-url] [-sync-fn-env] [--target-apikey] [--target-url]`: Synchronizes selected module objects between two Spica instances. (local or remote)
- `spica project upgrade <name> <to> [--restart]`: Upgrades the version of the existing local project.

#### Project Command Options

| Parameter  | Description                                      | Required | Default |Type                                                                                                                                                                                     |
| ---------- | ------------------------------------------------ | -------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `source-apikey`    | Authorize via an API key.                             | Yes |    | number       |
| `source-url`       | Name of the context.                                  | Yes |    | string       |
| `target-apikey`    | URL of the API.                                       | Yes |    | string       |
| `target-url`       | API address of the instance where objects will be synchronized to.           | Yes |    | string |
| `api-options`      | Absolute file path that contains API key options as key value in JSON format.| No  |    | string |
| `concurrency-limit`| Increase (if you want to speed up), decrease (if you get some error like ECONNRESET) this value to adjust how many parallel requests that will be sent to the target instance.                           | No | 100  | number  |
| `database-replicas`| Number of database nodes.                             | No | 1    | number  |
| `dry-run` | Shows the changes that will be applied to the target instance. | No |      |         |
| `f`, `force` | Remove the existing project if exists with the same name.   | No |      | number  |
| `ignore-errors` | Set true if you don't want to to interrupt sync process because of failed requests.| No | | boolean |
| `image-pull-policy` | Image pull policy. When `if-not-present` images won't be pulled in if already present on the docker. If not specified, an open port will be used.                                                      | No | 4500 | number  |
| `modules` | Module names of objects that will be synchronized. Available modules are; `bucket`, `function`, `bucket-data`, `apikey`, `policy`.                                                                    | No |      |         |
| `restart` | Restart failed containers if exits unexpectedly.               | No | true | boolean |
| `retain-volumes` | When false, the existing data will be removed.          | No | true | boolean |
