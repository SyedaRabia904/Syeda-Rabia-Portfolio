import './home.css';
const Home = () => {
    return(
        <>
        
  <p class="line-1  anim-typewriter">
    Hi, My name is Syeda Rabia Amir.<br/>
    I am a frontend developer.<br/>
    A beginner in the industry
  </p>

<div className='image-main-container'>
      <div className="image-container">
        <img src="html.png" alt="HTML" />
        <img src="css.png" alt="CSS" />
        <img src="js.png" alt="JavaScript" />
        <img src="bootstrap.png" alt="Bootstrap" />
      </div>
      <div className="image-container">
        <img src="react.png" alt="React" />
        <img src="nodejs.png" alt="Node.js" />
        <img src="git.png" alt="Git" />
        <img src="C.png" alt="C" />

      </div>
      </div>

        </>
    )
 }
 export default Home
