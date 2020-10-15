import React,{Component} from 'react';
import {BrowserRouter as Router , Switch ,Route, Redirect} from 'react-router-dom'

import './App.css';
import Form from './component/Login/login'
import Dashboard from './component/Dashboard/dashboard'
import Signup from './component/signup/signup';
import Profile from './component/Profile/profile';
import Cliente from './component/Profile/cliente'
import Empleado from './component/Profile/empleado'
import Producto from './component/Profile/producto'
import Empresa from './component/Profile/empresa'
import Tablas from './component/tables/tables'
import Pruebas from './component/pruebas/pruebas'
import checkToken  from '../src/resolvers/checkToken'

class App extends Component{

render(){
  const PrivateRoute = ({component:Component,...rest})=>(
    <Route {...rest  } render={(props)=> checkToken() === true ? <Component {...props}/> : <Redirect to="/"/>} />
  )
  return(

    <Router>
    <Switch>
    <main>
      {/* <Route exact path = "/" component={Home}/> */}
        <Route exact path = "/" component ={Form}/>   
        <PrivateRoute exact path = "/dashboard" component ={Dashboard}/> 
        <PrivateRoute exact path ="/signup" component ={Signup}/> 
        <PrivateRoute exact path ="/profile" component ={Profile}/> 
        <PrivateRoute exact path ="/cliente" component ={Cliente}/>
        <PrivateRoute exact path ="/empleado" component ={Empleado}/>
        <PrivateRoute exact path ="/producto" component ={Producto}/>
        <PrivateRoute exact path ="/empresa" component ={Empresa}/>
        <PrivateRoute exact path ="/tablas" component ={Tablas}/>
        <Route exact path = "/pruebas" component ={Pruebas}/>
        

      
       </main>
       </Switch>          
       </Router>
  )
}
}
export default App