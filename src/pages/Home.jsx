import { Container, Heading, Text, Button, Image, HStack, Box } from "@chakra-ui/react";
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
}

const heroBoxStyles= {
    bgColor: "black",
    h: "100vh",
    pos: "static"
  };

  const heroTextStyles= {
    color: "white",
    pos: "absolute",
    top: "25%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const imageStyles={
    boxSize: "full",
    objectFit: 'cover',
    opacity: "60%", 
    blendMode: "screen",
    objectPosition: "right"
  }

function Home() {
    return(
        <>
            <Box as="section">
                <Box sx={heroBoxStyles}>
                    <Box sx={heroTextStyles}>
                        <Heading as="h2" fontSize="24px" fontWeight="500">Hi, I'm Beatriz Strobel.</Heading>
                        <Heading as="h1" fontSize="48px" lineHeight="52px">I develop user-friendly interfaces.</Heading>
                        <Text fontSize="18px">UI/UX Designer based in Grand Rapids, MI.</Text>
                    </Box>
                    <Image src="/Hero.jpg" sx={imageStyles} />
                </Box> 
            </Box> 
            <Container as="section" maxWidth="4xl" my="50px">
            <Heading as="h3" mt="50px">About</Heading><br/>
                <Text>
                    With just under 10 years of experience in Graphic Design and UI/UX, I am a styling expert. My toolkit includes Figma and Adobe Creative Cloud. 
                    I am well versed in WCAG standards and accessibility testing. I have a Web Development Certificate from Michigan State University. 
                    My technical skills include React.js, Redux.js, Apollo GraphQL, HTML, CSS, Bootstrap, Chakra UI, and JavaScript. Let's work together!
                </Text>
                <HStack>
                            <Link to="https://www.linkedin.com/in/beatriz-strobel-50a58a27b" isexternal="true" target="blank">
                                <LinkedInIcon />
                            </Link>
                            <Link to="https://github.com/beastrobel"  isexternal="true" target="blank">
                                <GitHubIcon />
                            </Link>
                </HStack>   
                <HStack my="30px">
                    <Link to="/portfolio"><Button sx={buttonStyles} _hover={{ bgColor: "white", color: "black "}}>View Portfolio</Button></Link>
                    <Link to="/ResumeBeatrizStrobel.pdf" download="ResumeBeatrizStrobel.pdf" target="blank"><Button sx={buttonStyles} _hover={{ bgColor: "white", color: "black "}}>Download Resume</Button></Link>
                </HStack>
                        <Heading as="h3" mt="50px">My process</Heading><br/>
                        <Image src="/Figma.png" />                   
            </Container>
         </>
    );
}

export default Home;