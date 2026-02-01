import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
// import About from "./components/About";
// import Services from "./components/Services";
// import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Appointment from "./components/Appointment";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Appointment />
      {/* <About />
      <Services /> */}
      {/* <CTA /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
