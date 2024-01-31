function Portfolio() {
    return(
        <section>
            <div class = "row">
                <img src="/Umbrella.png" class="mx-auto d-block col-12 col-md-12 col-lg-12 p-5"/>
                <h3 class="col-sm-12 col-lg-12">Umbrella Weather App</h3><br/><br/>
                <p class="col-sm-12 col-lg-12">Umbrella is a single page web application built with React and powered by OpenWeatherMap APIs. 
                Umbrella allows users to search weather data by city, and it returns the temperature, a weather icon, and the weather description.</p>
                <p class="col-sm-12 col-lg-12"><a href="https://umbrella-weather.onrender.com" target="blank">Deployed web application</a></p>
                <p class="col-sm-12 col-lg-12"><a href="https://github.com/beastrobel/umbrella-2.0" target="blank">GitHub repository</a></p> 
            </div> 
            <div class = "row">
                <img src="/ProgrammersGuide.png" class="mx-auto d-block col-12 col-md-12 col-lg-12 p-5"/>
                <h3 class="col-sm-12 col-lg-12">The Programmer's Guide to the Galaxy</h3><br/><br/>
                <p class="col-sm-12 col-lg-12">The Programmer's Guide to the Galaxy is a full-stack web application built with React, GraphQL, Express and MongoDB,
                and styled with Chakra UI. I worked collaboratively with other students on this project.</p>
                <p class="col-sm-12 col-lg-12"><a href="https://programmers-guide-to-the-galaxy.onrender.com/" target="blank">Deployed web application</a></p>
                <p class="col-sm-12 col-lg-12"><a href="https://github.com/beastrobel/project3" target="blank">GitHub repository</a></p> 
            </div> 
            <div class = "row">
            <video class="mx-auto d-block col-12 col-md-12 col-lg-12 p-5" controls >
                <source src="social-network-api.webm" type="video/mp4" />
            </video><br/>
                <h3 class="col-sm-12 col-lg-12">Social Network API</h3><br/><br/>
                <p class="col-sm-12 col-lg-12">The Social Network API allows the user to view, add, modify, and delete Users, 
                Thoughts, Reactions, and Friends. The application was developed using NoSQL MongoDB and Express. It uses mongoose models and schemas to 
                create BSON objects for the social network database. The user is able to perform CRUD operations using Insomnia.</p>
                <p class="col-sm-12 col-lg-12"><a href="https://github.com/beastrobel/tech-blog" target="blank">GitHub repository</a></p> 
            </div> 
        </section>          
    )
};

export default Portfolio;             