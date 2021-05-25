import React from "react";
import Zoom from "react-reveal/Zoom"
import Rotate from 'react-reveal/Rotate'
class Home extends React.Component {
  render(){
  return (
    <div>
     <Rotate> <h1>Zachary Kathe</h1></Rotate>
      <Zoom>
        <div className='parallax'>
        <h3 className='recentAch'>Nice To Meet You!</h3>
        <h3 className='recentAch'>Scroll Down</h3>
        </div>
        
      <p className='introPara'>
      I am a recent graduate from the University of Washington specializing 
      in Geographic Information Systems and Informatics. After graduation, I was 
      accepted into the UW professional Python certification program. This highly 
      in-depth program goes over Django and server API's. After 3-months of doing Python, I realized 
      I wanted to develop web applications, so I switched programs. I
      enrolled in UW's full-stack web development bootcamp to hone in on my developer skills.
      I am seeking a full-time career with a company where I can continuously learn, grow, 
      and demonstrate my abilities with programming.
      </p>
      <div className='parallax'>
        <h6 className="discProj">The Following apps I made in the University of Washington's full-stack web development program.</h6>
      </div>
      </Zoom>
      
    </div>
  );
 }
}


export default Home;
