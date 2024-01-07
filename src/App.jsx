import './App.css';
import Home from './components/Home';
import Navbar from './Navbar';
import Portfolio from './components/Portfolio';
import { Route, Routes } from "react-router-dom";

function App() {
return (
    <>
    <Navbar/>
    <div class="container">
        <Routes>
            <Route path ="/" element={<Home/>} />
            <Route path ="/portfolio" element={<Portfolio/>} />
        </Routes>
    </div>
    </>
)    
}

export default App;