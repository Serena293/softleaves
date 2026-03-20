import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MemoryGame from "./components/MemoryGame";
import Puzzle from "./components/Puzzle";

function App() {
  return (
    <div id="root">
      <BrowserRouter>
        <Navbar />
        <main>
          {" "}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/memorygame" element={<MemoryGame />} />
            <Route path="/puzzle" element={<Puzzle/>}/> 
          </Routes>{" "}
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
