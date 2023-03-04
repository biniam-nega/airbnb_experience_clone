import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

import "./style.css";
import "./css/all.min.css";


export default function App() {
    return (
        <div className="container">
            <Navbar />
            <div className="body">
                <Hero />
                <section className="section">
                    { data.map((item) => {
                        return <Card 
                            key={ item.id }
                            { ...item }
                        />
                    }) }
                </section>
            </div>
        </div>
    );
}
