import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./pages/Header";
import {HeroSection} from "./pages/HeroSection"

const domContainer = document.getElementById("app");
const root = createRoot(domContainer);

function App(){
    return(
        <>
        <Header/>
        <HeroSection/>
        </>
    )
}


root.render(<App/>);