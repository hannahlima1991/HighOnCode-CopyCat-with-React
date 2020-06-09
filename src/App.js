import React from "react";
import Cards from "./components/Cards";
import Content from "./components/Content";
import Headers from "./components/Headers";
import "./App.css";

function App() {
  return (
    <div>
      <Headers />
      <Content />
      <Cards />
    </div>
  );
}

export default App;
