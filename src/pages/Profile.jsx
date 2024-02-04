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

function Profile() {
    //Media Query
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
    if (isLargerThan800) {
        return(
            <Container maxWidth="4xl" my="50px">
                <Grid templateColumns='repeat(5, 1fr)'>
                    <GridItem colSpan={2} gap={3}>
                        <Image src="/BeatrizStrobel.jpg" w="200px" borderRadius="200px" m="55px"  />
                    </GridItem>
                    <GridItem colSpan={3} gap={3} p={2}>
                        <Heading as="h1" fontSize="24px" fontWeight="600">Hi, I'm Beatriz Strobel.</Heading>
                        <Heading as="h2" fontSize="48px" lineHeight="52px">I develop user-friendly interfaces.</Heading>
                        <Text as="p" fontSize="18px">UI/UX Designer | Web Developer</Text>
                        <Text as="p" display="flex" flex-wrap="wrap">
                            With just under 10 years of experience in Graphic Design and UI/UX, I am a styling expert. My toolkit includes Figma and Adobe Creative Cloud. 
                            I am well versed in WCAG standards and accessibility testing. I have a Web Development Certificate from Michigan State University. 
                            My technical skills include React.js, Redux.js, Apollo GraphQL, HTML, CSS, Bootstrap, Chakra UI, and JavaScript. Let's work together!
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
                        <Heading as="h1" fontSize="24px" fontWeight="600">Hi, I'm Beatriz Strobel.</Heading>
                        <Heading as="h2" fontSize="48px" lineHeight="52px">I develop user-friendly interfaces.</Heading>
                        <Text as="p" fontSize="21px">UI/UX Designer | Web Developer</Text>
                        <Text as="p" display="flex" flex-wrap="wrap">
                            With just under 10 years of experience in Graphic Design and UI/UX, I am a styling expert. My toolkit includes Figma and Adobe Creative Cloud. 
                            I am well versed in WCAG standards and accessibility testing. I have a Web Development Certificate from Michigan State University. 
                            My technical skills include React.js, Redux.js, Apollo GraphQL, HTML, CSS, Bootstrap, Chakra UI, and JavaScript. Let's work together!
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
            
export default Profile;
