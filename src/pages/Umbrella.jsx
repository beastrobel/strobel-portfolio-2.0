import { Container, Heading, Text, Button, Image, Box, Grid, GridItem, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

//Chakra UI styling
const linkStyles = {
    fontWeight: "600",
    color: "teal"
};

const buttonStyles = {
    bgColor: "black",
    color: "white",
    textDecoration: "none",
    borderWidth: "5px",
    borderColor: "black",
    borderRadius: "0px",
    fontWeight: 600,
    fontSize: "16px",
};

function Umbrella() {
    return(
        <Container maxWidth="4xl" my="50px">
            <Heading as="h3" fontSize="36px" mt="30px">Umbrella Weather App</Heading>
            <Text as="p">
                Umbrella is a single page web application built with React and powered by OpenWeatherMap APIs. 
                Umbrella allows users to search weather data by city, and it returns the temperature, a weather icon, and the weather description.</Text>
            <Text sx={linkStyles}>
                <Link to="https://umbrella-weather-2.onrender.com" target="blank">Deployed Web Application </Link>
                &#x2022;
                <Link to="https://github.com/beastrobel/umbrella-2.0" target="blank"> GitHub Repository</Link>
            </Text> 
            <Link to="https://umbrella-weather-2.onrender.com" target="blank">
                <Image src="/Umbrella-Mockup.jpg" mb="30px" alt="Mockup" mt="50px" /></Link>
            <Link to="https://umbrella-weather-2.onrender.com" target="blank">
                <Image src="/Umbrella.png" mb="30px" alt="Desktop View" mt="50px" />
            </Link>    
            <Grid templateColumns='repeat(4, 1fr)'>
                <GridItem colSpan={2} gap={3} p={2}>
                    <Image src="/Umbrella-Code.png" mb="30px" alt="Code" />
                </GridItem>    
                <GridItem colSpan={2} gap={3} p={2}>
                    <Image src="/Umbrella-Git.png" mb="30px" alt="GitHub Repository" />
                </GridItem>   
            </Grid>   
        </Container>
    );
}

export default Umbrella;