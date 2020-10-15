// import axios from 'axios'
// import React,{Component} from 'react'
// import imagen from '../imagenes/ropa.jpg'


// import {
//     Card, Col,Navbar,InputGroup,
//      Button, Form, FormGroup, Label,CardImg, Input,InputGroupText,InputGroupAddon} from 'reactstrap';

// class Producto extends Component{
//     constructor(props){
//         super(props)
//         this.state ={
//                 nombreproducto:'',
//               precio:'',
//               material:'',

//         }
//       this.regresar =this.regresar.bind(this)
//     }
// regresar(){
// this.props.history.push("/profile")
// }

//     onChangeInput =(e)=>{
//         console.log("eventoonChange" , e)
//         const {id,value} = e.target;
//         this.setState({
//             [id]:value
//         })
//     }

   
//     onSubmitBtn = (e)=>{
//         e.preventDefault();  
//         const API='http://localhost:4000/graphql' 
//         const id = localStorage.getItem("id")  
//         axios({
//             url:API,
//             method:'post',
//             data:{
//                 query:`
//                 mutation{
                            
//                     insertProducto(data:"${[this.state.nombreproducto,this.state.precio,this.state.material,id]}"){ 
//                     message
//                      } 
//                 }
//                 `
//             }   
//              })
//            .then(response=>{
//                   console.log( 'este es el response',response)
//               //  if(response.data.data.signup.message==="registro exitoso"){

//                 this.props.history.push("/profile")

       
//                // }else{
//                //   console.log(response.data.data.signup.message)
//            //  }


//             })
//          .catch(err=>{
//                   console.log('error',err.response)
//               })

  
//     }

    
//     render(){
      
     
//         return(

          
// <React.Fragment>
// {/* <Card style={{ backgroundColor: '#568', borderColor: '#433',width:800 ,height:800,border:2,display:"center", justifyContent:"center"}}> */}
// <Navbar style={{backgroundColor: '#ffccff'}} light expand="md"> Registrar Nuevo Producto <Button close onClick={this.regresar}  style={{marginLeft:800}} /> </Navbar>


// <Card   style={{width:500, height:800, display:"center", justifyContent:"center",marginLeft:300,marginTop:30,marginBottom:100}} >
 
// <CardImg src={imagen} style={{ width:400, marginLeft:300, marginLeft:50}} width="10%"  alt="imagen" />
             
//         <Form onSubmit={this.onSubmitBtn}  >

//           <FormGroup row >
       
//         <Col sm={9} style={{marginLeft:70}}>
//         <InputGroup>
//         <InputGroupAddon addonType="prepend">
//            <InputGroupText></InputGroupText>
          
//          </InputGroupAddon>
//          <Input type="text" name="nombreproducto" id="nombreproducto" placeholder="NOMBRE DEL PRODUCTO" onChange={this.onChangeInput} value={this.state.nombreproducto}  />
//          </InputGroup>
        
//         </Col>
//         <br></br>
//         <br></br>
       
//         <Col sm={9} style={{marginLeft:70}}>
//         <InputGroup>
//         <InputGroupAddon addonType="prepend">
//            <InputGroupText></InputGroupText>
//            </InputGroupAddon>
//            <Input type="text" name="precio" id="precio" placeholder="PRECIO" onChange={this.onChangeInput} value={this.state.precio}  />
//         </InputGroup>
//         </Col>
//         <br></br>
//         <br></br>
       
//         <Col sm={9} style={{marginLeft:70}}>
//         <InputGroup>
//         <InputGroupAddon addonType="prepend">
//            <InputGroupText></InputGroupText>
//            </InputGroupAddon>
//            <Input type="text" name="material" id="material" placeholder="MATERIAL" onChange={this.onChangeInput} value={this.state.material}  />
//         </InputGroup>
//         </Col>
//         <br></br>
//         <br></br>
       
       
        
// <Button color="success" type="submit" style={{marginLeft:70, marginLeft:200}} >guardar</Button>

//       </FormGroup >
     
//     </Form>
//       </Card>

// </React.Fragment>
     

//         )
//     }
// }
// export default Producto


////////////////////////////////////////////////



import axios from 'axios'
import React,{Component} from 'react'
import imagen from '../imagenes/empleado.jpg'


import {
    Card, Col,Navbar,InputGroup,
     Button, Form, FormGroup, Label,CardImg, Input,InputGroupText,InputGroupAddon} from 'reactstrap';

class Producto extends Component{
    constructor(props){
        super(props)
        this.state ={

          nombreproducto:'',
          precio:'',
          material:'',

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
                            
                    
                      insertProducto(data:"${[this.state.nombreproducto,this.state.precio,this.state.material,id]}"){ 
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
         <Input type="text" name="nombreproducto" id="nombreproducto" placeholder="NOMBRE  DEL PRODUCTO " onChange={this.onChangeInput} value={this.state.nombreproducto} required />
         </InputGroup>
        
        </Col>
        <br></br>
        <br></br>
       
        <Col sm={9} style={{marginLeft:70}}>
        <InputGroup>
        <InputGroupAddon addonType="prepend">
           <InputGroupText></InputGroupText>
           </InputGroupAddon>
        <Input type="text" name="precio" id="precio" placeholder="PRECIO DEL PRODUCTO" onChange={this.onChangeInput} value={this.state.precio}   required/>
        </InputGroup>
        </Col>
        <br></br>
        <br></br>
       
        <Col sm={9} style={{marginLeft:70}}>
        <InputGroup>
        <InputGroupAddon addonType="prepend">
           <InputGroupText></InputGroupText>
           </InputGroupAddon>
        <Input type="text" name="material" id="material" placeholder="MATERIAL" onChange={this.onChangeInput} value={this.state.material} required />
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
export default Producto


