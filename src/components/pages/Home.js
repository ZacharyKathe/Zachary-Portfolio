import React from "react";
import Zoom from "react-reveal/Zoom"
import Rotate from 'react-reveal/Rotate'
import Jump from 'react-reveal/Jump'
import Slide from 'react-reveal/LightSpeed'
import ProjectCard from '../ProjectCard'
class Home extends React.Component {
  render(){
  return (
    <div>
     
      
        <div className='parallax'>
        <Jump><h3 className='recentAch'> Hello, I'm Zachary</h3></Jump>
        <img className="resumepic" src="images/resumepicture.jpg" width="200px" height= "300px"></img>
        </div>

        <div className="checkmarks">
        <Zoom><h3 className='checkmarkdata'>✔ I create full-stack applications</h3></Zoom>
        <Zoom><h3 className='checkmarkdata'>✔ Ecommerce websites</h3></Zoom>
        <Zoom><h3 className='checkmarkdata'>✔ Experience with Merchant gateway setup & integration</h3></Zoom>
        <Zoom><h3 className='checkmarkdata'>✔ Esri ArcGIS Portal administator for the City of Lake Stevens</h3></Zoom>
        </div>

      <div className='parallax'>
        <h6 className="discProj">The Following apps where group projects in the University of Washington's full-stack web development program.</h6>
      </div>
      
      <ProjectCard/>
      <div className='parallaxTwo'>
        <h4 className='kinetikExplain'>Kinetik tracks your goals and allows you to create a group that you can invite friends too.</h4>
        <h4 className='kinetikExplain'>Share a common goal with your group and give encouragement!</h4>
      <a href="http://kinetikapp.herokuapp.com/" className="sample-img_8">
          <h6 className='white'>Kinetik App</h6>
          <h6 className='white'>Technology- React.js| JavaScript| CSS| mySQL| Bootstrap|</h6>
        </a>
    </div>
    <h2 className='Zachary'>zacharykathe@gmail.com  480-252-6428</h2>
    </div>
    
  );
 }
}


export default Home;
