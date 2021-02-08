import React from 'react';
import './App.css';
import 'assets/scss/main.scss';
import { Row } from 'react-bootstrap';
import Home from './components/home/Home';
import Sidebar from 'components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <Sidebar />
        <Home/>
    </div>
  );
}

export default App;
