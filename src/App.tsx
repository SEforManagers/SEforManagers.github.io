import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components/components";
import Home from "./pages/Home";

function App() {
  return (
      <div className="App">
        <Header />
        <div className={"App-content"}>
          <Routes>
            <Route path="/" element={
                <Home />
            } />
            <Route path="*" element={
                <p>Not found</p>
            } />
          </Routes>
        </div>
        <Footer />
      </div>
  );
}

export default App;