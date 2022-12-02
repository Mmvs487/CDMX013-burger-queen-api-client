import { useState, useEffect } from "react";
import { authBreakfast } from "../api/authBreakfast"

export default function Breakfast() {
    const [products, setProducts] = useState([]);
    const [dishInfo, setDishInfo] = useState([]);

    useEffect(() => {
        authBreakfast().then(setProducts)
    }, [])

    const handleSelect = (title, price) => {
        setDishInfo([title, price])
    }
    console.log(dishInfo)
    
   
    return (
        
        <div className="breakfastDishes">
                    {products.map(product => (
                    <div className="breakfastDish" onClick={() => handleSelect(product.title, product.price)}>
                        <img src={product.avatar} alt='food-icon'></img>
                        <div className="containerDish">
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                        </div>
                        <p>${product.price}</p>
                    </div>
                ))
            }
         </div>
      

    )
}