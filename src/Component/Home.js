import React from "react";
import { Jumbotron, Container, Button} from "reactstrap";


const Home =()=>{
    return(
        <div>
        <Jumbotron className="text-center" styles="margin-left: 10px; margin-right: 10px;">
        <b3 className="display-3" > RYAN SPORTS CLUB </b3>
        <p>
        RYAN Sports Club, an effort has been made to provide a world class
        facilities and infrastructure for the promotion of sports and health.
        During the past time, RYAN sports club has emerged as one of the best
        facilities in the country in the area of sports and health and also it
        is making strides to acquire a formidable presence in the international.
        The club provides the facilities like “Indoor Sports”, Outdoor Sports”
        and “Recreation”.
        </p>
        <Container>

        <Button style={{width:140, marginLeft:5, marginRight:5}} color="primary">Home </Button>
    
        <Button style={{width:140, marginLeft: 5, marginRight:5}} color="primary">Indoor Games</Button>
             
        <Button style={{width:140, marginLeft: 5, marginRight:5}} color="primary">Outdoor Games</Button>
        
        <Button style={{width:140, marginLeft: 5, marginRight:5}} color="primary">Recreations</Button>
       
        <Button style={{width:140, marginLeft: 5, marginRight:5}} color="primary">Membership</Button>
        
        <Button style={{width:140, marginLeft: 5, marginRight:5}} color="primary">Gallery</Button>

        <Button style={{width:140, marginLeft: 5, marginRight:5}} color="primary">Contact Us</Button>
        </Container>
        
        </Jumbotron>
        </div>
    )
}

export default Home;