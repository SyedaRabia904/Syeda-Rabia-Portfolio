import React from 'react';
import './project.css';

const Projects = () => {
  return (
    <>
      <div className='container'>
        <div className="box-panel">
          <div className="widget-container">
            <div className="flip-box flip-box1 common-flip-style">
              <div className="box-front common-box-style">
                <div className="box-content-wrapper">
                </div>
              </div>
              <div className="box-back common-box-style box-bgi-effect">
                <div className="box-content-wrapper">
                  <div className="box-content">
                    <h3>Social media site UI</h3>
                    <p style={{fontSize:'12px',paddingLeft:'8%',paddingRight:'8%'}}>Social media project card UI featuring 6 pages - Home, Discover, Notification, Profile, Login, and Sign Up - built with HTML, CSS, JS, and Bootstrap</p>
                    <button type="button" class="btn ">HTML</button>
                    <button type="button" class="btn ">CSS</button>
                    <button type="button" class="btn ">JS</button>
                    <button type="button" class="btn ">Bootstrap</button>
                    <a href='https://stackblitz.com/edit/web-platform-bjhzq2?file=readme'><button style={{backgroundColor:'hsl(207, 91%, 45%)'}} className='btn'>Preview</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="box-panel">
          <div className="widget-container">
            <div className="flip-box flip-box2 common-flip-style">
              <div className="box-front common-box-style">
                <div className="box-content-wrapper">
                </div>
              </div>
              <div className="box-back common-box-style box-bgi-effect">
                <div className="box-content-wrapper">
                  <div className="box-content">
                    <h3>Portfolio Website</h3>
                    <p style={{fontSize:'12px',paddingLeft:'8%',paddingRight:'8%'}}>"One-page portfolio website built with HTML, CSS, React, and Bootstrap, featuring multiple sections and 3D effects, enabled by routing for seamless navigation."</p>
                    <button type="button" class="btn ">HTML</button>
                    <button type="button" class="btn ">CSS</button>
                    <button type="button" class="btn ">React</button>
                    <button type="button" class="btn ">Bootstrap</button></div>
                   <a href='https://syedarabia.vercel.app/'><button style={{backgroundColor:'hsl(207, 91%, 45%)'}} className='btn'>Preview</button></a>
                </div>               
              </div>             
            </div>
          </div>
        </div>
        <div className="box-panel">
          <div className="widget-container">
            <div className="flip-box flip-box3 common-flip-style">
              <div className="box-front common-box-style">
                <div className="box-content-wrapper">
                </div>
              </div>
              <div className="box-back common-box-style box-bgi-effect">
                <div className="box-content-wrapper">
                  <div className="box-content">
                    <h3>Simple Calculator</h3>
                    <p style={{fontSize:'12px',paddingLeft:'8%',paddingRight:'8%'}}>"Responsive Calculator: A project built with HTML, CSS, JavaScript, and Bootstrap. Experience seamless functionality on any device and simplify your math with ease, anytime, anywhere!"</p>
                    <button type="button" class="btn ">HTML</button>
                    <button type="button" class="btn ">CSS</button>
                    <button type="button" class="btn ">Js</button>
                    <button type="button" class="btn ">Bootstrap</button></div>
                   <a href='https://stackblitz.com/edit/web-platform-hwvb4h?file=readme'><button style={{backgroundColor:'hsl(207, 91%, 45%)'}}className='btn'>Preview</button></a>
                </div>               
              </div>             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
