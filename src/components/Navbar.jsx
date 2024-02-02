import { 
    Flex, 
    Heading, 
    } from "@chakra-ui/react";


//Chakra UI Styling
const navStyles = {
    p: "10px",
    mt: "0px",
    bg: "transparent",
    color: "black",
    justify: "space-between"
};

const brandStyles = {
    fontSize: "24px",
    color: "white",
    pos: "absolute"
};

function Navbar() {
    return(
        <Flex as="nav" sx ={navStyles}>
            <Heading sx={brandStyles} >Beatriz Strobel</Heading>
        </Flex>
    );
}

export default Navbar;