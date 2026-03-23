import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MemoryGame from "./components/MemoryGame";
import Puzzle from "./components/Puzzle";
import SensoryMode from "./components/SensoryMode";
import {AudioProvider} from "./context/AudioProvider"

function App() {
  return (
    <AudioProvider>
    <div id="root">
      <BrowserRouter>
        <Navbar />
        <main>
          {" "}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/memorygame" element={<MemoryGame />} />
            <Route path="/puzzle" element={<Puzzle/>}/> 
            <Route path= "/sensorymode" element={<SensoryMode/>}/>
          </Routes>{" "}
        </main>
        <Footer />
      </BrowserRouter>
    </div>
    </AudioProvider>
  );
}

export default App;
