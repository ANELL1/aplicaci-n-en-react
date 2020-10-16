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


class Home extends Component{

constructor(props){
    super(props)
    this.state = {
        activeIndex:0,
        animating:false,
       

    }
    this.regresar = this.regresar.bind(this)
   
} 



 regresar(){
    this.props.history.push("/")
 }   

 render(){
     const items = [
        {
          src:"https://images.pexels.com/photos/1938123/pexels-photo-1938123.jpeg?cs=srgb&dl=pexels-helena-lopes-1938123.jpg&fm=jpg",
           altText: 'Slide 1',
          caption: 'Slide 1'
        },
        {
          src:"https://images.pexels.com/photos/3198001/pexels-photo-3198001.jpeg?cs=srgb&dl=pexels-sergio-souza-3198001.jpg&fm=jpg",
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
   
   <Navbar style={{backgroundColor: '#ffccff'}} light expand="md">
   
<NavbarBrand  > </NavbarBrand>
          <Collapse navbar>
            <Nav className="mr-auto" navbar>


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

export default Home