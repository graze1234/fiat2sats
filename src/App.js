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
      <div className="cointainer flex-1 mx-auto text-sm py-5 text-center">
        <p className="text-yellow-500">Thank you Satoshi.</p>
        <p className="text-gray-500">If you find this useful a few sats keep the server going: bc1qqyc3lcskfqwsym99aav0rdjc2sstxkfq6we93d</p>
      </div>
    </div>
  )
  }
}




export default myApp;
