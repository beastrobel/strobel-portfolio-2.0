import { Container, Heading, Text, Button, Image, HStack, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

//Chakra UI styling
const linkStyles = {
    fontWeight: "600",
    color: "teal"
}

function Portfolio() {
    return(
        <Container as="section" id="Portfolio" maxWidth="4xl" my="50px">
        <Heading as="h3" mt="50px">Portfolio</Heading><br/>
            <Heading as="h4" fontSize="24px">Umbrella Weather App</Heading>
            <Text>
                Umbrella is a single page web application built with React and powered by OpenWeatherMap APIs. 
                Umbrella allows users to search weather data by city, and it returns the temperature, a weather icon, and the weather description.</Text>
            <Link to="https://umbrella-weather.onrender.com" target="blank"><Text sx={linkStyles}>Deployed web application</Text></Link>
            <Link to="https://github.com/beastrobel/umbrella-2.0" target="blank"><Text sx={linkStyles}>GitHub repository</Text></Link>
            <Image src="/Umbrella.png" mb="30px" />
            <Heading as="h4" fontSize="24px">The Programmer's Guide to the Galaxy</Heading>
            <Text>
                The Programmer's Guide to the Galaxy is a full-stack web application built with React, GraphQL, Express and MongoDB,
                and styled with Chakra UI. I worked collaboratively with other students on this project.</Text>
            <Link to="https://programmers-guide-to-the-galaxy.onrender.com" target="blank"><Text sx={linkStyles}>Deployed web application</Text></Link>
            <Link to="https://github.com/beastrobel/project3" target="blank"><Text sx={linkStyles}>GitHub repository</Text></Link>
            <Image src="/ProgrammersGuide.png" mb="30px" />
            <Heading as="h4" fontSize="24px">Social Network API</Heading>
            <Text>
                The Social Network API allows the user to view, add, modify, and delete Users, 
                Thoughts, Reactions, and Friends. The application was developed using NoSQL MongoDB and Express. It uses mongoose models and schemas to 
                create BSON objects for the social network database. The user is able to perform CRUD operations using Insomnia.</Text>
            <Link to="https://github.com/beastrobel/social-network-api" target="blank"><Text sx={linkStyles}>GitHub repository</Text></Link>
            <video className="mx-auto d-block col-12 col-md-12 col-lg-12 p-5" controls >
                <source src="social-network-api.webm" type="video/mp4" />
            </video><br/>
        </Container>      
    )
};

export default Portfolio;             