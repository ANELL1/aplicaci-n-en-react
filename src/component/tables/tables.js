import axios from 'axios'

import { Table,Collapse,
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
    Toggle,
    Button,
    NavbarText,Card } from 'reactstrap';
import React, { Component } from 'react';

class Tablas extends Component{

constructor(props){
    super(props)
    this.state = {
   
       arrayDatos:[]
  }
  this.regresar = this.regresar.bind(this)
} 
regresar(){
    this.props.history.push("/")
  } 
componentWillMount(){
    this.getAdmins()
  }

  getAdmins(){
    let datosAdmin=[];
    const API='http://localhost:4000/graphql'   
    const id = 1
    let idAdmin;
    axios({
        url:API,
        method:'post',
        data:{
            query:`
            query{   
                getAdmins(data:"${[id]}"){
                id_admin
                } 
            }
            `
        }   
         })
         .then(datos => {
             console.log("datos getAdmins" , datos)
         

            datos.data.data.getAdmins.map(rows=>{
            console.log("rows",rows)  
            axios({
                 url:API,
                method:'post',
                data:{
                    query:`
                    query{   
                       getDataAdmin(data:"${[rows.id_admin]}"){  
                      id_admin
                        nombre
                        correo
                        nombre_cliente
                        apellidoP_cliente
                        correo_cliente
                        nombreEmpleado
                        apellidoPempleado
                        razon_social
                        direccion 
                        nombreproducto
                        precio  
                        } 
                    }
                    `
                }   
                 })
                 .then(datos => {    
                    datosAdmin.push(datos.data.data.getDataAdmin)
this.setState({arrayDatos:datosAdmin})
                 
                    
                })
              .catch(err=>{
                 console.log('error',err.response)
              })

         })

      })
      .catch(err=>{
         console.log('error',err.response)
      })
  }

 render(){
    
return(
     <React.Fragment>

<Navbar color="light" light expand="md">
<NavbarText>informacion de administradores</NavbarText>
  <Button outline color="danger"  onClick={this.regresar}>salir</Button>
          <Nav className="mr-auto" navbar></Nav>
          
        
      </Navbar>
      <Card>
       
 <Table>
          <tbody>
            <tr>
            <th>id_admin</th>
          <th>nombre</th>
          <th>correo</th>
          <th>nombre_cliente</th>
          <th>apellidoP_cliente</th>
           <th>correo_cliente</th>
          <th>nombreEmpleado</th>
           <th> apellidoPempleado </th>
          <th>razon_social</th>
          <th>direccion </th>
          <th>nombreproducto</th>
           <th>precio</th>  
            </tr>
          </tbody>
                      
        {this.state.arrayDatos.map(rows=>{
          return(
          rows.map(row=>{
            console.log("esto es row",row)

            return(
            <tbody>
                <tr>
                <td key={row.id_admin}>{row.id_admin}</td>
                <td>{row.nombre}</td>
                  <td>{row.correo}</td>
                  <td>{row.nombre_cliente}</td>
                  <td>{row.apellidoP_cliente}</td>
                  <td>{row.correo_cliente}</td>
                  <td>{row.nombreEmpleado}</td>
                  <td>{row.apellidoPempleado}</td>
                  <td>{row.razon_social}</td>
                  <td>{row.direccion}</td>
                  <td>{row.direccion}</td>
                  <td>{row.nombreproducto}</td>
                  <td>{row.precio}</td>
                  </tr>
                
              </tbody>
    
    )
          })
          )
 
})} 
              </Table> 

              </Card>
     </React.Fragment>
)
}
}

export default Tablas