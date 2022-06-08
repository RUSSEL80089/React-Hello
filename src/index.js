//===========React Imports==============================
/** 
 * Represents a web developer card
 * @Card
 * @param{react-bootstrap} card- The react-bootstrap Components
*/
import React from 'react';
import ReactDOM from 'react-dom';

//Bootstrap Carp Import and List Items 

import Card from 'react-bootstrap/Card';
import {
    ListGroup,
    ListGroupItem
}
 from "react-bootstrap";
//Custom CSS Import 

import './customised.css';

//Web Developer Card Image 
import CardImage from './image/russel.jpg';


// We define the user object with its properties
const user = {
    name: "Russel",
    surname: "Chemhere",
    dateOfBirth: "05/12/1998",
    country: "South Africa",
    email: "russelchemhere@gmail.com",
    telephone: +27679923404,
    company: "Google",
    profilePicture: CardImage,
    interests: ["Playings Sports", "Coding", "Reading", "Movies", "Music"]
};



// we map over the interests array and grab each element and put it in the ListGroupItem
const listOfInterests = user.interests.map((interest) => {
    return <ListGroupItem key = { interest } > { interest } </ListGroupItem>;
});

/* We destructure the values of the properties and store them in the respective variables to be able to user them in the react Element below without typing user every time */
const {
    name,
    surname,
    dateOfBirth,
    country,
    email,
    telephone,
    company,
    profilePicture,
} = user;

// Definition of the react element to be rendered in the root of the HTML (the div with id: "root")
const reactElement = ( 
<div>
   <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"/>
    <header >
    <h1> Web Developer Card </h1> 
    </header>

      
    <Card style = { { width: "18rem" } }>
    <Card.Img variant = "top" src = { profilePicture }/>
     <Card.Body>
     <Card.Title > { name } { surname } </Card.Title>
     <Card.Subtitle className = "mb-2 text-muted" > { email } </Card.Subtitle> 
     <Card.Subtitle className = "mb-2 text-muted" > { telephone } </Card.Subtitle> 
     <Card.Text>Born on { dateOfBirth }, Works at { company }and Lives in { country }. { " " } </Card.Text>
     <h5 className = "cardListHeading" > Hobbies and Interests: </h5>
    </Card.Body> 

    <ListGroup variant = "flush"className = "list-group-flush" > { listOfInterests } </ListGroup> </Card>
</div>
);

const rootElement=document.getElementById("root");
ReactDOM.render(
    reactElement,
    rootElement
);