import '../index.css';
import configuratorData from '../data/configuratorData';
import data from '../data/page2.json';
import appData from '../data/app.json';
import {
    Link
} from "react-router-dom";


function Configurator() {
    return (
        <div className='Configurator'>
            <div class="Rectangle-top"></div>
            <div class="Rectangle">
                <img src={require("../img/bellotero.png")} className="bellotero" alt="" />
                <span className="Home Text-Style-2">
                    <Link className='Link' to="/">Home</Link>
                </span>
                <span class="Solutions Text-Style-2">
                    Solutions
                </span>
                <span class="Stories Text-Style-2">
                    {appData.menu.items[2].text}
                </span>
                <span class="Partners Text-Style-2">
                    Partners
                </span>
                <span class="About Text-Style-2">
                    {appData.menu.items[3].text}
                </span>
                <span class="Blog Text-Style-2">
                    Blog
                </span>
            </div>

            <div class="Rectangle-firts-title">
                <span class="Save-more-with">
                    {data.calculator.title.split("").slice(0, 15).join("")}
                </span>
            </div>
            <div class="Rectangle-second-title">
                <span class="Belloteroio">
                    {data.calculator.title.split("").slice(15, data.calculator.title.length).join("")}
                </span>
            </div>
            <div className='configurator-text'>
                <span class="With-Belloteroio-yo Text-Style-3">
                    {data.calculator.description}
                </span>
            </div>

            <div class="Monthly-ingredient-rectangle">
                <span class="Monthly-ingredient-s">
                    Monthly <br />
                    ingredient spending
                </span>
            </div>

            <div>
                <div class="Rectangle-white-1"></div>
                <div class="Rectangle-oval-1"></div>
                <div class="Oval-1"></div>
            </div>

            <div class="Rectangle-white-1-number">
                <span class="span-dollar-sing">
                    $
                </span>
                <span class="span-number-monthly-ingredient-spending">
                    {configuratorData[0].monthlyIngredientSpending}
                </span>
            </div>

            <div class="Full-time-employees-rectangle">
                <span class="Full-time-employees">
                    Full-time employees that process invoices
                </span>
            </div>

            <div>
                <div class="Rectangle-white-2"></div>
                <div class="Rectangle-oval-2"></div>
                <div class="Oval-2"></div>
            </div>

            <div class="Rectangle-white-2-number">
                <span class="span-number-full-time-employees">
                    {configuratorData[0].fullTimeEmployees}
                </span>
            </div>

            <div>
                <span class="span-dollar-blue-sign-1">
                    $
                </span>
                <span class="span-number-estimated-cost-food-saving">
                    {configuratorData[0].estimatedCostSaving}
                </span>
                <span class="Estimated-cost-food">
                    Estimated cost food savings
                </span>
            </div>

            <div>
                <span class="span-dollar-blue-sign-2">
                    $
                </span>
                <span class="span-number-estimated-anual-saving">
                    {configuratorData[0].estimatedAnnualSavings}
                </span>
                <span class="Your-estimated-annual">
                    Your estimated annual savings
                </span>
            </div>
        </div>
    )
}


export default Configurator