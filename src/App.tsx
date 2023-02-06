import React from "react";
import "./App.css";
import "./components/Card/Card.css";
import Card from "./components/Card/Card";
import gentlemanData from "./gentleman.data";

function App() {
  return (
    <div className="App">
      {gentlemanData.map((gentleman) => (
        <Card gentleman={gentleman} />
      ))}
    </div>
  );
}

export default App;
