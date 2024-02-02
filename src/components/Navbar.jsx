import { 
    Flex, 
    Heading, 
    Menu, 
    MenuItem, 
    MenuButton, 
    IconButton, 
    MenuList, 
    Spacer
    } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

//Chakra UI Styling
const navStyles = {
    p: "10px",
    position: "absolute",
    mt: "0px",
    bg: "transparent",
    color: "white"
};

const brandStyles = {
    fontSize: "24px"
};

function Navbar() {
    return(
        <Flex as="nav" sx ={navStyles}>
            <Heading sx={brandStyles} >Beatriz Strobel</Heading>
            {/* <Spacer />
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                />
                <MenuList>
                    <Link to="/Portfolio"><MenuItem>Portfolio</MenuItem></Link>
                </MenuList>
            </Menu> */}
        </Flex>          
    );
}

export default Navbar;