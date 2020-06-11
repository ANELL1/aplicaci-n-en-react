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
    CarouselCaption
  
  } from 'reactstrap';

  import imagen from '../imagenes/google.jpg'
  import fotos from '../imagenes/fotos.jpg'
  import foto1 from '../imagenes/foto2.jpg'

class Dashboard extends Component{

constructor(props){
    super(props)
    this.state = {
        activeIndex:0,
        animating:false
    }
    this.regresar = this.regresar.bind(this)
}    




 regresar(){
    this.props.history.push("/form")
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

    


return(
    <React.Fragment>
   
   <Navbar color="warning" light expand="md">
       
<NavbarBrand href="https://www.google.com.mx/"  target="_blank"><strong>Bienvenido{localStorage.getItem("nombre") , localStorage.getItem("apellidos") } correo:{localStorage.getItem("correo")}</strong></NavbarBrand>
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
         
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Departamentos
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="https://consumer.huawei.com/mx/phones/" target="_blank">
                    celulares
                  </DropdownItem>
                  <DropdownItem>
                    Zapateria
                  </DropdownItem>
                  {/* <DropdownItem divider /> */}
                  <DropdownItem >
                    electronica
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  ofertas
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
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

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  servicios
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
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
              <UncontrolledDropdown nav inNavbar>
               
                <DropdownToggle nav caret>
                  Clientes
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
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
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  </DropdownMenu>
              </UncontrolledDropdown>


              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap"></NavLink>
                <Button color="danger"style={{marginLeft:300}} onClick={this.regresar} >Cerrar Sesión</Button>

              </NavItem>

              
            </Nav>
            
          </Collapse>
        </Navbar>

    



    <Carousel
      activeIndex={this.state.activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={this.state.activeIndex} onClickHandler={this.state.goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>


</React.Fragment>
)

}
}

export default Dashboard