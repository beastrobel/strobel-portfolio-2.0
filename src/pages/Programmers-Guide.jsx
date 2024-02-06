import { Container, Heading, Text, Button, Image, HStack, Box, Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

//Chakra UI styling
const linkStyles = {
    fontWeight: "600",
    color: "teal"
};

function Guide() {
    return(
        <Container maxWidth="4xl" my="50px">
            <Heading as="h3" fontSize="36px">The Programmer's Guide to the Galaxy</Heading>
            <Text as="p">
                The Programmer's Guide to the Galaxy is a MERN stack web application built using React, GraphQL, Express and MongoDB. 
                It was a 2 week sprint with a 3 person team. My role was Frontend Developer. I built the React components,
                developed the login and signup forms, and styled the application using the Chakra UI library.</Text>
            <Text sx={linkStyles}>
                <Link to="https://the-programmers-guide-to-the-galaxy.onrender.com" target="blank">Deployed web application </Link>
                &#x2022;
                <Link to="https://github.com/beastrobel/project3" target="blank"> GitHub repository</Link>
            </Text>
            <Link to="https://the-programmers-guide-to-the-galaxy.onrender.com" target="blank">
                <Image src="/Guide-Mockup.jpg" mb="30px" mt="50px" alt="Mockup"/></Link>
            <Link to="https://the-programmers-guide-to-the-galaxy.onrender.com" target="blank">
                <Image src="/ProgrammersGuide.png" mb="30px" mt="50px" alt="Desktop View"/></Link>
            <Grid templateColumns='repeat(4, 1fr)'>
                <GridItem colSpan={2} gap={3} p={2}>
                    <Image src="/Login.png" mb="30px" alt="Login Page" />
                </GridItem>    
                <GridItem colSpan={2} gap={3} p={2}>
                    <Image src="/Profile.png" mb="30px" alt="Dashboard" />
                </GridItem>   
            </Grid> 
            <Grid templateColumns='repeat(4, 1fr)'>
                <GridItem colSpan={2} gap={3} p={2}>
                    <Image src="/FAQ.png" mb="30px" alt="FAQs" />
                </GridItem>    
                <GridItem colSpan={2} gap={3} p={2}>
                    <Image src="/JavaScriptPage.png" mb="30px" alt="JavaScript Page" />
                </GridItem>   
            </Grid>
        </Container>
    );
}

export default Guide;