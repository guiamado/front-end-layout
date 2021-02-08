import React, { useState } from 'react';
import './App.css';
import 'assets/scss/main.scss';
import Home from './components/home/Home';
import Sidebar from 'components/sidebar/Sidebar';
import Utils from 'components/commons/Utils';

const App: React.FC = () => {
// function App() {
  const initialStateOpen = !Utils.isSmallDevice;
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(initialStateOpen);
  function onClickIconSidebar() {
    console.log('oi')
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className="App">
        {isSidebarOpen && <Sidebar onCloseSidebar={onClickIconSidebar}/>}
        <Home onClickIconSidebar={onClickIconSidebar}/>
    </div>
  );
}

export default App;
