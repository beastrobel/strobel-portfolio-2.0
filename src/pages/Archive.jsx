import { Container, Heading, Text, Button, Image, Box, Grid, GridItem, UnorderedList, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Login from "../components/Login"

//Chakra UI styling
const linkStyles = {
    fontWeight: "600",
    color: "teal"
}

function Archive() {
    return(
        <Container maxWidth="4xl" my="50px">
            <Heading as="h3" fontSize="36px">Archive</Heading>
            <Text>This UX case study was created by me to showcase my process. </Text>
            <Image src="/james-kovin-F2h_WbKnX4o-unsplash.jpg" alt="Soundboard" mb="30px" mt="50px" />
            <Heading as="h5" fontSize="24px" mt="50px">Client: Archive Recording Studio</Heading>
            <Heading as="h5" fontSize="24px" mt="30px">Project Brief</Heading>
                <Text as="p">
                    Archive is a Grand Rapids based recording studio that specializes in providing services to independent artists. Their recording services include studio recording, music production, and mastering.
                    Their formats include digital, CD, and vinyl. They provide transfer services to convert analogue formats into digital files. Archive's promotion services include a free design studio tool
                    available to clients who have completed a recording session. The design studio tool allows clients to choose from a variety of fonts and graphics to design their brand and album covers. 
                    They can also upload their own artwork. Clients can order copies of their recorded album from Archive, complete with the artwork they designed. Archive has connections with local radio stations and promotes up-and-comming
                    independent artists. <br/><br/>
                    <b>The Challenge: </b>To design a new website for Archive that showcases their services and captures their unique brand. The website must be effective in driving user engagement and have a high conversion rate. 
                </Text>
            <Heading as="h5" fontSize="24px" mt="30px">User Stories</Heading>
                <Heading as="h6" fontSize="18px" mt="30px">Jordan a.k.a. "Madditude" (He/Him)</Heading>
                    <Text>Talented rapper with a TikTok following looking to record a professional demo to send to record labels.</Text>
                    <b>Needs & Goals:</b>
                        <UnorderedList>
                        <ListItem ml="10px">Wants to realize his dream of becoming a professional artist.</ListItem>
                        <ListItem ml="10px">Wants to have his song played on the radio. </ListItem>
                        <ListItem ml="10px">Wants to easily be able to book a recording session and access the demo.</ListItem>
                        </UnorderedList>
                <Heading as="h6" fontSize="18px" mt="30px">Lilla (She/Her)</Heading>
                    <Text>Local violinist with a long career of playing in The Fine Fiddlers quartet looking to preserve the quartet's recordings in a digital format.<br/></Text>
                        <b>Needs & Goals:</b>
                        <UnorderedList>
                        <ListItem ml="10px">Wants to preserve The Fine Fiddlers' music.</ListItem>
                        <ListItem ml="10px">Wants to convert cassette tape recordings into remastered digital recordings.</ListItem>
                        <ListItem ml="10px">Wants to share the quartet's music on YouTube.</ListItem>
                        </UnorderedList>
                    <Heading as="h6" fontSize="18px" mt="30px">Ashe (They/Them)</Heading>
                    <Text>Visionary multi-instrumentalist in the independent punk band Brooklyn Fierce looking to record their new album and release a limited edition in vinyl.<br/></Text>
                        <b>Needs & Goals:</b>
                        <UnorderedList>
                        <ListItem ml="10px">Want to record a new Brooklyn Fierce album.</ListItem>
                        <ListItem ml="10px">Want to release a limited edition in vinyl.</ListItem>
                        <ListItem ml="10px">Want to design their own artwork.</ListItem>
                        </UnorderedList>
                        <Heading as="h5" fontSize="24px" mt="30px">Information Architecture</Heading>
            <Image src="/InformationArchitecture.png" alt="Information Architecture" />
            <Heading as="h5" fontSize="24px" mt="30px">Sketches</Heading>
            <Image src="/Sketch.jpg" alt="Wireframe Sketches" />

            <Heading as="h5" fontSize="24px" mt="30px">Wireframes</Heading>
            <Image src="/LoFi.png" alt="Lo-Fi Wireframes"/>
            <Heading as="h5" fontSize="24px" mt="30px">Prototype</Heading>
            <Heading as="h5" fontSize="24px" mt="30px">Takeaways</Heading>

        </Container>
    );
}

export default Archive;