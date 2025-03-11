import React from "react";
import Articles from "./components/Articles";

function App() {
  return (
    <div className="App">
      <h1>Bienvenue sur mon site</h1>
      <Articles /> {/* On affiche les articles ici */}
    </div>
  );
}

export default App;
