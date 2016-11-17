# Keep You In My Prayers - React - Firebase

A React and Firebase project made with a boilerplate starter project fork of [mindeavor](https://github.com/mindeavor).

An attempt to help a congregation keep track of their Prayers.

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

## Browserify-Middleware

Like the original project, Node Catapult-React-SASS relies on [browserify-middleware](https://github.com/ForbesLindesay/browserify-middleware).

Browserify-Middleware is used to babelify, bundle, and compile all code and stylesheets into a single app-bundle.js file for inclusion in index.html.

## Deployment 

I had some trouble getting the app-bundle.js to work with firebase. My work around was to browserify it manually and add the bundled js file into the client/public directory. Then update the firebase.json file to redirect to the new file. Apart from this minor issue, firebase has great documentation on [Hosting](https://firebase.google.com/docs/hosting/).
