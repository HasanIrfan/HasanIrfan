import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from "reactstrap";

const Course=({course})=>{
    return(
        <Card className="text-center">
            <CardBody>
            <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className="text-center">
            <Button color="warning"> Play</Button>
            <Button color="danger ml-3"> Pause</Button>
            </Container>
            </CardBody>

        </Card>


    )
}

export default Course; 