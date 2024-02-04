import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './utils/theme';
import '@fontsource-variable/figtree';
import '@fontsource/pacifico';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Navbar/>   
                <Outlet />    
            <Footer/>
        </ChakraProvider >        
    );    
}

export default App;