import { Container, Heading, Text, Button, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Login from "../components/Login"

//Chakra UI styling
const linkStyles = {
    fontWeight: "600",
    color: "teal"
}

function Archive() {
    return(
        <Box bgColor="gray.200">
            <Login />
        </Box>
    );
}

export default Archive;