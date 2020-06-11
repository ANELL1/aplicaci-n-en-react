import axios from 'axios'
import React,{Component} from 'react'
import imagen from '../imagenes/user.jpg'

import {
    Card, CardImg, 
     Button, Form, FormGroup, Label, Input,} from 'reactstrap';

class Login extends Component{
    constructor(props){
        super(props)
        this.state ={
            user:"",
            pass:""
        }
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
                       nombre
                       apellidos
                       correo
                       contrasena
                   } 
                }
                `
            }   
             }).then(response=>{
                 console.log( 'este es el response',response)
                if(response.data.data.login.message==="login exitoso"){

                    this.props.history.push("/dashboard")
                    alert(`Bievenido ${response.data.data.login.nombre} ${response.data.data.login.apellidos}`)
                    localStorage.setItem("nombre",response.data.data.login.nombre)
                    localStorage.setItem("apellidos",response.data.data.login.apellidos)
                    localStorage.setItem("correo",response.data.data.login.correo)
                }else{
                    alert("usuario y contraseña incorrectos")
                }


             })
             .catch(err=>{
                 console.log('error',err.response)
             })


    //     if(this.state.user=="jesus" &&this.state.pass=='123' ){
    //         this.props.history.push("/dashboard")

    //     }  
    //         console.log(this.state.user,this.state.pass)
  
    }

     render(){
        return(
<React.Fragment>
{/* <Card style={{ backgroundColor: '#568', borderColor: '#433',width:800 ,height:800,border:2,display:"center", justifyContent:"center"}}> */}
<Card style= {{backgroundColor:'#568', borderColor: '#433',justifyContent:"stretch"}}>

        <Card style={{width:700, height:500, display:"center", justifyContent:"center",marginLeft:600,marginTop:100,marginBottom:100}} >

<CardImg style={{width:200, marginLeft:250, marginBottom:-50}} width="10%" src={imagen} alt="imagen" />
            
        <Form onSubmit={this.onSubmitBtn}  >
       
          <FormGroup style={{padding:30}} >
        <Label for="User" >Usuario: </Label>
        <Input type="text" name="user" id="user" onChange={this.onChangeInput} value={this.state.user} placeholder="user" />
        <br></br>
        <Label for="Password">Password:</Label>
        <Input type="password" name="password" id="pass" placeholder="password" onChange={this.onChangeInput} value={this.state.pass} />
        <br/><br/>
<Button color="success" type="submit" style={{marginLeft:300, marginBottom:100}} >Login</Button>

      </FormGroup>
     
        </Form>
      </Card>
      </Card>
</React.Fragment>
     

        )
    }
}
export default Login


