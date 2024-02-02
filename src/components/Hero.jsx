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
        <Box sx={heroTextStyles}>
            <Heading as="h1" fontSize="21px" fontWeight="500">Hi, I'm Beatriz Strobel.</Heading>
            <Heading as="h2" fontSize="48px" lineHeight="52px">I develop user-friendly interfaces.</Heading>
            <Text as="p" fontSize="18px">UI/UX Designer | Web Developer</Text>
        </Box>
    </div> 
    );
};    

export default Hero;