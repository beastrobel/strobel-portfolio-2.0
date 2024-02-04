import { Container, Heading, Text, Button, Image, Box, Flex } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import LinkedInIcon from "../utils/LinkedInIcon";
import GitHubIcon from "../utils/GitHubIcon";

const linkStyles = {
    fontWeight: "600",
    color: "teal"
};

function Contact() {
    return(
        <Container maxWidth="4xl" my="50px">
        <Heading as="h3" fontSize="24px" mt="30px">Contact</Heading>
        <Text as="p"><EmailIcon /> beatrizstrobel@proton.me</Text>
        <Text as="p"><PhoneIcon /> (616) 228-5154</Text>
        <Flex>
        <LinkedInIcon /><Text as="p"> https://www.linkedin.com/in/beatriz-strobel-50a58a27b</Text>
        </Flex>
    </Container>
    );
}

export default Contact;