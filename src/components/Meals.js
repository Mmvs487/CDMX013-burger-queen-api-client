import { authMeals } from "../api/authMeals"
import { useState, useEffect } from "react";

export default function Meals() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        authMeals().then(setProducts)
    }, [])

    return (
    
        <div className="breakfastDishes">
                {products.map(product => (
                    <div className="breakfastDish">
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