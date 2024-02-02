import { Container, Heading, Text, Button, Image, HStack, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Process from "../pages/Process";

//Chakra UI Styling
const buttonStyles = {
    bgColor: "black",
    color: "white",
    textDecoration: "none",
    borderWidth: "5px",
    borderColor: "black",
    borderRadius: "0px",
    fontWeight: 600,
    fontSize: "16px",
}

function Home() {

    return(
        <>
            <Box as="section">
                <Hero />
            </Box> 
            <About />
            <Portfolio />
            <Process />

         </>
    );
}

export default Home;