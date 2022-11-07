import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./pages/Header";

const domContainer = document.getElementById("app");
const root = createRoot(domContainer);

root.render(<Header/>);