import React from "react";

const styles = {
  image: {
    width: "200px",
    height: "240px",
    padding: "10px"
  }
}

const Card = props => (
  <img 
    src={props.image} 
    alt={props.name} 
    style={styles.image} 
    onClick={() => props.checkGuess(props.id)} 
  />
);

export default Card;