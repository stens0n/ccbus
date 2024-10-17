import Navbar from './components/Navbar';
import Hero from './components/Hero'
import About from './components/About';
import Support from './components/Support';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Work from './components/Work';

import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    

    <div>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <Pricing />
      <Work />
      <Footer />
      
    </div>

    
    
  );
}

export default App;
