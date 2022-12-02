import { useState, useEffect } from "react";
import './menu.css'
import menuIcon from "../images/restaurant.png"

export default function Menu({ products }) {
  
    const [buttonclicked, setButtonClicked] = useState(false);
    const [data, setData] = useState([])

    const handleButtonClick = (state) => {
          setButtonClicked(state)
    }
    
    const breakfast = products.filter((item) => item.type === "breakfast")

    const meals = products.filter((item) => item.type === "meal")

    useEffect(() => { 
        if (buttonclicked === true) {
            setData(meals)
        } else {
           setData(breakfast) 
        }
    }, [products, buttonclicked])

    return (
        <section className="productsContainer">
            <div className="productsHeader">
                <div>
                    <img src={menuIcon} alt='menu-icon'></img>
                </div>
                    <p onClick={() => handleButtonClick(false)}>Breakfast</p>
                    <p onClick={() => handleButtonClick(true)}>Meals</p>
            </div>
            <div className="breakfastDishes">
                {data.map(product => (
                    <div className="breakfastDish" >
                        <img src={product.image} alt='food-icon'></img>
                        <div className="containerDish">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                        </div>
                        <p>${product.price}</p>
                    </div>
                ))
                }
            </div>          
            </section>
        )
}