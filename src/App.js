import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact us/Contact";
import { Jobs } from "./components/Jobs/Jobs";
import { Pages } from "./components/Pages/Pages";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/Pages" element={<Pages />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
