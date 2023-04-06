# Version Control

The version control feature works with Git and allows you to keep track of changes to your Spica instance by using the git version control system. 

The supported commands are the following; `add`, `commit`, `reset`, `tag`, `stash`, `checkout`, `branch`, `fetch`, `pull`, `push`, `merge`, `rebase`, `remote`, `diff`, `log`, `clean`.


## Add Remote Origin
Adding a remote origin to your local repository allows you to share your changes with others and collaborate on a project. The following are the steps to add a remote origin and push your local changes.

```bash
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://USERNAME:ACCESSTOKEN@REPO_ADDRESS
# git remote add origin https://spica-engine:ghp_HUHgBdflTB7bBhU73lSwFAl1PX9laD0E0ksb@github.com/spica-engine/spicaTest.git
git push -u origin main
```

:::info
For information about how to get the personal access token, click [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).
:::

## Clone Repository

Cloning a Git repository is a simple and efficient way to obtain a local copy of an existing repository. You can easily do this with the steps outlined below.

```bash
git remote add origin https://USERNAME:ACCESSTOKEN@REPO_ADDRESS
git fetch --all
# perform it for each branch that will be switched to
# local changes will be overwritten from now
git checkout -b BRANCH_NAME origin/BRANCH_NAME --force
git reset --hard origin/BRANCH_NAME
# in case there are untracked directories, files
git clean -d -f
```

#### Example
```bash
git remote add origin https://spica-engine:ghp_HUHgBdflTB7bBhU73lSwFAl1PX9laD0E0ksb@github.com/spica-engine/spicaTest.git
git fetch --all
git checkout -b branch1 origin/branch1 --force
git reset --hard origin/branch1
git clean -d -f
```

:::info
For information about how to get the personal access token, click [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).
:::

## Add Specific Files

Adding specific files in Git allows you to only track changes to the files that you want, and ignore changes to other files.

### Module

Used to add specific modules. These modules can be the following: bucket, function

```bash
git add MODULE_NAME/*
# git add bucket/*
```

#### Resource

After specifying the module, you can also specify which resource you want to add.

```bash
git add MODULE_NAME/RESOURCE_ID/*
# git add bucket/63d7ad07285ba1002bcbd1f5/*
```

#### Sub-module

The submodule can also be specified.

```bash
git add MODULE_NAME/RESOURCE_ID/SUBMODULE_NAME*
# git add bucket/63d7ad07285ba1002bcbd1f5/*
```

### Functions

```bash
git add function/FUNCTION_ID/*
#git add function/63d7b25f285ba1002bcbd1fd/*
```

#### Environment Variables 

Used for only adding a functions environment variables.

```bash
git add function/FUNCTION_ID/env*
# git add function/63d7b25f285ba1002bcbd1fd/env*
```

#### Index

Used for only adding function indexes.

```bash
git add function/FUNCTION_ID/index*
#  git add function/63d7b25f285ba1002bcbd1fd/index*
```

#### Dependencies 

Used to add dependencies of the specified function.

```bash
git add function/FUNCTION_ID/package*
# git add function/63d7b25f285ba1002bcbd1fd/package*
```

#### Schema

Used to  add function name, triggers, timeout etc.

```bash
git add function/FUNCTION_ID/schema*
# git add function/63d7b25f285ba1002bcbd1fd/schema*
```

### Examples

Add all functions but exclude their environment variables
```bash
git add function/*
git reset -- function/**/env*
```