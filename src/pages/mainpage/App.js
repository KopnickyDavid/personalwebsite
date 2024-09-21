import React from 'react';
import './App.css';
import projectlist from '../../data/projects.json';
import me from '../../pictures/me.jpg';
import { IconContext } from "react-icons";
import { FaGithub } from 'react-icons/fa';
import main from '../../pictures/main.png';
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
          <style jsx global>{`body { margin: 0px;padding: 0px;}`}</style>
      <div className='mainpage'>
        <div className='title'>Hello, I'm David</div>
        <div className='undertitle'>I'm a Student With a Passion for Programming</div>
        <IconContext.Provider value={{ color: "white", className: "react-icons1" }}> 
          <button onClick={() => window.open('https://github.com/KopnickyDavid', '_blank')}> <FaGithub/> GitHub</button>
      </IconContext.Provider>
      </div>
      <div className='picture'>
      <img src={main}></img>
      </div>
      <div className='about'>
        <h1>About me</h1>
        <p><img src={me}></img>
        I’m a high school student with a strong passion for programming that has been with me since a young age. Over the years, I’ve developed a keen interest in building digital solutions, focusing specifically on front-end development. My primary goal is to create engaging, user-friendly interfaces that make an impact. I also work with Python, which has helped me broaden my understanding of programming concepts and problem-solving techniques.
        Currently, I’m in the process of mastering React, one of the most in-demand JavaScript libraries for front-end development. With each project I take on, I aim to refine my skills and push the boundaries of what I can create. Once I’ve honed my React skills, I’m excited to move on to learning Node.js to further enhance my backend knowledge and become a more versatile developer.
        Outside of coding, I’m always looking for ways to stay active, whether it’s through sports or other physical activities. I believe that balancing both mental and physical challenges is important for growth and helps keep me motivated and focused. Programming isn’t just a hobby for me; it’s a way to constantly evolve and learn, and I’m always looking for opportunities to improve my skills and contribute to meaningful projects.</p>

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
