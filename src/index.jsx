import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SignUp } from "./pages/SignUp";


import { HomePage } from "./pages/HomePage";

const domContainer = document.getElementById("app");
const root = createRoot(domContainer);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path=":sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

root.render(<App />);
