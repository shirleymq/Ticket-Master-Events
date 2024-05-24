import Navbar from "./components/Navbar";
import "./App.css";
import Events from "./components/Events";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} />
      <Events searchTerm={searchTerm} />
    </>
  );
}

export default App;
