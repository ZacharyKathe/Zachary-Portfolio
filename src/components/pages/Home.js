import React from "react";
import Roll from 'react-reveal/Roll'
import Zoom from "react-reveal/Zoom"
class Home extends React.Component {
  render(){
  return (
    <div>
      <h1>Zachary Kathe</h1>
      <Zoom>
      <p>
      I am a recent graduate from the University of Washington specializing 
      in Geographic Information Systems and Informatics. After graduation, I was 
      accepted into the UW professional Python certification program. This highly 
      indepth program goes over Django and server API's. Furthermore, I am now 
      enrolled in UW's full-stack web development bootcamp to hone my developer skills.
      I am seeking a full-time career with a company where I can continuously learn, grow, 
      and demonstrate my abilities programming.
      </p>
      </Zoom>
      <a href="https://gear-wise.herokuapp.com/" className="sample-img_6">
          <p>GearWise website</p>
          <h6>heroku/JavaScript/CSS/html/SQL</h6>
        </a>
    </div>
  );
 }
}


export default Home;
