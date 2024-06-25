import "./App.css";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import { useState, useRef } from "react";
import Routes from "./routes";

function App() {
  /*const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();

  const handleNavbarSearch = (term) => {
    console.log(containerRef.current);
    setSearchTerm(term);
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      <Events searchTerm={searchTerm} />
    </>
  );*/
  return <Routes />;
}

export default App;
