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
        <Heading as="h2" mt="50px">My Work</Heading><br/>
            <Hero /><br/> 
                <Box h="100px" colSpan={2} bg='#EFF5DD' borderRadius="10px" mb="30px">
                    <Link to="/Magazine-Archive" className="dropdown-item"> 
                        <Center><Image src="/FAITHArchive.png" h="100px"/></Center>
                    </Link>    
                </Box>   
                <Box h="100px" colSpan={2} bg='#f2f0f7' borderRadius="10px" mb="30px">
                    <Link to="/Programmers-Guide" className="dropdown-item"> 
                        <Center p={8} fontSize="22px" fontWeight="800" lineHeight="20px" textAlign="center">The Programmer's Guide<br/> to the Galaxy</Center>
                    </Link>
                </Box>          
                <Box h="100px" colSpan={2} bg='#e9f2f7' borderRadius="10px" mb="30px">
                    <Link to="/Umbrella" className="dropdown-item">    
                        <Center p={8} fontFamily="Pacifico" fontSize="24px">Umbrella</Center>
                    </Link> 
                </Box>          
                <Box h="100px" colSpan={2} bg='#f7edf2' borderRadius="10px" mb="30px">
                    <Link to="/Social-Network" className="dropdown-item"> 
                        <Center p={10} fontSize="20px" fontWeight="600" lineHeight="20px" letterSpacing="6px" textAlign="center">SOCIAL MEDIA API</Center>
                    </Link>    
                </Box>    
            <Heading as="h2" mt="50px">About this portfolio website</Heading><br/>
            <Text>I designed and developed my portfolio website from scratch. I created wireframes and prototypes using Figma, and then I made the website come to life in Visual Code.
                It was developed in ReactJS, it contains HTML, CSS and JavaScript components, and it was deployed on Render.</Text>  
                <Text sx={linkStyles}>
                <Link to="https://beatrizstrobelportfolio.onrender.com/" target="blank">Deployed web application </Link>
                &#x2022;
                <Link to="https://github.com/beastrobel/strobel-portfolio-2.0" target="blank"> GitHub repository</Link>
            </Text> <br/>
                <Image src="/Figma.png" /><br/>
                <Image src="/Process.png" />
        </Container>      
    )
};

export default Portfolio;             