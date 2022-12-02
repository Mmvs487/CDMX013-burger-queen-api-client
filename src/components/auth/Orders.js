import ConfirmOrder from "../ConfirmOrder";
import { Navbar } from "../Navbar";
import Menu from '../Menu.js'
import "./orders.css"
import { useEffect, useState } from "react";
import { authBreakfast } from "../../api/authBreakfast";

export default function Orders({ handleSaveUser }) {
    const activeUser = localStorage.getItem("email");
    console.log(activeUser)

    const [products, setProducts] = useState([]);
    console.log("productos", products)

    useEffect(() => {
       authBreakfast().then(setProducts) 
    },[])

    // const [info, setInfo] = useState([]);

    // const addDish = (product) => {
    //         setInfo((state) => {
    //         return [...state, product]
    //     })
    //  }

  
    return (
        <div className="ordersContainer">
            <header className="navbar">
            <Navbar view='order' handleSaveUser={handleSaveUser} />
            </header>
            <main className="main">
                <Menu  products={products}  />
                <ConfirmOrder />
            </main>
        </div>
    )
    
}