import "./index.css";
// components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Support from "./components/Support/Support";
import InOne from "./components/InOne/InOne";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Support />
      <InOne />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
