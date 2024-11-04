import "./app.scss";
import "./global-animations.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";

const {staticLabels} = window;

const App = () => {

  const {portfolio} = staticLabels;

  return (
    <div className="app-root">
      <section className="homepage" id="Homepage">
        <Navbar />
        <Hero />
      </section>
      {
        portfolio.map((portfolio, index) => (
          <Portfolio  
            key={index} 
            id={portfolio.role}
            role={portfolio.title} 
            items={portfolio.items} 
          />
        ))
      }
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
