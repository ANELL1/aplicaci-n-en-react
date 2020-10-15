import axios from 'axios'
import React, { Component } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,  Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,Table,Modal, ModalHeader, ModalBody, ModalFooter
   } from 'reactstrap';


class Profile extends Component{

constructor(props){
    super(props)
    this.state = {
        activeIndex:0,
        animating:false,
        elNombre:'',
        elapellidoP:'',
        elapellidoM:'',
        arrayEmpleados:[],
        arrayClientes:[],
        arrayProductos:[],
        arrayCentroTrabajo:[],
        modal:false,
        modal1:false,
        modal2:false,
        modal3:false,


    }
    this.regresar = this.regresar.bind(this)
    this.ingresarCliente = this.ingresarCliente.bind(this)
    this.ingresarEmpleado = this.ingresarEmpleado.bind(this)
    this.ingresarEmpresa = this.ingresarEmpresa.bind(this)
    this.ingresarProducto = this.ingresarProducto.bind(this)
    this.toggle = this.toggle.bind(this)
    this.toggle1 = this.toggle1.bind(this)
    this.toggle2= this.toggle2.bind(this)
    this.toggle3 = this.toggle3.bind(this)
} 

toggle(parametro){
  this.setState({modal:parametro})
}
toggle1(algo){
  this.setState({modal1:algo})
 }
 toggle2(parametro){
  this.setState({modal2:parametro})
}
toggle3(parametro){
  this.setState({modal3:parametro})
}


regresar(){
  this.props.history.push("/")
}  

ingresarCliente(){
  this.props.history.push("/Cliente")
}

ingresarEmpleado(){
  this.props.history.push("/Empleado")
}

ingresarProducto(){
  this.props.history.push("/Producto")
}

ingresarEmpresa(){
  this.props.history.push("/Empresa")
}



componentWillMount(){
  const nomb = localStorage.getItem("nombre") 
  const apellidoP = localStorage.getItem("apellidos")
  const apellidoM = localStorage.getItem("ape")
    
  this.setState({elNombre:nomb})
  this.setState({elapellidoP:apellidoP})
  this.setState({elapellidoM:apellidoM})


  const API='http://localhost:4000/graphql'   
      const id =  localStorage.getItem("id")
    
       axios({
          url:API,
          method:'post',
          data:{
              query:`
              query{   
                 getEmpleados(data:"${[id]}"){
                  id
                  nombreEmpleado
                  apellidoPempleado
                  apellidoMempleado
                  direccionE
                  telefonoE
                  cp
                   } 
              }
              `
          }   
           })
         .then(datos => {
              this.setState({arrayEmpleados:datos.data.data.getEmpleados})
              console.log("que hay en el estaodo" , datos)
          })
          .catch(err=>{
             console.log('error del dashboard' ,err.response)
          })
///////////////////////  GET  CLIENTES

      axios({
        url:API,
        method:'post',
        data:{
            query:`
            query{   
               getClientes(data:"${[id]}"){
                id
                nombre_cliente
                apellidoP_cliente
                apellidoM_cliente
                cp_cliente
                telefono_cliente
                correo_cliente
           

                 } 
            }
            `
        }   
         })
         .then(datos => {
          this.setState({arrayClientes:datos.data.data.getClientes})
          console.log("el estado de cliente:" , this.state.arrayClientes)
      })
      .catch(err=>{
         console.log('error',err.response)
      })
      
    //  /////////////////// GET PRODUCTOS
      axios({
        url:API,
        method:'post',
        data:{
            query:`
            query{   
               getProductos(data:"${[id]}"){
                id
                nombreproducto
                precio
                material
                
                 
                } 
            }
            `
        }   
         })
         .then(datos => {
           console.log("hay datos productos",datos)
          this.setState({arrayProductos:datos.data.data.getProductos})
          console.log("el estado de productos" , this.state.arrayProductos)
      })
      .catch(err=>{
         console.log('error',err.response)
      })
    //////////////////////// GET EMPRESA O CENTROS DE TRABAJO

    axios({
      url:API,
      method:'post',
      data:{
          query:`
          query{   
            getCentroTrabajo(data:"${[id]}"){
       id       
       razon_social
       direccion
       telefonoEmpresa
       correoEmpresas
              
               
              } 
          }
          `
      }   
       })
       .then(datos => {
         console.log("hay datos de empresa",datos)
        this.setState({arrayCentroTrabajo:datos.data.data.getCentroTrabajo})
        console.log("el estado de empresa" , this.state.arrayCentroTrabajo)
    })
    .catch(err=>{
       console.log('error',err.response)
    })
    
  }



