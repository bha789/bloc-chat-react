import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import RoomList from './components/RoomList';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
