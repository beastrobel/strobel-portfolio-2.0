import { Container, Heading, Text, Button, Image, HStack, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

//Chakra UI styling
const linkStyles = {
    fontWeight: "600",
    color: "teal"
}

function Social() {
    return(
        <Container maxWidth="4xl" my="50px">
            <Heading as="h3" fontSize="36px">Social Network API</Heading>
            <Text as="p">
                The Social Network API allows the user to view, add, modify, and delete Users, 
                Thoughts, Reactions, and Friends. The application was developed using NoSQL MongoDB and Express. It uses mongoose models and schemas to 
                create BSON objects for the social network database. The user is able to perform CRUD operations using Insomnia.</Text>
            <Link to="https://github.com/beastrobel/social-network-api" target="blank"><Text sx={linkStyles}>GitHub repository</Text></Link>
            <video className="mx-auto d-block col-12 col-md-12 col-lg-12 p-5" controls >
                <source src="social-network-api.webm" type="video/mp4" />
            </video><br/>
        </Container>
    );
}

export default Social;