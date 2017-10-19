import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './modules/app';
import registerServiceWorker from './registerServiceWorker';
import 'react-photoswipe/lib/photoswipe.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
