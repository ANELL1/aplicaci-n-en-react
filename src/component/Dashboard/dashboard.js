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


class Dashboard extends Component{

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
        arrayTrabajo:[],
        modal:false,

    }
    this.regresar = this.regresar.bind(this)
    this.toggle = this.toggle.bind(this)
} 

toggle(parametro){
  this.setState({modal:parametro})
}

componentWillMount(){
  const nomb = localStorage.getItem("nombre") 
  const apellidoP = localStorage.getItem("apellidos")
  const apellidoM = localStorage.getItem("ape")

  const API='http://localhost:4000/graphql'   
      const id =  localStorage.getItem("id")
      
    
    
       axios({
          url:API,
          method:'post',
          data:{
              query:`
              query{   
                getAdmins(data:"${[id]}"){
                  id
                  
                   } 
              }
              `
          }   
           })
         .then(datos => {
              this.setState({arrayEmpleados:datos.data.data.getEmpleados})
              console.log("que hay en administrador" , datos)
          })
          .catch(err=>{
             console.log('error del dashboard' ,err.response)
          })
    
  
      this.setState({elNombre:nomb})
      this.setState({elapellidoP:apellidoP})
      this.setState({elapellidoM:apellidoM})

       
    }

 regresar(){
    this.props.history.push("/")
 }   

 render(){
     const items = [
        {
          src:"https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg",
          altText: 'Slide 1',
          caption: 'Slide 1'
        },
        {
          src:"https://farm5.staticflickr.com/4176/34530614521_53508a8441_b.jpg",
          altText: 'Slide 2',
          caption: 'Slide 2'
        },
        {
          src:"https://i.pinimg.com/originals/c4/76/27/c476278504682e622fabe9b0932098c3.jpg",
          altText: 'Slide 3',
          caption: 'Slide 3'
        }
      ];
   const next = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({activeIndex:nextIndex})
      }
     const previous = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({activeIndex:nextIndex})
      }
     const  goToIndex = (newIndex) => {
        if (this.state.animating) return;
        
        this.setState({activeIndex:newIndex})
      }
    const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => this.setState({animating:true})}
            onExited={() => this.setState({animating:false})}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

    const nom = this.state.elNombre
    const apeP = this.state.elapellidoP
    const apeM = this.state.elapellidoM

 /// console.log("algo",this.state.elNombre,this.state.elapellidoP,this.state.elapellidoM)
let modal;
if(this.state.arrayEmpleados){
console.log("arrayempledo" , this.state.arrayEmpleados)  
modal = <div>
  

<Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} style={{width:2000, height:1000}}>
    <ModalHeader toggle={e=>this.toggle(false)} >Empleados </ModalHeader>
    
    <ModalBody>

    <Table small responsive>
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
<th scope="row" ></th>
<td  key={rows.id}>{rows.id}</td>
<td >{rows.nombreEmpleado}</td>
<td width="5%">{rows.apellidoPempleado}</td>
<td width="5%">{rows.apellidoMempleado}</td>
<td width="5%">{rows.direccionE}</td>
<td width="5%">{rows.telefonoE}</td>
<td width="5%">{rows.cp}</td>
</tr>
</tbody>
)
})}
</Table>
</ModalBody>
    <ModalFooter>
    <Button color="secondary" onClick={e=>this.toggle(false)}>Cancel</Button> 
    </ModalFooter>
</Modal>
</div>   
}

// let modal;
// if(this.state.arrayEmpleados){
// console.log("arrayempledo" , this.state.arrayEmpleados)  
// modal = <div>
// <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} style={{width:2000, height:1000}}>
//     <ModalHeader toggle={e=>this.toggle(false)} >Empleados </ModalHeader>
    
//     <ModalBody>

//     <Table small responsive>
// <thead>
//  <tr>
// <td >id</td>
// <td >Nombre</td>
// <td >Apellido P</td>
// <td >apellido M</td>
// <td >Telefono</td>
// <td >Direccion</td>
// <td >CP</td>
// </tr>
// </thead>
// {this.state.arrayEmpleados.map(rows=>{
// return(

// <tbody>
// <tr>
// <th scope="row" ></th>
// <td  key={rows.id}>{rows.id}</td>
// <td >{rows.nombreEmpleado}</td>
// <td width="5%">{rows.apellidoPempleado}</td>
// <td width="5%">{rows.apellidoMempleado}</td>
// <td width="5%">{rows.direccionE}</td>
// <td width="5%">{rows.telefonoE}</td>
// <td width="5%">{rows.cp}</td>
// </tr>
// </tbody>
// )
// })}
// </Table>
// </ModalBody>
//     <ModalFooter>
//     <Button color="secondary" onClick={e=>this.toggle(false)}>Cancel</Button> 
//     </ModalFooter>
// </Modal>
// </div>   
// }

