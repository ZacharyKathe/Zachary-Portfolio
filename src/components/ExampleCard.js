import React from "react";
import Zoom from 'react-reveal/Zoom'
import Roll from 'react-reveal/Roll'
import Bounce from 'react-reveal/Bounce'
class ExampleCard extends React.Component{
    render(){
    
    return(
        
        <div className='exampleDiv'>
        <Roll>
        <a href="page1.html#pitchVideo" className="sample-img_1">
           
          <h6 className='white'>App Creation</h6>
          <h6 className='white'>Figma/JavaScript</h6>
        </a>
        </Roll>
        <Bounce>
        <a href="page1.html#esriText" className="sample-img_2">
          <h6 className='white'>ESRI Story Map</h6>
          <h6 className='white'>ArcMap Online/R</h6>
        </a>
        </Bounce>
        </div>
    
    )
  }
}

export default ExampleCard;