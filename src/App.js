import React from 'react';
import Nav from './myNav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About  from  './About';
import Resources  from  './Resources';
import Home  from  './Home';


class myApp extends React.Component {


      

  render() {
  return (
    
    <div>
      <Nav/>
    
    <div className="main-content container flex-1 bg-white px-30 mx-auto">
      <div className="flex flex-wrap">
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/resources' component={Resources} />
          <Route path='/' component={Home} />
        </Switch>          
        </div>
      </div>
    </div>
  )
  }
}




export default myApp;
