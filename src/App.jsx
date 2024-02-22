import { useState } from "react";
import "./App.css";
import Navbar from "../src/components/molecules/Navbar";
import AboutUs from "./components/molecules/AboutUs";
import Header from "./components/molecules/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar> </Navbar>
      <Header></Header>
      <AboutUs></AboutUs>

      
    </>
  );
}

export default App;
