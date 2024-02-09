import { Container, Heading, Text, Button, Image, HStack, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import Portfolio from "../pages/Portfolio";
import Process from "../pages/Process";
import Hero from "../components/Hero";

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
            <Hero /> 
            <section id="profile">
                <Profile />
            </section> 
            <section id="portfolio">
                <Portfolio />
            </section>
         </>
    );
}

export default Home;