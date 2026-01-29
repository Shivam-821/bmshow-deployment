Run the following command to create mono repo:

```sh
npx create-turbo@latest
```
--- 

# Steps to create a Prisma package:

1. create prisma folder
2. run `npm init -y`
3. run `npx tsc --init`

## Add these line in tsconfig.json: we will use the typescript-config package.

```
{
  "extends": "@repo/typescript-config/base.json"
}
```

4. install dependencies
```
npm install prisma tsx @types/pg --save-dev
npm install @prisma/client @prisma/adapter-pg dotenv pg
```

5. run `npx prisma init --db --output ../app/generated/prisma`

## Add these lines in package.json

```
"devDependencies": {
    "@repo/typescript-config": "workspace:*" // if using npm or yarn just remove workspace:
},
```

6. Now add the schema you want to create.
7. run `npx prisma migrate dev --name init`
8. run `npx prisma generate`

> As we have used the typescript-config package, we similarly need to use this prisma in our app folder.

- So for this we need to export schema from this folder.

1. We create the src folder and create index.ts file in it.
2. We export the schema from this file.

> Add this line in the package.json
```
"exports": {
    "./client": "./src/index.ts"
}
```
---

# Importing the prisma package in app folder:

- Now we need to import the prisma package to web folder.

```
"devDependencies": {
    "@repo/db": "workspace:*" // if using npm or yarn just remove workspace:
},
```

- now do the global installation (its like if we add any package to the package.json like 'express' then it will not come automatically. we need to install it).

- run: `pnpm install`

- now we can import the prisma package in web folder and use it.

```
import prisma from "@repo/db/client";
```

-- now to reapeat the same thing for rest of the apps.