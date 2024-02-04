import { Container, Heading, Text, Button, Image, HStack, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

//Chakra UI styling
const linkStyles = {
    fontWeight: "600",
    color: "teal"
}

function Guide() {
    return(
        <Container maxWidth="4xl" my="50px">
            <Heading as="h3" fontSize="24px">The Programmer's Guide to the Galaxy</Heading>
            <Text as="p">
                The Programmer's Guide to the Galaxy is a full-stack web application built with React, GraphQL, Express and MongoDB,
                and styled with Chakra UI. I worked collaboratively with other students on this project.</Text>
            <Link to="https://programmers-guide-to-the-galaxy.onrender.com" target="blank"><Text sx={linkStyles}>Deployed web application</Text></Link>
            <Link to="https://github.com/beastrobel/project3" target="blank"><Text sx={linkStyles}>GitHub repository</Text></Link>
            <Image src="/ProgrammersGuide.png" mb="30px" alt="The Programmer's Guide to the Galaxy Desktop View"/>
        </Container>
    );
}

export default Guide;