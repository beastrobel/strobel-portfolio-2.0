import { Container, Heading, Text, Button, Image, HStack, Box } from "@chakra-ui/react";

function Process() {
    return(
        <Container as="section" maxWidth="4xl" my="50px">
        <Heading as="h3" mt="50px">My process</Heading><br/>
        <Image src="/Figma.png" mb="30px" alt="Screenshot of Figma wireframes"/>   
        <Image src="/Process.png" mb="30px" alt="Screenshot of Visual Studio code"/>                  
        </Container>
    );
};

export default Process;