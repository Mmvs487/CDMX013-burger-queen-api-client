import { useState, useEffect } from "react";
import { authBreakfast } from "../api/authBreakfast"

export default function Breakfast( ) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        authBreakfast().then(setProducts)
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