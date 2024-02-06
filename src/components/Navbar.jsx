import { 
    Flex, 
    Heading, 
    Spacer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";    
import { Link } from "react-router-dom";


//Chakra UI Styling
const navStyles = {
    fontSize: "25px",
    p: "10px",
    mt: "0px",
    bg: "transparent",
    color: "black",
    justify: "space-between"
};

function Navbar() {
    return( 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/"><Heading sx={navStyles}>Beatriz Strobel</Heading></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Portfolio</Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/Magazine-Archive" className="dropdown-item">Magazine Archive</Link>
                                <Link to="/Programmers-Guide" className="dropdown-item">The Programmer's Guide</Link>
                                <Link to="/Umbrella" className="dropdown-item">Umbrella Weather</Link>
                                <Link to="/Social-Network" className="dropdown-item">Social Network API</Link>
                            </div>
                    </li>
                    <li className="nav-item">        
                        <Link to="/About" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;