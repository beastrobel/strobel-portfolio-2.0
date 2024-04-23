import { Container, Heading, Text, Button, Image, HStack, Box, Grid, GridItem, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import '../utils/link.css';

//Chakra UI styling
const linkStyles = {
    fontWeight: "600",
    color: "teal"
};

function Portfolio() {
    return(
        <Container maxWidth="4xl" mt="50px" mb="120px">
            <Heading as="h2" mt="50px" fontSize="24px">AWARD-WINNING MAGAZINE LAYOUT</Heading><br/>
                    <Box>
                        <Image src="/Ikenna_1.jpg" alt="Archive UX" borderRadius="10px"/><br/>
                        <Center>
                            <Link to="/Addy"><Button colorScheme="purple">View Layout</Button>
                        </Link></Center>
                    </Box>

            <Heading as="h2" mt="50px" fontSize="24px">UX CASE STUDY</Heading><br/>
                    <Box>
                        <Image src="/ArchiveThumbnail.jpg" alt="Archive UX" borderRadius="10px"/><br/>
                        <Center>
                            <Link to="/Archive"><Button colorScheme="purple">View Case Study</Button>
                        </Link></Center>
                    </Box>

            <Heading as="h2" mt="50px" fontSize="24px">WEB DEV PROJECTS</Heading><br/>
                    
                    <Box>
                        <Image src="/Guide-Mockup.jpg" alt="The Programmers' Guide to the Galaxy App Mockup" borderRadius="10px"/><br/>
                        <Center>
                            <Link to="/Programmers-Guide"><Button colorScheme="purple">View Project</Button>
                        </Link></Center>
                    </Box> 
                <br/><br/>
                    
                    <Box>
                        <Image src="/Umbrella-Mockup.jpg" alt="Umbrella App Mockup" borderRadius="10px"/><br/>
                        <Center>
                            <Link to="/Umbrella"><Button colorScheme="purple">View Project</Button>
                        </Link></Center>
                    </Box> 
                
          

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