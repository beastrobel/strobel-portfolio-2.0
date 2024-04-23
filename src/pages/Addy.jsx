import { Container, Heading, Text, Button, Image, HStack, Box, Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

//Chakra UI styling
const linkStyles = {
    fontWeight: "600",
    color: "teal"
};

function Addy() {
    return(
        <Container maxWidth="4xl" my="50px">
            <Heading as="h3" fontSize="36px">Award-Winning Feature</Heading>
            <Text as="p">
                Feature in the Fall 2023 issue of Content Evangelist Magazine. Silver Addy winner in the Editorial Feature category. Graphic Design by Beatriz Strobel & Photography by Jim Luning.</Text>
                <Image src="/Ikenna_1.jpg" mb="30px" mt="50px" alt="Ikenna Njoku Feature pages 50-51"/>
                <Image src="/Ikenna_2.jpg" mb="30px" mt="50px" alt="Ikenna Njoku Feature pages 52-53"/>
                <Image src="/Ikenna_3.jpg" mb="30px" mt="50px" alt="Ikenna Njoku Feature pages 54-55"/>
        </Container>
    );
}

export default Addy;