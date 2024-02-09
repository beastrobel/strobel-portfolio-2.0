import { Container, Heading, Text, Button, Image, HStack, Box, Grid, GridItem, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import '../utils/link.css';

//Chakra UI styling
const linkStyles = {
    fontWeight: "600",
    color: "teal"
};

const heroBoxStyles= {
    bgGradient: "linear(to-tl, blue.600, purple.600)",
    h: "400px",
    position: "relative",
    borderRadius: "10px",
};

const heroTextStyles= {
    color: "white",
    pos: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
};

const imageStyles = {
    boxSize: "full",
    objectFit: "cover",
    opacity: "50%",
    borderRadius: "10px",
};

function Portfolio() {
    return(
        <Container maxWidth="4xl" mt="50px" mb="120px">
            <Heading as="h2" mt="50px" fontSize="24px">UX CASE STUDY</Heading><br/>
                <Link to="/Archive">
                    <Box sx={heroBoxStyles}>
                        <Image src="/james-kovin-F2h_WbKnX4o-unsplash.jpg" alt="Soundboard" sx={imageStyles} _hover={{opacity: "0%"}}/>
                        <Image src="/Archive_W.png" w="300px" alt="Archive Logo" sx={heroTextStyles} />  
                    </Box> 
                </Link>
                <Text>Photo by James Kovin on Unsplash </Text>  
            <Heading as="h2" mt="50px" fontSize="24px">WEB DEV PROJECTS</Heading><br/>
                    <Link to="/Programmers-Guide">
                    <Box sx={heroBoxStyles}>
                        <Image src="/Guide-Mockup.jpg" alt="The Programmers' Guide to the Galaxy App Mockup" sx={imageStyles} _hover={{opacity: "0%"}}/>
                        <Text sx={heroTextStyles} fontWeight="800" fontSize="42px" lineHeight="52px">The Programmer's Guide to the Galaxy</Text>  
                    </Box> 
                </Link> <br/>
                    <Link to="/Umbrella">
                    <Box sx={heroBoxStyles}>
                        <Image src="/Umbrella-Mockup.jpg" alt="Umbrella App Mockup" sx={imageStyles} _hover={{opacity: "0%"}}/>
                        <Text sx={heroTextStyles} fontSize="5xl" fontFamily="pacifico">Umbrella</Text>   
                    </Box> 
                </Link> 
          

                <Heading as="h2" mt="50px">About this portfolio website</Heading><br/>
                <Text>I designed and developed my portfolio website from scratch. I created wireframes and prototypes using Figma, and then I made the website come to life in Visual Studio Code.
                    It was developed with ReactJS, it contains HTML, CSS and JavaScript components, and it was deployed on Render.</Text>  
                    <Text sx={linkStyles}>
                    <Link to="https://beatrizstrobelportfolio.onrender.com/" target="blank">Deployed web application </Link>
                    &#x2022;
                    <Link to="https://github.com/beastrobel/strobel-portfolio-2.0" target="blank"> GitHub repository</Link>
                </Text> <br/>
                    <Image src="/Figma.png" alt="Portfolio Figma Wireframes"/><br/>
                    <Image src="/Process.png" alt="Screenshot of Portfolio in Visual Studio Code" />
        </Container>      
    )
};

export default Portfolio;             