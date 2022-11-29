import { authBreakfast } from "../api/authBreakfast"
import { useState, useEffect } from "react";

export default function Menu() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        authBreakfast().then(setProducts)
     }, [])

    return (
        <div className="container">
            <h1>Breakfast</h1>
            {products.map(product => <p>{product.title}</p>)}
            
        </div>
    )
}