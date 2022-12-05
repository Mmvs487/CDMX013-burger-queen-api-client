import { useState, useEffect } from "react";
import './menu.css'
import menuIcon from "../images/restaurant.png"

export default function Menu({ allDishes, addDishQuantity }) {
  
    const [buttonclicked, setButtonClicked] = useState(false);
    const [dishesInUse, setData] = useState([])
    const breakfastDishes = allDishes.filter((item) => item.type === "breakfast")
    const mealsDishes = allDishes.filter((item) => item.type === "meal")

    const handleButtonClick = (state) => {
          setButtonClicked(state)
    }
    
    useEffect(() => {   
        if (buttonclicked === true) {
            setData(mealsDishes)
        } else {
            setData(breakfastDishes)
        }
    }, [allDishes,buttonclicked])
    
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
                {dishesInUse.map((product,index) => (
                    <div key={index} className="breakfastDish" onClick={() => addDishQuantity(product)}>
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