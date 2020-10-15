
import axios from 'axios'
import React,{Component} from 'react'
import imagen from '../imagenes/empleado.jpg'


import {
    Card, Col,Navbar,InputGroup,
     Button, Form, FormGroup, Label,CardImg, Input,InputGroupText,InputGroupAddon} from 'reactstrap';

class Empleado extends Component{
    constructor(props){
        super(props)
        this.state ={
              nombe:'',
              apellidoP:'',
              apellidoM:'',
              direccion:'',
              telefono:'',
              cp:'',
              fields:{},
              errors:{} 
            

        }
        this.regresar=this.regresar.bind(this)
      
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
                            
                    insertEmpleados(data:"${[this.state.nombre,this.state.apellidoP,this.state.apellidoM, this.state.direccion,this.state.telefono,this.state.cp,id]}"){ 
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

              if(this.handleValidation()){
                alert("Form submitted");
             }else{
                alert("Form has errors.")
             }
         
    }
    
handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if(!fields["name"]){
       formIsValid = false;
       errors["name"] = "LLENAR CAMPOS";
    }

    if(typeof fields["name"] !== "undefined"){
       if(!fields["name"].match(/^[a-zA-Z]+$/)){
          formIsValid = false;
          errors["name"] = "datos invalidos";
       }        
    }

    //Email
   //  if(!fields["email"]){
   //     formIsValid = false;
   //     errors["email"] = "Cannot be empty";
   //  }

   //  if(typeof fields["email"] !== "undefined"){
   //     let lastAtPos = fields["email"].lastIndexOf('@');
   //     let lastDotPos = fields["email"].lastIndexOf('.');

   //     if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
   //        formIsValid = false;
   //        errors["email"] = "Email is not valid";
   //      }
   // }  

   this.setState({errors: errors});
   return formIsValid;
}

contactSubmit(e){
    e.preventDefault();

    if(this.handleValidation()){
       alert("Form submitted");
    }else{
       alert("Form has errors.")
    }

}

handleChange(field, e){         
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
}


    render(){
        return(
<React.Fragment>
{/* <Card style={{ backgroundColor: '#568', borderColor: '#433',width:800 ,height:800,border:2,display:"center", justifyContent:"center"}}> */}
<Navbar  style={{backgroundColor: '#ffccff'}} light expand="md">Registrar Nuevo Empleado <Button close onClick={this.regresar} style={{marginLeft:800}}/ > </Navbar>
 

<Card style={{width:500, height:800, display:"center", justifyContent:"center",marginLeft:300,marginTop:30,marginBottom:100}} >
 
<CardImg src={imagen} style={{ width:300, marginLeft:400, marginLeft:100}} width="10%"  alt="imagen" />
             
        <Form onSubmit={this.onSubmitBtn}  >

          <FormGroup row >
       
        <Col sm={9} style={{marginLeft:70}}>
        <InputGroup>
        <InputGroupAddon addonType="prepend">
           <InputGroupText></InputGroupText>
          
         </InputGroupAddon>
         <Input type="text" name="nombre" id="nombre" placeholder="NOMBRE (S)" onChange={this.onChangeInput} value={this.state.fields["name"]}  />
         </InputGroup>
        
        </Col>
        <br></br>
        <br></br>
       
        <Col sm={9} style={{marginLeft:70}}>
        <InputGroup>
        <InputGroupAddon addonType="prepend">
           <InputGroupText></InputGroupText>
           </InputGroupAddon>
        <Input type="text" name="apellidop" id="apellidoP" placeholder="APELLIDO PATERNO" onChange={this.onChangeInput} value={this.state.apellidoP}  />
        </InputGroup>
        </Col>
        <br></br>
        <br></br>
       
        <Col sm={9} style={{marginLeft:70}}>
        <InputGroup>
        <InputGroupAddon addonType="prepend">
           <InputGroupText></InputGroupText>
           </InputGroupAddon>
        <Input type="text" name="apellidoM" id="apellidoM" placeholder="APELLIDO MATERNO" onChange={this.onChangeInput} value={this.state.apellidoM}  />
        </InputGroup>
        </Col>
        <br></br>
        <br></br>
       
        <Col sm={9} style={{marginLeft:70}}>
        <InputGroup>
        <InputGroupAddon addonType="prepend">
           <InputGroupText></InputGroupText>
           </InputGroupAddon>
        <Input type="text" name="direccion" id="direccion" placeholder="DIRECCIÓN" onChange={this.onChangeInput} value={this.state.direccion}  />
        </InputGroup>
        </Col>
        <br></br>
        <br></br>
       
        <Col sm={9} style={{marginLeft:70}}>
        <InputGroup>
        <InputGroupAddon addonType="prepend">
           <InputGroupText></InputGroupText>
           </InputGroupAddon>

        <Input type="number" max="10" name="telefono" id="telefono" placeholder="TELEFONO CELULA"  onChange={this.onChangeInput} value={this.state.telefono}  />
        
        </InputGroup>
        </Col>
        <br></br>
        <br></br>
        <Col sm={9} style={{marginLeft:70}}>
        <InputGroup>
        <InputGroupAddon addonType="prepend">
           <InputGroupText></InputGroupText>
           </InputGroupAddon>
        <Input type="text" name="cp" id="cp" placeholder="CODIGO POSTAL" onChange={this.onChangeInput} value={this.state.cp}  />
        </InputGroup>
        </Col>
        <br></br>
        <br></br>
        
<Button color="success" type="submit" style={{marginLeft:70, marginLeft:200}} >guardar</Button>

      </FormGroup >
     
    </Form>
      </Card>

</React.Fragment>
     

        )
    }
}
export default Empleado


