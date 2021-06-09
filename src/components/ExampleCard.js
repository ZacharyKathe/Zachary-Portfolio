import React from "react";
import Zoom from 'react-reveal/Zoom'
import Roll from 'react-reveal/Roll'
import Bounce from 'react-reveal/Bounce'
class ExampleCard extends React.Component{
    render(){
    
    return(
        
        <div className='exampleDiv'>
        <Roll>
        <iframe className='youTubePitch' width="80%" height="900" src="https://www.youtube.com/embed/GJC1-vjYsdE" frameborder="0" id="video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Roll>
        <Bounce>
        <iframe id="arcmap" className='arcMap' src="https://storymaps.arcgis.com/stories/6471821f9aeb4a3b9ba2aa43c2ee1690?header" width="100%" height="950px" frameBorder="0" allowFullScreen allow="geolocation"></iframe>
        </Bounce>
        </div>
    
    )
  }
}

export default ExampleCard;