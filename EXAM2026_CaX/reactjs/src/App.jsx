import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import ProductTable from "./components/ProductTable";
import ProductRow from "./components/ProductRow";
function App() {
  return (
    <div className="App">
      <Header />
      <ProductForm />
      <ProductTable />
      <ProductRow />
    </div>
  );
}

export default App;
