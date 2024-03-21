import React from "react";
import Header from "./Header";
import About from "./About";
import Services from "./Services";
import Works from "./Works";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div id="/" className="dark:bg-slate-900">
      <Header />
      <About/>
      <Services/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
