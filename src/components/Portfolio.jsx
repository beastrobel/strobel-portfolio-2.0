function Portfolio() {
    return(
        <section>
             <div class = "row">
                <img src="/Umbrella-Mockup.jpg" class="mx-auto d-block col-12 col-md-12 col-lg-12 p-5"/>
                <h3 class="col-sm-12 col-lg-12">Umbrella Weather App</h3><br/><br/>
                <p class="col-sm-12 col-lg-12"><a href="https://umbrella-weather.onrender.com" target="blank">Deployed web application</a></p>
                <p class="col-sm-12 col-lg-12"><a href="https://github.com/beastrobel/umbrella-2.0" target="blank">GitHub repository</a></p> 
            </div> 
            <div class = "row">
                <img src="/TechBlog.png" class="mx-auto d-block col-12 col-md-12 col-lg-12 p-5"/>
                <h3 class="col-sm-12 col-lg-12">Tech Blog</h3><br/><br/>
                <p class="col-sm-12 col-lg-12"><a href="https://tech-blog-42-62e93e33c17a.herokuapp.com/" target="blank">Deployed web application</a></p>
                <p class="col-sm-12 col-lg-12"><a href="https://github.com/beastrobel/tech-blog" target="blank">GitHub repository</a></p> 
            </div> 
            <div class = "row">
            <video class="mx-auto d-block col-12 col-md-12 col-lg-12 p-5" controls >
                <source src="social-network-api.webm" type="video/mp4" />
            </video><br/>
                <h3 class="col-sm-12 col-lg-12">Social Network API</h3><br/><br/>
                <p class="col-sm-12 col-lg-12"><a href="https://github.com/beastrobel/tech-blog" target="blank">GitHub repository</a></p> 
            </div> 
        </section>          
    )
};

export default Portfolio;             