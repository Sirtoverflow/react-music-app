import React from 'react';
import TopBar from './components/topbar/topbar';
import LeftBar from './components/leftbar/leftbar'
import Main from './pages/main';
import Player from './components/player/player';
import './pages/style/main.css'

function App() {

  return (
    <div className="grid-container">
      <div className="item1"><TopBar /></div>
      <div className="item2"><LeftBar /></div>
      <div className="item3"><Main /></div>
      <div className="item4"><Player/></div>
    </div>
  );
}
export default App;