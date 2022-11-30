import { authBreakfast } from "../api/authBreakfast"
import { useState, useEffect } from "react";
import './menu.css'

export default function Menu() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        authBreakfast().then(setProducts)
     }, [])

    return (
        <section className="productsContainer">
            <div className="productsHeader">
                <p>Breakfast</p>
                <p>Meals</p>
            </div>
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
        </section>
    )
}