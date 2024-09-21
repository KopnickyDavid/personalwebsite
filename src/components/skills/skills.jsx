import './skills.css';
function Skills() {
    return (  
        
        <div className='skills'>
        <h1>My Skills</h1>
        <div className='skill-container'>
            <div className='skill'>
                <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'></img>
                <h2>React </h2>
                <p>I have over two years of experience working with React, building dynamic and responsive user interfaces. In this time, I've become skilled in using components, managing state, and optimizing performance to create efficient web applications.</p>
            </div>
            <div className='skill'>
                <img src='https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png'></img>
                <h2>JavaScirpt</h2>
                <p>I've been working with JavaScript since I started coding, applying it to a wide range of projects. This includes creating user interfaces for FiveM, building simple websites, and developing full web applications. Over time, I’ve honed my skills in  efficient, clean code for diverse applications.</p>
            </div>
            <div className='skill'>
                <img src='https://images.ctfassets.net/em6l9zw4tzag/oVfiswjNH7DuCb7qGEBPK/b391db3a1d0d3290b96ce7f6aacb32b0/python.png'></img>
                <h2>Phyton</h2>
                <p>I have used Python for a variety of projects, ranging from simple applications to more complex GUI-based programs. This has allowed me to gain experience in both backend functionality and building interactive user interfaces.</p>
            </div>
        </div>
        </div>  
    );
}

export default Skills;
