import { Container, Heading, Text, Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Hero.css";

//Chakra UI Styling
const buttonStyles = {
    bgColor: "black",
    color: "white",
    textDecoration: "none",
    borderWidth: "4px",
    borderColor: "black",
    borderRadius: "0px",
    fontWeight: 600,
    fontSize: "16px",
};

  const heroTextStyles= {
    color: "white",
    pos: "absolute",
    top: "10%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

function Hero() {
    return(
        <div className="background">
    </div> 
    );
};    

export default Hero;