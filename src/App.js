import React from "react";
import './index.css';
import Testimonials from "./components/Testimonials";
import Configurator from "./components/Configurator";
import HomePage from "./components/HomePage";
import data from "./data/app.json";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path={data.menu.items[0].route} element={<Testimonials />} />
                <Route path={data.menu.items[1].route} element={<Configurator />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;