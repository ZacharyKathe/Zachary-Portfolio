import React from "react";
import Roll from 'react-reveal/Roll'
class ProjectCard extends React.Component{
    render(){
    
    return(
        
        <div className='appDiv'>
          <h4 className='explainGearWise'>GearWise is a gear tracking app. Create a trip, add items 
            to your gear closet, and add items to your trip to get a total gear weight.
          </h4>
          <h4 className='explainGearWise'>Reload old trips for new ones!</h4>
        <Roll>
        <a  href="https://gear-wise.herokuapp.com/" className="sample-img_6">
          <h6 className='white'>GearWise website</h6>
          <h6 className='white'> Technology- heroku| JavaScript| CSS| html| mySQL-DB|</h6>
        </a>
        </Roll>
        <h4 className="travelBuddyExplain">Travel Buddy gives you city stats, event tickets, and a Covid-19 map of the area you want to travel
          within the US.
        </h4>
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