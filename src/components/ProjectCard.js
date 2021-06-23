import React from "react";
import Roll from 'react-reveal/Roll'
class ProjectCard extends React.Component{
    render(){
    
    return(
        
        <div className='appDiv'>
          <h4></h4>
        <Roll>
        <a  href="https://gear-wise.herokuapp.com/" className="sample-img_6">
          <h6 className='white'>GearWise website</h6>
          <h6 className='white'> Technology- heroku| JavaScript| CSS| html| mySQL-DB|</h6>
        </a>
        </Roll>
        <Roll>
        <a href="https://brooks-t.github.io/travel-buddy/" className="sample-img_4">
          <h6 className='white'>Travel Buddy website</h6>
          <h6 className='white'>Technology- Materialize| JavaScript| jQuery|</h6>
        </a>
        </Roll>
        </div>
    
    )
  }
}

export default ProjectCard;