import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore} from 'redux';
import {reducer} from './store/reducer';
import {Provider} from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
	
serviceWorker.register();
