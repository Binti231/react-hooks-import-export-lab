import React from "react";
import Home from "./Home";       // ✅ default import
import About from "./About";     // ✅ default import
import NavBar from "./NavBar";   // ✅ default import

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;

