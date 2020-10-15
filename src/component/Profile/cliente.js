import axios from 'axios'
import React,{Component} from 'react'
import imagen from '../imagenes/usuario.png'


import {
    Card, Col,Navbar,
     Button, Form, FormGroup, Label,CardImg, Input,} from 'reactstrap';

class Cliente extends Component{
    constructor(props){
        super(props)
        this.state ={
                nombe:"",
              apellidoP:"",
              apellidoM:"",
              cp:"",
              telefono:"",
              correo:"",
              terminacioncorreo:"",
              Password:""
              

        }
        this.regresar= this.regresar.bind(this)
      
    }

    regresar(){
      this.props.history.push("/profile")
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
        const id = localStorage.getItem("id")  
        axios({
            url:API,
            method:'post',
            data:{
                query:`
                mutation{
                            
                  clientes(data:"${[this.state.nombre,this.state.apellidoP,this.state.apellidoM,this.state.cp,this.state.telefono,this.state.correo,this.state.Password,id]}"){ 
                    message
                     } 
                }
                `
            }   
             })
           .then(response=>{
                  console.log( 'este es el response',response)
              //  if(response.data.data.signup.message==="registro exitoso"){
                this.props.history.push("/profile")
       
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
<Navbar  style={{backgroundColor: '#ffccff'}} light expand="md"> Registrar Nuevo Cliente <Button close onClick={this.regresar} style={{marginLeft:800}}/></Navbar>
 

<Card style={{width:500, height:800, display:"center", justifyContent:"center",marginLeft:300,marginTop:30,marginBottom:100}} >
 
<CardImg src={imagen} style={{ width:180, marginLeft:300, marginLeft:150}}   alt="imagen" />
<br></br>    
        <Form onSubmit={this.onSubmitBtn}  >
       
          <FormGroup row >
       
        <Col sm={9} style={{marginLeft:70}}>
         <Input type="text" name="nombre" id="nombre" pattern="[A-Za-z]+$" placeholder="NOMBRE (S)" onChange={this.onChangeInput} value={this.state.nombre} required  />
        </Col>
        <br></br>
        <br></br>
       
        <Col sm={9} style={{marginLeft:70}}>
        <Input type="text" name="apellidop" id="apellidoP"  pattern="[A-Za-z]+$" placeholder="APELLIDO PATERNO" onChange={this.onChangeInput} value={this.state.apellidoP}  required />
        </Col>
        <br></br>
        <br></br>
       
        <Col sm={9} style={{marginLeft:70}}>
        <Input type="text" name="apellidoM" id="apellidoM" pattern="[A-Za-z]+$" placeholder="APELLIDO MATERNO" onChange={this.onChangeInput} value={this.state.apellidoM} required />
        </Col>
        <br></br>
        <br></br>
       
        <Col sm={9} style={{marginLeft:70}}>
        <Input type="number" name="cp" id="cp" placeholder="CODIGO POSTAL" onChange={this.onChangeInput} value={this.state.cp} required />
        </Col>
        <br></br>
        <br></br>
       
        <Col sm={9} style={{marginLeft:70}}>
        <Input type="number" name="telefono" id="telefono" placeholder="TELEFONO" onChange={this.onChangeInput} value={this.state.telefono} required />
        </Col>
        <br></br>
        <br></br>
        <Col sm={9} style={{marginLeft:70}}>
        <Input type="email" name="correo" id="correo" placeholder="CORREO" onChange={this.onChangeInput} value={this.state.correo} required />
        </Col>
        <br></br>
        <br></br>
        <Col sm={9} style={{marginLeft:70}}>
        <Input type="Password" name="Password" id="Password" placeholder="PASSWORD"  onChange={this.onChangeInput} value={this.state.Password} required/>
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
export default Cliente


