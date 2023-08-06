import { createRef, useEffect } from 'react';
import './App.css';
import CLOUDS from 'vanta/src/vanta.fog';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom';


function App() {
  let vantaRef = createRef();
  useEffect(() => {
    CLOUDS({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: 0x294187,
      midtoneColor: 0x3c3c7a,
      lowlightColor: 0x454575,
      baseColor: 0x7c71a7,
      blurFactor: 0.56,
      speed: 2.70,
      zoom: 1.80
    });
  }, []);

  return (
    <>
      <div  className="bg" id="vanta" ref={vantaRef}></div>
      <div className='app'>
        
        <header>
          <nav class="navbar">
            <img src="logo.png"  alt="Logo"   className="logo" />
            <ul class="nav-links">
              <input type="checkbox" id="checkbox_toggle" />
              <label for="checkbox_toggle" className="hamburger">&#9776;</label>
              <div className='menu'>
                <li>

                  <Link className="neon-button" to="/">
                    Home
                  </Link>
                </li>
                <li >
                  <Link className="neon-button" to="/Aboutme">
                    About Me
                  </Link>
                </li>

                <li>
                  <Link className="neon-button" to="/projects">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link className="neon-button" to="/contact">
                    Contact
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
        </header>
        <Outlet />
        <footer>
          <p>
            Made with <span className="fa-fa-heart ">&#x2665;</span> by Syeda Rabia
          </p>
        </footer>
      </div>

    </>
  );
}

export default App;
