# Node Catapult - React - SASS

A React and SASS enhanced fork of [mindeavor](https://github.com/mindeavor)'s boilerplate starter project: [node-catapult](https://github.com/mindeavor/node-catapult).

Use as a minimal starting point for rapidly building React apps.

Please see the original project for a lot of great documentation on rapidly building node/express apps with the boilerplate.

## Getting Started

Usage remains the same as the original project:

```
$ git clone https://github.com/no-fi/node-catapult-react-sass my-project
$ cd my-project
$ npm install
$ npm start
```

Now visit [localhost:4000](http://localhost:4000/)

### Running the Tests

Node Catapult-React-SASS expands upon Node Catapult's basic test framework by including Enzyme for front-end React tests.

Client tests should be placed in `test/client` and server tests should be placed in `test/server`.

To run all tests, simply run `npm test`.

Additionally, you can run just client-side tests with `npm run test_client` or just server-side tests with `npm run test_server`.

### Using SASS

Node Catapult-React-SASS uses scssify to bundle all .sass, .css, and .scss files. All client-side code and stylesheets are packaged into a single app-bundle.js file.

To use, simply place .sass, .css, or .scss files in the sass directory. They can then be imported into app.sass for automatic inclusion.

## Browserify-Middleware

Like the original project, Node Catapult-React-SASS relies on [browserify-middleware](https://github.com/ForbesLindesay/browserify-middleware).

Browserify-Middleware is used to babelify, bundle, and compile all code and stylesheets into a single app-bundle.js file for inclusion in index.html.
