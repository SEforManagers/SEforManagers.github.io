import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components/components";
import Home from "./pages/Home";
import Legal from "./pages/Legal";

function App() {
  return (
      <div className="App">
          <Routes>
            <Route path="/" element={
                <>
                    <Header isHome />
                    <div className={"App-content"}>
                    <Home />
                    </div>
                </>
            } />
            <Route path="/legal" element={
                <>
                    <Header />
                    <div className={"App-content"}>
                    <Legal />
                    </div>
                </>
            } />
            <Route path="*" element={
                <>
                    <Header />
                    <div className={"App-content"}>
                        <h2>404 - Not Found</h2>
                    </div>
                </>
            } />
          </Routes>
        <Footer />
      </div>
  );
}

export default App;