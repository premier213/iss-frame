# Frame

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help# EspadComponent

## linter

- linter for all project `nx run-many --all --target=lint`
- fix errors and warn in all project `nx run-many --all --target=lint --fix`
- linter for special project `nx lint <project-name>`

## Document Format

- prettier check files `nx format:check`
- prettier write files `nx format:write`

## Create New Project

- for create library `nx g @nrwl/react:lib my-lib --bundler=vite`
- for create apps `nx g @nrwl/react:app my-app --bundler=vite`
- when creating a package for check type should add an executor to `project.json`

  ```
  "type-check": {
    "executor": "nx:run-commands",
    "options": {
      "commands": [
        "tsc -p packages/<project-name>/tsconfig.lib.json --noEmit",
        "tsc -p packages/<project-name>/tsconfig.spec.json --noEmit"
      ]
    }
  },
  ```

- To setup jest in the package need to add the below code to `jest.config.js`
  ```
  moduleFileExtensions: ["js", "ts", "tsx"],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  ```
- To implement a semantic version for the new package should be added version to the `project.json` file
  ```
  "version": {
      "executor": "@jscutlery/semver:version",
      "options": {
        "baseBranch": "dev",
        "preset": "conventional",
        "tagPrefix": "${projectName}@"
      }
    }
  ```
- To support `.tsx` files should be added below code to `tsconfig.spec.json` for jest config

  ```
  {
    "extends": "./tsconfig.json",
    "compilerOptions": {
      "allowUmdGlobalAccess": true,
      "outDir": "../../dist/out-tsc",
      "module": "commonjs",
      "types": ["jest", "node"]
    },
    "include": [
      "jest.config.ts",
      "jest.setup.ts",
      "src/**/*.test.ts",
      "src/**/*.spec.tsx",
      "src/**/*.spec.ts",
      "src/**/*.d.ts"
    ]
  }

  ```

- add `import "@testing-library/jest-dom"` into `jest.setup.ts`
- add `setupFilesAfterEnv: ["./jest.setup.ts"]` into `jest.config.ts`

## Jest

- initial jest for packages `nx g @nrwl/jest:jest-project --project=<project-name>`
- run jest `nx test <project-name>`
- run jest watch mode `nx test <project-name> --watch`
- update snapshot jest `nx test <project-name> -u`
- report snapshot coverage `nx affected:test --codeCoverage`

## Storybook

- start storybook in develop mode `nx run-many --target=dev`

## semantic version

- add version to special package `nx run <project-name>:version`
- add version to all packages `nx run-many --all --target=version`
- commit type `fix` is `patch` version
- commit type `feat` is `minor` version
- commit body contains the text `BREAKING CHANGE` is `major` version
- force a patch increment even if library source didn't change `--allowEmptyRelease`
- push tags to git with `git push --tags`

## commitlint

- add new rule to pre-commit `npx husky add .husky/pre-commit 'echo rule'  `

## Destroy project

- destory project in nx framework `nx generate remove <project-name>`


Visit the [Nx Documentation](https://nx.dev) to learn more.
