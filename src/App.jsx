import "./app.scss"
import { Navbar } from "./navbar/Navbar.jsx";
import { Hero } from "./hero/Hero.jsx";
import { Parallax } from "./parallax/Parallax.jsx";
import { Services } from "./services/Services.jsx";
import { Portfolio } from "./portfolio/Portfolio.jsx";



function App () {
  
  return ( <div>
      <section>
        <Navbar />
     
        <Hero />
      </section>
      <section id="services">
        <Parallax type="services"/>
      </section>
      <section>
        <Services />
      </section>
      <section id="portfolio">
        <Parallax type="works"/>
      </section>
      <Portfolio />
      <section>
        <Parallax type="contact"/>
      </section>
      <section>Contact</section>
    </div> )
}

export default App
