import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
function App() {
  return (
    <div className="App">
      <Header />
      <ProductForm />
    </div>
  );
}

export default App;
