import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./pages/Header";
import { HeroSection } from "./pages/HeroSection";
import { SignUp } from "./pages/SignUp";

const domContainer = document.getElementById("app");
const root = createRoot(domContainer);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path=":sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

root.render(<App />);