 render(){
     
   
    const nom = this.state.elNombre
    const apeP = this.state.elapellidoP
    const apeM = this.state.elapellidoM

//  //  console.log("algo",this.state.elNombre,this.state.elapellidoP,this.state.elapellidoM)
///////////MODAL EMPLEADOS
 let modalEmpleado;
if(this.state.arrayEmpleados){
console.log("arrayempledo" , this.state.arrayEmpleados)  
modalEmpleado = 
<div>
  
<Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} >
    <ModalHeader toggle={e=>this.toggle(false)} >Empleados  registrados </ModalHeader>
    
    <ModalBody>

    <Table bordered>
<thead>
 <tr>
<td >id</td>
<td >Nombre</td>
<td >Apellido P</td>
<td >apellido M</td>
<td >Telefono</td>
<td >Direccion</td>
<td >CP</td>
</tr>
</thead>
{this.state.arrayEmpleados.map(rows=>{
return(

<tbody>
<tr>

<td  key={rows.id}>{rows.id}</td>
<td >{rows.nombreEmpleado}</td>
<td >{rows.apellidoPempleado}</td>
<td>{rows.apellidoMempleado}</td>
<td>{rows.direccionE}</td>
<td>{rows.telefonoE}</td>
<td >{rows.cp}</td>
</tr>
</tbody>
)
})}
</Table>
</ModalBody>
    <ModalFooter>
   {/* <Button color="secondary" onClick={e=>this.toggle(false)}>Cancel</Button> */}
    </ModalFooter>
</Modal>
</div>  
}
///////////MODAL CLIENTES
let modalCliente;
if(this.state.arrayClientes){
console.log("arrayclientes" , this.state.arrayClientes)  
modalCliente = 
<div>
<Modal size="lg" color="primary" isOpen={this.state.modal1} toggle={this.toggle1} >
    <ModalHeader  toggle={e=>this.toggle1(false)} >clientes  registrados </ModalHeader>
    
    <ModalBody>

    <Table bordered>
<thead>
 <tr >
              <th >id</th>
              <th >Nombre</th>
              <th >Apellido P</th>
              <th >apellido M</th>
              <th >C.P.</th>
              <th >Telefono</th>
              <th >Correo</th>
   
</tr>
</thead>
{this.state.arrayClientes.map(rows=>{
return(

<tbody>
<tr>

<td  key={rows.id}>{rows.id}</td>
              <td >{rows.nombre_cliente}</td>
              <td >{rows.apellidoP_cliente}</td>
              <td >{rows.apellidoM_cliente}</td>
              <td >{rows.cp_cliente}</td>
              <td >{rows.telefono_cliente}</td>
              <td>{rows.correo_cliente}</td>
              


</tr>
</tbody>
)
})}
</Table>
</ModalBody>
    <ModalFooter>
   {/* <Button color="secondary" onClick={e=>this.toggle(false)}>Cancel</Button> */}
    </ModalFooter>
</Modal>
</div>   
}
///////////MODAL PRODUCTOS
let modalProductos;
if(this.state.arrayProductos){
console.log("arrayclientes" , this.state.arrayProductos)  
modalProductos = 
<div>
<Modal size="lg" isOpen={this.state.modal2} toggle={this.toggle2} >
    <ModalHeader  toggle={e=>this.toggle2(false)} >Productos registrados </ModalHeader>
    
    <ModalBody>

    <Table bordered>
<thead>
 <tr>
              <th >id</th>
              <th >nombreproducto</th>
              <th >precio</th>
              <th >material</th>
                
</tr> 
</thead>
{this.state.arrayProductos.map(rows=>{
return(

<tbody>
<tr>
<td key={rows.id}>{rows.id}</td>
              <td >{rows.nombreproducto}</td>
              <td >{rows.precio}</td>
              <td >{rows.material}</td>
             

</tr>
</tbody>
)
})}
</Table>
</ModalBody>
    <ModalFooter>
   {/* <Button color="secondary" onClick={e=>this.toggle(false)}>Cancel</Button> */}
    </ModalFooter>
</Modal>
</div>   
}
////////////MODAL EMPRESA
let modalEmpresa;
if(this.state.arrayCentroTrabajo){
console.log(" que hay en centros de trabajo" , this.state.arrayCentroTrabajo)  
modalEmpresa = 
<div>
<Modal size="lg" isOpen={this.state.modal3} toggle={this.toggle3} style={{width:2000, height:1000}}>
    <ModalHeader  toggle={e=>this.toggle3(false)} >  Empresas registradas </ModalHeader>
    
    <ModalBody>
 {/* <Table small responsive>  */}
 <Table bordered> 
      <thead>
        <tr>
              <th >id</th>
              <th >razon_social</th>
              <th > direccion</th>
              <th>telefonoEmpresa</th>
              <th>correoEmpresas</th>
   
</tr>
</thead>

{this.state.arrayCentroTrabajo.map(rows=>{
return(

<tbody>
<tr>

<td  key={rows.id}>{rows.id}</td>
              <td >{rows.razon_social}</td>
              <td >{rows.direccion}</td>
              <td >{rows.telefonoEmpresa}</td>
              <td >{rows.correoEmpresas}</td>
              


</tr>
</tbody>
)
})}
</Table>



</ModalBody>
    <ModalFooter>
   {/* <Button color="secondary" onClick={e=>this.toggle(false)}>Cancel</Button> */}
    </ModalFooter>
</Modal>
</div>   
}

return(
    <React.Fragment>
   
   <Navbar style={{backgroundColor: '#ffccff'}} light expand="md">
   
<NavbarBrand  > <strong>Bienvenido &nbsp;&nbsp;</strong> {nom}&nbsp;&nbsp;{apeP}&nbsp;&nbsp;{apeM}&nbsp;</NavbarBrand>
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
           
{/* 
            <NavItem>
                 <NavLink href="/Cliente">Cliente</NavLink>
               </NavItem>


               <NavItem>
                 <NavLink href="/Empleado">Empleados</NavLink>
               </NavItem>


               <NavItem>
                 <NavLink href="/Producto">Productos</NavLink>
               </NavItem>


                <NavItem>
                 <NavLink href="/Empresa">Empresa</NavLink>
               </NavItem>  */}

              <UncontrolledDropdown nav inNavbar  style={{marginLeft:600}}>

                <DropdownToggle nav caret >
                  menú
                </DropdownToggle>
                <DropdownMenu right>
              
                 <DropdownItem  color="danger" onClick={this.regresar}>
                    cerrar sesión
                  </DropdownItem>
                  <DropdownItem divider />
                  </DropdownMenu>
              </UncontrolledDropdown>
             
            </Nav>
            
          </Collapse>
        </Navbar>
        <br></br>
        <Card style={{width:700,height:500, marginLeft:300 }}>
        <CardBody>
       
   
        
        <Table bordered>
      <tbody>
        <tr>
        <th scope="row">1</th>
          <td>EMPLEADOS</td>
          <Button outline color="danger" onClick={this.toggle}> CONSULTAR</Button>
          &nbsp;&nbsp;  <Button outline color="primary"  href="/Empleado">  REGISTRAR</Button>
        
          </tr>
        <tr>
          <th scope="row">2</th>
          <td>CLIENTES</td> <Button outline color="danger" onClick={this.toggle1}> CONSULTAR</Button>&nbsp;&nbsp;<Button  outline color="primary" onClick={this.ingresarCliente}> REGISTRAR</Button>

        </tr>
        <tr>
          <th scope="row">3</th>
          <td>PRODUCTOS</td>
          <Button outline color="danger" onClick={this.toggle2}> CONSULTAR</Button>
          &nbsp;&nbsp;   
          <Button outline color="primary" onClick={this.ingresarProducto}>  REGISTRAR</Button>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>EMPRESAS</td>
          <Button outline color="danger" onClick={this.toggle3}> CONSULTAR</Button>
          &nbsp;&nbsp;   
          <Button outline color="primary" onClick={this.ingresarEmpresa}>   REGISTRAR</Button>
         
        </tr>

      </tbody>
      </Table >
      {/* {modalEmpleado}
        {modalCliente}
       {modalProductos}
       {modalEmpresa} 
        */}
    </CardBody>
      </Card>


{/*        
        &nbsp;&nbsp;       
        <Button outline color="danger" onClick={this.toggle1}> clientes</Button>
        &nbsp;&nbsp;       
        <Button outline color="danger" onClick={this.toggle2}> productos</Button>
        &nbsp;&nbsp;       
 */}
        
      
        {modalEmpleado}
        {modalCliente}
       {modalProductos}
       {modalEmpresa}  

</React.Fragment>
)}}

export default Profile