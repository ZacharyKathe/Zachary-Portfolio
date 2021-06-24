import React from "react";
import Roll from 'react-reveal/Roll';
import Jump from 'react-reveal/Jump';
import ExampleCard from "../ExampleCard";

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
        <h4 className='passwordGenExplain'>Need a random secure password? This will give you just that!</h4>
        <h4 className='passwordGenExplain'>Pick between 8-129 character length, special characters, numbers, and upper case letters.</h4>
        <Roll>
        <a href="https://zacharykathe.github.io/passwordGenerator/" className="sample-img_5">
          <h6 className='white'>Password Generator</h6>
          <h6 className='white'> Technology- JavaScript| CSS| html|</h6>
        </a>
        
        </Roll>
        
        <Roll>
        
        <a href="https://blogspotz444.herokuapp.com/" className="sample-img_7">
          <h6 className='white'>BlogSpotz</h6>
          <h6 className='white'> Technology- jQuery| MySQL-DB| CSS| bcrypt|</h6>
        </a>
        <h4 className='blogSpotzEx'> BlogSpotz is a full-stack application created by myself.</h4>
        <h4 className='blogSpotzEx'>Write a blog and reply to other blogs!</h4>
        </Roll>
          
        </div>
        <div className='parallaxTwo'>
        <h6 className='recentAch'>
          Below is undergraduate work
        </h6>
        </div>
        <ExampleCard />
    </div>
  );

 }

}


export default Work;
