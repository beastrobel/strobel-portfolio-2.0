import { Container, Heading, Text, Button, Image, Box, Grid, GridItem, useMediaQuery, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LinkedInIcon from "../utils/LinkedInIcon";
import GitHubIcon from "../utils/GitHubIcon";

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
};

const linkStyles = {
    fontWeight: "600",
    color: "teal"
};

function About() {
    //Media Query
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
    if (isLargerThan800) {
        return(
            <Container maxWidth="4xl" my="50px">
                <Grid templateColumns='repeat(5, 1fr)'>
                    <GridItem colSpan={2} gap={3}>
                        <Image src="/BeatrizStrobel.jpg" w="200px" borderRadius="200px" m="55px"  />
                    </GridItem>
                    <GridItem colSpan={3} gap={3}>
                        <Heading as="h2" fontSize="48px" lineHeight="52px" mb="30px">About me</Heading>
                        <Text as="p" display="flex" flex-wrap="wrap">
                            I am passionate about design and technology. In my current and previous roles, I have had opportunities to design and develop websites. Last year, I assumed the role of UI/UX Lead for FAITH Catholic Publisher's magazine archive website. After nearly a decade specializing in graphic design and 
                            honing my craft, I look forward to intergrating technology into my design practice and growing my career in UI/UX.
                            <br/><br/>
                            I am always looking to expand my skill set. This year, I earned a certificate in Full Stack Web Development from Michigan State University. I gained technical programming skills in ReactJS, GraphQL, Express, HTML, 
                            CSS, Javascript, JQuery, Bootstrap, Node.js, MySQL, and MongoDB. I have been working on a variety of personal projects to continue to strengthen my programming skills.
                            <br/><br/>
                            When I'm not designing or programming, I can be found flipping through the vinyl crates at the corner record shop.


                        </Text>
                        <Text sx={linkStyles}>
                        <Link to="/ResumeBeatrizStrobel.pdf" isexternal="true" target="blank"> Resume </Link>
                        &#x2022;
                        <Link to="https://www.linkedin.com/in/beatriz-strobel-50a58a27b" isexternal="true" target="blank"> LinkedIn </Link>
                         &#x2022;
                        <Link to="https://github.com/beastrobel" isexternal="true" target="blank"> GitHub </Link>
                        &#x2022;
                        <Link to="/Contact" isexternal="true" target="blank"> Email </Link>
                        </Text>
                    </GridItem>   
                </Grid>
            </Container>
        );
    } else {
        return(
            <Container maxWidth="4xl" my="50px">
                <Grid templateColumns='repeat(5, 1fr)'>
                    <GridItem colSpan={5} p={2}>
                        <Center>
                            <Image src="/BeatrizStrobel.jpg" w="200px" borderRadius="200px" mb="55px" />
                        </Center>    
                        <Heading as="h2" fontSize="48px" lineHeight="52px" mb="30px">About me</Heading>
                        <Text as="p" display="flex" flex-wrap="wrap">
                            I am passionate about design and technology. In my current and previous roles, I have had opportunities to design and develop websites. Last year, I assumed the role of UI/UX Lead for FAITH Catholic Publisher's magazine archive website. After nearly a decade specializing in graphic design and 
                            honing my craft, I look forward to intergrating technology into my design practice and growing my career in UI/UX.
                            <br/><br/>
                            I am always looking to expand my skill set. This year, I earned a certificate in Full Stack Web Development from Michigan State University. I gained technical programming skills in ReactJS, GraphQL, Express, HTML, 
                            CSS, Javascript, JQuery, Bootstrap, Node.js, MySQL, and MongoDB. I have been working on a variety of personal projects to continue to strengthen my programming skills.
                            <br/><br/>
                            When I'm not designing or programming, I can be found flipping through the vinyl crates at the corner record shop.
                        </Text>
                        <Text sx={linkStyles}>
                        <Link to="/ResumeBeatrizStrobel.pdf" isexternal="true" target="blank"> Resume </Link>
                        &#x2022;
                        <Link to="https://www.linkedin.com/in/beatriz-strobel-50a58a27b" isexternal="true" target="blank"> LinkedIn </Link>
                        &#x2022;
                        <Link to="https://github.com/beastrobel" isexternal="true" target="blank"> GitHub </Link>
                        &#x2022;
                        <Link to="/Contact" isexternal="true" target="blank"> Email </Link>
                        </Text> 
                    </GridItem>   
                </Grid>
            </Container>
        );
    }
}    
            
export default About;

