import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './components/MyComponent.jsx';
import SampleTagListContainer from './components/SampleTagListContainer.jsx';

// Import compiled SASS
require('./sass/app.sass');

ReactDOM.render(<MyComponent title='Welcome to Node Catapult - React - SASS!'/>, window.document.getElementById('app'));
