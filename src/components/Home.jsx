import { Link } from "react-router-dom"
import './Home.css';

function Home() {
    return(
        <section>
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12 m-3 p-5">
                    <h2>Hi, I'm Beatriz Strobel.</h2>
                    <h1>I develop user-friendly interfaces.</h1>
                    <p>Web developer based in Grand Rapids, MI.</p><br/><br/>      
                    <p>With just under 10 years of experience in graphic design and UI/UX, I am a styling expert. 
                    My web dev toolkit includes React.js, Apollo GraphQL, Express.js, MongoDB, MySQL, Node.js,
                    HTML, CSS, Bootstrap, JavaScript and jQuery. Let's work together!</p><br/>
                    <Link to="/portfolio"><button class="btn">View Portfolio</button></Link>

                </div>
            </div>
            <img src="/src/assets/HotspotFinderHD.jpg" class="img-fluid" />              
        </section>
    );
}

export default Home;