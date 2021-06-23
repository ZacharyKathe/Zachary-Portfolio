import React from "react";
import Zoom from "react-reveal/Zoom"
import Rotate from 'react-reveal/Rotate'
import Jump from 'react-reveal/Jump'
import ProjectCard from '../ProjectCard'
class Home extends React.Component {
  render(){
  return (
    <div>
     <Rotate> <h2 className='Zachary'><h2>zacharykathe@gmail.com</h2>  480-252-6428</h2></Rotate>
      
        <div className='parallax'>
        <Jump><h3 className='recentAch'> Hello, nice to meet you!</h3></Jump>
        <h3 className='recentAch'>I'm Zachary & I create full-stack applications</h3>
        <h3 className='recentAch'>Scroll Down</h3>
        </div>
        
      <p className='introPara'>
      I am a recent graduate from the University of Washington specializing 
      in Geographic Information Systems and Informatics. After graduation, I was 
      accepted into the UW professional Python certification program. This highly 
      in-depth program goes over Django and server API's. After 3-months of doing Python, I found a calling in web development, so I switched programs at the University. I
      enrolled in UW's full-stack web development bootcamp to hone in on my programming skills. 
      I am seeking a full-time career with a company where I can continuously learn, grow, 
      and demonstrate my abilities with web-development.
      </p>
      <div className='parallax'>
        <h6 className="discProj">The Following apps where group projects in the University of Washington's full-stack web development program.</h6>
      </div>
      
      <ProjectCard/>
      <div className='parallaxTwo'>
      <a href="http://kinetikapp.herokuapp.com/" className="sample-img_8">
          <h6 className='white'>Kinetik App</h6>
          <h6 className='white'>Technology- React.js| JavaScript| CSS| mySQL| Bootstrap|</h6>
        </a>
    </div>
    </div>
  );
 }
}


export default Home;
