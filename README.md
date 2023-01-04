# frontend-code-factory

Standalone front-end development system, based on Gulp.js

## Getting started

Install dependencies:

```sh
npm i # or npm install
```

Build the project:

```sh
npm run build
```

Start webserver serving build directory's contents:

```sh
npm run watch
```

> Gulp commands work too, but require Gulp to be installed globally

### Other built-in scripts

Rebuild the project and run development server immediately:

```sh
npm run starter
```

Run a script generating some draft markup (this functionality is not maintained):

```sh
npm run init
```

## Folder structure

```
│
├─  ./gulp/             # Gulp tasks
├─  ./server/           # Initial folder with built project files,
│                       # also serves as development webserver root
├─  ./src/              # Project source files
├─  ./gulpfile.js       # Gulp task runner initializer
├─  ./deploy.conf.js    # `gulp deploy` task parameters
├─./package.json
└─./node_modules/
```
