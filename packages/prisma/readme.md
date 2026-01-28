# Steps:

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