return(
    <React.Fragment>
   
   <Navbar style={{backgroundColor: '#ffccff'}} light expand="md">
   
<NavbarBrand  > <strong>Bienvenido &nbsp;&nbsp;</strong> {nom}&nbsp;&nbsp;{apeP}&nbsp;&nbsp;{apeM}&nbsp;</NavbarBrand>
          <Collapse navbar>
            <Nav className="mr-auto" navbar>

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
               </NavItem>

              <UncontrolledDropdown nav inNavbar style={{marginLeft:600}}>
                <DropdownToggle nav caret>
                  menú
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem  color="danger" onClick={this.regresar}>
                    
                    cerrar sesión
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
             

              
              <NavItem>
                {/* <NavLink href="https://github.com/reactstrap/reactstrap">
                                 </NavLink> */}
                {/* <Button color="danger"style={{marginLeft:300}} onClick={this.regresar} >Cerrar Sesión</Button> */}

              </NavItem>

              
            </Nav>
            
          </Collapse>
        </Navbar>
        <Button color="danger" onClick={this.toggle}>click aqui</Button>
        {modal}
                 

{/* 
        
        <Table  bordered size="sm">
         
             <th scope="row" ></th>
             <td width="5%">id</td>
              <td width="5%">Nombre</td>
              <td width="5%">Apellido P</td>
              <td width="5%">apellido M</td>
              <td width="5%">Telefono</td>
              <td width="5%">Direccion</td>
              <td width="5%">CP</td>

           
        {this.state.arrayEmpleados.map(rows=>{
        return(
          
          <tbody>
            <tr>
             <th scope="row" ></th>
              <td  key={rows.id}>{rows.id}</td>
              <td >{rows.nombreEmpleado}</td>
              <td width="5%">{rows.apellidoPempleado}</td>
              <td width="5%">{rows.apellidoMempleado}</td>
              <td width="5%">{rows.direccionE}</td>
              <td width="5%">{rows.telefonoE}</td>
              <td width="5%">{rows.cp}</td>

            </tr>
            
          </tbody>
        

   
        )
        })}
        </Table> */}
      
{/*         
<Table >
          <tbody>
            <tr>
             <th scope="row" ></th>
             <td width="12%">id</td>
              <td width="14%">Nombre</td>
              <td width="14%">Apellido P</td>
              <td width="14%">apellido M</td>
              <td width="12%">C.P.</td>
              <td width="14%">Telefono</td>
              <td width="18%">Correo</td>

            </tr>
            
          </tbody>
        </Table>       <h3>clientes </h3>   
        <Table bordered size="sm">
       
        {this.state.arrayClientes.map(rows=>{
          console.log("que es row",rows)
        return(
          <tbody>
            <tr> 
             <th scope="row" ></th>
              <td width="12%" key={rows.id}>{rows.id}</td>
              <td width="14%">{rows.nombre_cliente}</td>
              <td width="14%">{rows.apellidoP_cliente}</td>
              <td width="14%">{rows.apellidoM_cliente}</td>
              <td width="12%">{rows.cp_cliente}</td>
              <td width="14%">{rows.telefono_cliente}</td>
              <td width="18%">{rows.correo_cliente}</td>
              

            </tr>
            
          </tbody>
     
     )
    })}
  </Table> */}

 <Table>
          <tbody>
            <tr>
            <td >id</td>
              <td >razon_social</td>
              <td > direccion</td>
              <td >telefonoEmpresa</td>
              <td >correoEmpresas</td>
                 

            </tr>
            
          </tbody>
        </Table> 
        <Table bordered size="sm">                
        {this.state.arrayTrabajo.map(rows=>{
        return(
     
          <tbody>
            <tr>
            <td width="12%" key={rows.id}>{rows.id}</td>
              <td width="14%">{rows.razon_social}</td>
              <td width="14%">{rows.direccion}</td>
              <td width="14%">{rows.telefonoEmpresa}</td>
              <td width="12%">{rows.correoEmpresas}</td>
 
            </tr>
            
          </tbody>



)
})} 
              </Table> 
    
{/* 


    <Carousel
      activeIndex={this.state.activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={this.state.activeIndex} onClickHandler={this.state.goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel> */}


</React.Fragment>
)

}
}

export default Dashboard