import axios from 'axios'
import React,{Component} from 'react'


import {
    Card, Col,Navbar,
     Button, Form, FormGroup, Label, Input,} from 'reactstrap';

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
            contrasena:""
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
        //        if(response.data.data.login.message==="login exitoso"){

        //             this.props.history.push("/dashboard")
        //             alert(`Bievenido ${response.data.data.login.nombre} ${response.data.data.login.apellidos}`)
        //             localStorage.setItem("nombre",response.data.data.login.nombre)
        //             localStorage.setItem("apellidos",response.data.data.login.apellidos)
        //             localStorage.setItem("correo",response.data.data.login.correo)
        //         }else{
          //           alert("usuario y contraseña incorrectos")
        //         }


            })
         .catch(err=>{
                  console.log('error',err.response)
              })

  
    }

    render(){
        return(
<React.Fragment>
{/* <Card style={{ backgroundColor: '#568', borderColor: '#433',width:800 ,height:800,border:2,display:"center", justifyContent:"center"}}> */}
<Navbar color="warning" light expand="md">ADMINISTRADOR</Navbar>
<Card style= {{backgroundColor:'#D4E6F1', borderColor: '#433',justifyContent:"stretch"}}>

<Card style={{width:800, height:700, display:"center", justifyContent:"center",marginLeft:200,marginTop:100,marginBottom:100}} >
{/* 
<CardImg style={{width:200, marginLeft:250, marginBottom:-50}} width="10%" src={imagen} alt="imagen" />
             */}
        <Form onSubmit={this.onSubmitBtn}  >
       
          <FormGroup row >
        <Label for="User" sm={3}><strong>Nombre:</strong></Label>
        <Col sm={8}>
         <Input type="text" name="user" id="nombre" onChange={this.onChangeInput} value={this.state.user}  />
        </Col>
        <br></br>
        <br></br>
        <Label for="User" sm={3} > <strong>Apellido_P:</strong> </Label>
        <Col sm={8}>
        <Input type="text" name="apellidop" id="apellidoP" onChange={this.onChangeInput} value={this.state.user}  />
        </Col>
        <br></br>
        <br></br>
        <Label for="User"  sm={3}> <strong>Apellido_M:</strong>  </Label>
        <Col sm={8}>
        <Input type="text" name="apellidoM" id="apellidoM" onChange={this.onChangeInput} value={this.state.user}  />
        </Col>
        <br></br>
        <br></br>
        <Label for="User" sm={3}> <strong>Direccion:</strong></Label>
        <Col sm={8}>
        <Input type="text" name="direccion" id="direccion" onChange={this.onChangeInput} value={this.state.user}  />
        </Col>
        <br></br>
        <br></br>
        <Label for="User" sm={3} ><strong>Telefono:</strong> </Label>
        <Col sm={8}>
        <Input type="text" name="telefono" id="telefono" onChange={this.onChangeInput} value={this.state.user}  />
        </Col>
        <br></br>
        <br></br>
        <Label for="User" sm={3} > <strong>Correo:</strong></Label>
        <Col sm={8}>
        <Input type="text" name="correo" id="correo" onChange={this.onChangeInput} value={this.state.user}  />
        </Col>
        <br></br>
        <br></br>
        <Label for="Password" sm={3}><strong>Contraseña:</strong></Label>
        <Col sm={8}>
        <Input type="contrasena" name="contrasena" id="contrasena"  onChange={this.onChangeInput} value={this.state.pass} />
        </Col>
        <br/><br/>
        <br></br>
<Button color="success" type="submit" style={{marginLeft:300, marginBottom:100}} >guardar</Button>

      </FormGroup >
     
        </Form>
      </Card>
       </Card>
</React.Fragment>
     

        )
    }
}
export default Signup


