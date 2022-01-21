import React from "react";
import '../index.css';
import data from "../data/app.json";
import {
    Link
} from "react-router-dom"


function HomePage() {
    return (
        <div className='Homepage'>
            <div class="Rectangle-top"></div>
            <div class="Rectangle">
                <img src={require("../img/bellotero.png")} className="bellotero" alt="" />

                <span className="Home Text-Style-2">
                    <Link className="Link" to={data.menu.items[0].route}>{data.menu.items[0].text}</Link>
                </span>
                <span class="Solutions Text-Style-2">
                    <Link className="Link" to={data.menu.items[1].route}>{data.menu.items[1].text}</Link>
                </span>
                <span class="Stories Text-Style-2">
                    <Link className="Link" to={data.menu.items[2].route}>{data.menu.items[2].text}</Link>
                </span>
                <span class="Partners Text-Style-2">
                    <Link className="Link" to={data.menu.items[3].route}>{data.menu.items[3].text}</Link>
                </span>
            </div>
        </div>
    )
}

export default HomePage;