import axios from 'axios'
import React,{Component} from 'react'
import imagen from '../imagenes/admin.png'

import {
    Card, CardImg, Row,
     Button, Form, FormGroup, Label, Input,NavItem, NavLink,CardHeader} from 'reactstrap';

class Login extends Component{
    constructor(props){
        super(props)
        this.state ={
            user:"",
            pass:""
        }
    }

    componentWillMount(){
        localStorage.removeItem("nombre")
        localStorage.removeItem("apellidos")
        localStorage.removeItem("correo")
        localStorage.removeItem("ape")
        localStorage.removeItem("id")


    }

    
    onChangeInput =(e)=>{
        console.log("eventoonChange" , e)
        const {id,value} = e.target;
        this.setState({
            [id]:value
        })
    }
    onSubmitBtn = (e)=>{
        e.preventDefault();  
        const API='http://localhost:4000/graphql'   
        axios({
            url:API,
            method:'post',
            data:{
                query:`
                query{
                   login(data:"${[this.state.user,this.state.pass]}"){
                    message
                       id
                       nombre
                       apellidos
                       ape
                       correo
                       contrasena
                       token
                   } 
                }
                `
            }   
             }).then(response=>{
                 console.log( 'este es el response',response)
                if(response.data.data.login.message=="login exitoso"){
                    localStorage.setItem("id",response.data.data.login.id)
                    localStorage.setItem("nombre",response.data.data.login.nombre)
                    localStorage.setItem("apellidos",response.data.data.login.apellidos)
                    localStorage.setItem("ape",response.data.data.login.ape)
                    localStorage.setItem("correo",response.data.data.login.correo)
                    localStorage.setItem("Token",response.data.data.login.token)

                    alert(`Bievenido ${response.data.data.login.nombre} ${response.data.data.login.apellidos} ${response.data.data.login.ape}`)
                    this.props.history.push("/profile")

                }
                else{
                    alert("usuario y contraseña incorrectos")
                }
             })
             .catch(err=>{
                 console.log('error',err.response)
             })


    //     if(this.state.user=="jesus" && this.state.pass=='123' ){
    //         this.props.history.push("/dashboard")

    //     }  
    //         console.log(this.state.user,this.state.pass)
  
    }
     

     render(){
        return(
<React.Fragment>
{/* <Card style={{ backgroundColor: '#568', borderColor: '#433',width:800 ,height:800,border:2,display:"center", justifyContent:"center"}}> */}
 
        <Card style={{width:450, height:550, display:"center", justifyContent:"stretch",marginLeft:400,marginTop:30,marginBottom:100}} >
<CardImg  src={imagen} style={{width:200, marginLeft:130, marginBottom:-60}} width="10%"  alt="imagen" />

            
        <Form onSubmit={this.onSubmitBtn}  >
       
          <FormGroup style={{padding:30}} >
        <Label for="User" >Usuario: </Label>
        <Input type="text" name="user" id="user" onChange={this.onChangeInput} value={this.state.user} placeholder="user" />
        <br></br>
        <Label for="Password">Password:</Label>
        <Input type="password" name="password" id="pass" placeholder="password" onChange={this.onChangeInput} value={this.state.pass} />
        
        
        <Row style={{marginLeft:130,marginTop:20}}>
        <Button color="success" type="submit">Login</Button>
        </Row>
        <Row style={{padding:15}}>
        ¿No tienes una cuenta? &nbsp; &nbsp; &nbsp; <a href="/signup">Registrate</a>
        </Row>
        <Row style={{padding:15}}>
        <br></br> <a href="/tablas">Consultar</a>
        </Row>
      </FormGroup>
     
        </Form>
      </Card>
 </React.Fragment>
     

        )
    }
}
export default Login


