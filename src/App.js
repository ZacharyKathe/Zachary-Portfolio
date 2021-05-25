import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Work from "./components/pages/Work"
import {Stage, Sprite} from '@inlet/react-pixi'
import ProjectCard from './components/ProjectCard'
import ExampleCard from './components/ExampleCard'

function App() {
  return (
    <div>
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Work} />
        
      </div>
    </Router>
    <ProjectCard/>
    <div className='parallaxTwo'>
      <h6 className='discProj'>These next two apps were made while I was an undergrad at UW.</h6>
    </div>
    <ExampleCard/>
    </div>
  );
}

export default App;
