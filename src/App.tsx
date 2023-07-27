import React, { useMemo } from "react";
import HomeScreen from "./features/home/Home";
import "./App.css";

function App() {
  const homeScreen = useMemo(() => <HomeScreen />, []);
  console.log("App Call");
  return <div className="App">{homeScreen}</div>;
}

export default App;
