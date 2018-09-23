import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA_hLcJL-kc0j2p6UPXA-AA0VmFau5KV-4",
    authDomain: "bloc-chat-react-387bc.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-387bc.firebaseio.com",
    projectId: "bloc-chat-react-387bc",
    storageBucket: "bloc-chat-react-387bc.appspot.com",
    messagingSenderId: "44400581391"
  };
  firebase.initializeApp(config);


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Bloc Chat</h1>
        <h2>See our rooms below</h2>
        </header>
        <RoomList firebase={firebase}/>
      </div>
    );
  }
}

export default App;
