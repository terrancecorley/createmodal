import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './components/common/modal';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Modal />, document.getElementById('root'));
serviceWorker.unregister();
