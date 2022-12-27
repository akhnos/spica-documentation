
# Object Relational Mapping (ORM)

Spica CLI provides generating objects file commands to prepare your client project easier. 

To generate an ORM file on your local client project, the first thing you need to do is to create a 
new Spica context on your machine using the following command:

```shell
$ spica context set --apikey <YOUR_APIKEY> --name <UNIQUE_NAME> --url <YOUR_API_URL>
```
Switch to the context you've just created:

```shell
$ spica context switch <UNIQUE_NAME>
```
Now that your are on your new Spica context, you can generate an ORM file there. You can generate either a Bucket ORM or 
a Function ORM.

### Generating Bucket ORM File

This feature creates object relational mapping applied versions of [Buckets](bucket.md).

```shell
$ spica bucket orm --path <FOLDER_PATH_TO_GENERATE>
```

:::info
To update any changes to your buckets, simply run this command again:
```shell
$ spica bucket orm
```
:::

This command will generate a `bucket.ts` file in the path you indicated. The path parameter is optional, if you don't give the path
parameter, it will generate the file where you run the command. After you generate the ORM file, you can use your buckets like
in the example below:

```typescript
// Let's say you have a user bucket in your project
import {user,User,initialize} from "./bucket.ts";

// You can use the initialize function with an API key as well
// Bucket.initialize({apikey: <APIKEY>}) 
constructor(){
  initialize({identity: <JWT_TOKEN>});
}

async function getUsers(){
  const allUsers: User[] = await user.getAll(...) // Now you can use every bucket library functions
  return allUsers;
}
```

### Generating Function ORM File

This feature creates object relational mapping applied files to interact with Spica Cloud Functions.

```shell
$ spica function orm --path <FOLDER_PATH_TO_GENERATE> --http-service axios --trigger-types http
```

Running this command will generate a `functions` folder in the path you indicated that has all the functions. 
Inside every individual function folder, there is the `index.js` file. This file contains the functions' trigger methods
using the third party library you specify. 

The path parameter is optional. If you didn't give the path, it will generate the file where you run the command. 

The http-service and trigger-types parameters are also optional. The http-service determines which third party library will be responsible for sending requests.
The supported libraries are; [Axios](https://axios-http.com/docs/intro). 

trigger-types sets the trigger types that will be filtered. Its default value is http.

:::info
To update any changes to your functions, simply run this command again:
```shell
$ spica function orm
```
:::

You can use your functions like in the example:

```typescript
// Let's say you have a function that gets all users
// import * as userFunction from "./functions/userFunction" Importing all the trigger methods
import { getAllUsers } from "./functions/userFunction" // Importing a trigger

// You can use the initialize function with an API key as well
// Bucket.initialize({apikey: <APIKEY>}) 
constructor(){
  initialize({identity: <JWT_TOKEN>});
}

async function getUsers(){
  const allUsers = await getAllUsers() // Now you can use every bucket library functions
  return allUsers;
}
```
