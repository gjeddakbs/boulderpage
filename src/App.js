import React from "react";
import Header from "./components/Header";
import AppSection from "./components/AppSection";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import About from "./components/About";



function App() {
  return ( <div>
  
  <Header />
  <div className="sections">
  <CallToAction/>
  <AppSection/>
  <About />
  <Contact />
  </div>
  </div>
  );
}

export default App;
