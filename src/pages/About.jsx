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
};

const downloadTxtFile = () => {
    const pdfUrl = "/ResumeBeatrizStrobel.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "ResumeBeatrizStrobel.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function About() {
    return(
        <Container as="section" maxWidth="4xl" my="50px">
            <Heading as="h1" mt="50px">About</Heading><br/>
            <Text>
                With just under 10 years of experience in Graphic Design and UI/UX, I am a styling expert. My toolkit includes Figma and Adobe Creative Cloud. 
                I am well versed in WCAG standards and accessibility testing. I have a Web Development Certificate from Michigan State University. 
                My technical skills include React.js, Redux.js, Apollo GraphQL, HTML, CSS, Bootstrap, Chakra UI, and JavaScript. Let's work together!
            </Text>
            <HStack mb="30px">
            <Link to="https://www.linkedin.com/in/beatriz-strobel-50a58a27b" aria-label="LinkedIn Profile" isexternal="true" target="blank">
                <LinkedInIcon />
            </Link>
            <Link to="https://github.com/beastrobel" aria-label="GitHub Profile" isexternal="true" target="blank">
                <GitHubIcon />
            </Link>
            </HStack>   
            <Button sx={buttonStyles} _hover={{ bgColor: "white", color: "black "}} id="downloadBtn" onClick={downloadTxtFile} value="download" target="blank">Download Resume</Button>              
        </Container>
        );
    }
            
export default About;

