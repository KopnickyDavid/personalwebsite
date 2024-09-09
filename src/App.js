import React from 'react';
import './App.css';
import projectlist from './projects.json';

function App() {
  const list = projectlist.map((data, index) => (
    <div className='project' key={index}>
    <span className='project-title'> 
      {data.title} 
    </span> 
    </div>
  ));

  return (
    <div className="App">
      <div className='mainpage'>
        <div className='title'>Hello, I'm David</div>
        <div className='undertitle'>I'm a Student With a Passion for Programming</div>
        <button onClick={() => window.open('https://github.com/KopnickyDavid', '_blank')}>GitHub</button>
      </div>
      <div className='projects'>
        <h1>My Projects</h1>
        <div className='project-container'>
          {list} 
        </div>
      </div>
    </div>
  );
}

export default App;
