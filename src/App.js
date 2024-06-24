import React,{useEffect} from 'react';
import './App.css';
import Brands from './Components/Brands';
import Featured from './Components/Featured';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MasterPieces from './Components/MasterPieces';
import Services from './Components/Services';
import Hero from './Components/Hero';
import './Style.css'
import Solution from './Components/Solution';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="App font-roboto">
      <Header/>
      <Hero/>
      <Brands/>
      <Featured/>
      <MasterPieces/>
      <Services/>
      <Solution/>
      <Footer/>
    </div>
  );
}

export default App;
