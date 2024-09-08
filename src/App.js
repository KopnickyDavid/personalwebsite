import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='mainpage'>
        <div className='title'>Hello,I'm David</div>
        <div className='undertitle'>I'm Student With Passion For Programming</div>
        <Link to="/destination">
            <button >GitHub</button>
        </Link>
      </div>
      <div className='projects'>
        <h1>My Projects</h1>
      </div>
    </div>
  );
}

export default App;
