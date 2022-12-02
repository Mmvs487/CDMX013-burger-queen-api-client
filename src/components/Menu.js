import { useState } from "react";
import './menu.css'
import Meals from "./Meals";
import Breakfast from "./Breakfast";

export default function Menu() {
  
    const [buttonclicked, setButtonClicked] = useState(false);

    const handleButtonClick = (state) => {
        setButtonClicked(state)
    }

    
    return (
            <section className="productsContainer">
                <div className="productsHeader">
                    <p onClick={() => handleButtonClick(false)}>Breakfast</p>
                    <p onClick={() =>handleButtonClick(true)}>Meals</p>
                </div>
            {buttonclicked ? <Meals /> : <Breakfast/>}
            </section>
        )
}