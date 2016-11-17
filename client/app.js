import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/MyComponent.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Firebase from 'firebase';
import fbconfig from './../server/fbconfig';
// Import compiled SASS
require('./sass/app.sass');
injectTapEventPlugin();
Firebase.initializeApp(fbconfig);

ReactDOM.render(<App />, window.document.getElementById('app'));
