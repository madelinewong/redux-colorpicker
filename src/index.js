import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import provider 
import { Provider } from 'react-redux';

//import store
import store from './store';

//wrap store with provider 
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
 document.getElementById('root'));
registerServiceWorker();
