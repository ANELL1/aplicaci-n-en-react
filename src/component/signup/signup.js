import axios from 'axios'
import React,{Component} from 'react'
import imagen from '../imagenes/uno.png'


import {
    Card, Col,Navbar,
     Button, Form, FormGroup, Label,CardImg, Input,} from 'reactstrap';

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
<Navbar  style={{backgroundColor: '#ffccff'}} light expand="md">ADMINISTRADOR</Navbar>
 

<Card style={{width:500, height:800, display:"center", justifyContent:"center",marginLeft:300,marginTop:30,marginBottom:100}} >
 
<CardImg src={imagen} style={{ width:300, marginLeft:400, marginLeft:100}} width="10%"  alt="imagen" />
             
        <Form onSubmit={this.onSubmitBtn}  >
       
          <FormGroup row >
       
        <Col sm={9} style={{marginLeft:70}}>
         <Input type="text" name="user" id="nombre" placeholder="NOMBRE (S)" onChange={this.onChangeInput} value={this.state.user}  />
        </Col>
        <br></br>
        <br></br>
       
        <Col sm={9} style={{marginLeft:70}}>
        <Input type="text" name="apellidop" id="apellidoP" placeholder="APELLIDO PATERNO" onChange={this.onChangeInput} value={this.state.user}  />
        </Col>
        <br></br>
        <br></br>
       
        <Col sm={9} style={{marginLeft:70}}>
        <Input type="text" name="apellidoM" id="apellidoM" placeholder="APELLIDO MATERNO" onChange={this.onChangeInput} value={this.state.user}  />
        </Col>
        <br></br>
        <br></br>
       
        <Col sm={9} style={{marginLeft:70}}>
        <Input type="text" name="direccion" id="direccion" placeholder="DIRECCIÓN" onChange={this.onChangeInput} value={this.state.user}  />
        </Col>
        <br></br>
        <br></br>
       
        <Col sm={9} style={{marginLeft:70}}>
        <Input type="text" name="telefono" id="telefono" placeholder="TELEFONO" onChange={this.onChangeInput} value={this.state.user}  />
        </Col>
        <br></br>
        <br></br>
        <Col sm={9} style={{marginLeft:70}}>
        <Input type="text" name="correo" id="correo" placeholder="CORREO" onChange={this.onChangeInput} value={this.state.user}  />
        </Col>
        <br></br>
        <br></br>
        <Col sm={9} style={{marginLeft:70}}>
        <Input type="contrasena" name="contrasena" id="contrasena" placeholder="PASSWORD"  onChange={this.onChangeInput} value={this.state.pass} />
        </Col>
        <br/><br/>
        <br></br>
<Button color="success" type="submit" style={{marginLeft:70, marginLeft:200}} >guardar</Button>

      </FormGroup >
     
    </Form>
      </Card>

</React.Fragment>
     

        )
    }
}
export default Signup


