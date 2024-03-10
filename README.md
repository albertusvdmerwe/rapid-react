# reacto-gen

This CLI has been written for the user of it to be able to install it in their project, and to run commands that will generate a variety of different React Components and React Query hooks that will facilitate sending network requests.

## Installation instructions

- In order to install this package in your project, simply run `npm install reacto-gen --save-dev` or `yarn add reacto-gen --dev`.

- Add this script to your project's `scripts` section in your `package.json` file:

```json
{
    "scripts":{
        "reacto-gen": "npm run --prefix ./node_modules/reacto-gen run-plop"
    }
}

```

- Then use your command line to run:
`npm run reacto-gen` or `yarn reacto-gen`.

## DevOps

### Tools set up for code quality

- ESlint - Identify Javascript issues
- Prettier - Format files in a set way
- Lint Staged - Ensure that staged files are checked by ESLint and Prettier before a Git commit is created.
- Husky - Use lint-staged during the pre-commit hook.
