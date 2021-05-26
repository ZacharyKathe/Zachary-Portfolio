import React from "react";
import Roll from 'react-reveal/Roll'
import Jump from 'react-reveal/Jump'

class Work extends React.Component {
  render(){
  
  return (
    <div>
      <div className='parallaxTwo'>
        <Jump>
        <h6 className='recentAch'>
          Scroll Down
        </h6>
        </Jump>
      </div>
      
     <div className='workDiv'>
     
        <Roll>
         
        <a href="https://zacharykathe.github.io/passwordGenerator/" className="sample-img_5">
          <h6 className='white'>Password Generator</h6>
          <h6 className='white'>JavaScript/CSS/html</h6>
        </a>
        
        </Roll>
        
        <Roll>
        
        <a href="https://blogspotz444.herokuapp.com/" className="sample-img_7">
          <h6 className='white'>BlogSpotz</h6>
          <h6 className='white'>Node.js/MySQL-DB/CSS</h6>
        </a>
        </Roll>
        </div>
        <div className='parallaxTwo'></div>
         
    </div>
  );

 }

}


export default Work;
