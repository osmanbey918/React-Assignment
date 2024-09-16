import React from "react"

import Header from './components/header/Header'
import './App.css'
import Hero from "./components/hero/Hero"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"


export default function App() {
    return (
        <div>
            <Header/>
            <Hero/>
            <Main />
            <Footer />
        </div>
    )
}

