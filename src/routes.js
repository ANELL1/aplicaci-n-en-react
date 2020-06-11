import React,{Component} from 'react';
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom'

import './App.css';
import Form from './component/Login/Form'
import Dashboard from './component/Dashboard/dashboard'
import Signup from './component/signup/signup';

class App extends Component{

render(){
  return(

    <Router>
    <Switch>
    <main>
      {/* <Route exact path = "/" component={Home}/> */}
        <Route exact path = "/form" component ={Form}/>   
        {/* <Route exact path = "/dashboard" component ={Dashboard}/> */}
        <Route exact path ="/signup" component ={Signup}/>         
      
       </main>
       </Switch>          
       </Router>
  )
}
}
export default App