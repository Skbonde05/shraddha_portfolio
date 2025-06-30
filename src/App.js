
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Certificates } from "./components/Certificates";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import About from './components/About';
import Experience from './components/Experiance';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About/>
      <Certificates />
      <Experience/>
     
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
