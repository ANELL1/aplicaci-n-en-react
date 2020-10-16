import axios from 'axios'
import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Form,Button,MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


import { Paper } from '@material-ui/core';


class Signup extends Component{
    constructor(props){
        super(props)
        this.state ={
            nombre:"",
            apellidoP:"",
            apellidoM:"",
            direccion:"",
            telefono:"",
            correo:"",
            contrasena:"",
           

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
                mutation{
                    signup(data:"${[this.state.nombre,this.state.apellidoP,this.state.apellidoM,this.state.direccion,this.state.telefono,this.state.correo,this.state.contrasena]}"){             
                 
                    message
                     } 
                }
                `
            }   
             })
           .then(response=>{
                  console.log( 'este es el response',response)
              //  if(response.data.data.signup.message==="registro exitoso"){

                this.props.history.push("/")
       
               // }else{
               //   console.log(response.data.data.signup.message)
           //  }


            })
         .catch(err=>{
                  console.log('error',err.response)
              })

  
    }

    render(){
        return(
<React.Fragment>
{/* <Card style={{ backgroundColor: '#568', borderColor: '#433',width:800 ,height:800,border:2,display:"center", justifyContent:"center"}}> */}
<Navbar  style={{backgroundColor: '#33b5e5'}} light expand="md">Signup</Navbar>

<Paper style={{width:500, height:1000, display:"center", justifyContent:"center",marginLeft:300,marginTop:30,marginBottom:100}} >
<MDBContainer style={{marginLeft:30}}>
<MDBRow>
    <MDBCol md="10">
            
        <Form onSubmit={this.onSubmitBtn}  >
            &nbsp;
            &nbsp;
            <p className="h5 text-center mb-4">Registrar Usuario</p>
            <div>
        <MDBInput   label ="Nombre (s):" 
                    icon="key"
                    validate error="wrong" 
                    type="text" 
                    name="nombre" 
                    id="nombre" 
                    onChange={this.onChangeInput} 
                    value={this.state.pass}
                    success="right"
                     required />

        <MDBInput   label ="Apellido Paterno:" 
                    icon="key"
                    validate error="wrong" 
                    type="text" 
                    name="apellidop" 
                    id="apellidoP"
                    onChange={this.onChangeInput} 
                    value={this.state.pass}
                    success="right"
                     required /> 

<MDBInput   label ="Apellido Materno:" 
                    icon="key"
                    validate error="wrong" 
                    type="text" 
                    name="apellidoM" 
                    id="apellidoM"
                    onChange={this.onChangeInput} 
                    value={this.state.pass}
                    success="right"
                     required /> 

<MDBInput   label ="Dirección:" 
                    icon="key"
                    validate error="wrong" 
                    type="text" 
                    name="direccion"
                    id="direccion"
                    onChange={this.onChangeInput} 
                    value={this.state.pass}
                    success="right"
                     required /> 

<MDBInput   label ="Telefono:" 
                    icon="key"
                    validate error="wrong" 
                    type="number" 
                    name="telefono"
                    id="telefono"                    
                    onChange={this.onChangeInput} 
                    value={this.state.pass}
                    success="right"
                     required /> 

<MDBInput   label="Correo:" 
                    icon="key"
                    validate error="wrong" 
                    type="email" 
                    name="correo" 
                    id="correo"
                    onChange={this.onChangeInput} 
                    value={this.state.pass}
                    success="right"
                     required /> 

<MDBInput   label="Contraseña:" 
                    icon="key"
                    validate error="wrong" 
                    type="password" 
                    name="contrasena" 
                    id="contrasena"
                    onChange={this.onChangeInput} 
                    value={this.state.pass}
                    success="right"
                     required /> 
   
</div>
<Button color="success" type="submit" style={{marginLeft:70, marginLeft:200}} >guardar</Button>




    </Form>
    </MDBCol>
    </MDBRow>
      </MDBContainer>
      </Paper>

</React.Fragment>
     

        )
    }
}
export default Signup


