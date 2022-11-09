import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SignUp } from "./pages/SignUp";
import{ LoginPage} from"./pages/loginPage";
import { HomePage } from "./pages/HomePage";
import { Profile } from "./pages/profile"

const domContainer = document.getElementById("app");
const root = createRoot(domContainer);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="profile" element={<Profile />}>
          <Route path={":username"} element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

root.render(<App />);
