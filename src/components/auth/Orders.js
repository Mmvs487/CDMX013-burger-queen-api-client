import ConfirmOrder from "../ConfirmOrder";
import { Navbar } from "../Navbar";
import Menu from '../Menu.js'
import "./orders.css"
import { useEffect, useState } from "react";
import { authBreakfast } from "../../api/authBreakfast";

export default function Orders({ handleSaveUser }) {

    const activeUser = localStorage.getItem("email");
    const [allDishes, setallDishes] = useState([]);
    const [dishSelected, setdishSelected] = useState([]);
   
    useEffect(() => {
        authBreakfast().then(setallDishes) 
    },[])
   
 
    const addDishQuantity = (product) => {
        setdishSelected((state) => {
            let element = state.filter(each => each.item.id === product.id)
            let oldElments = state.filter(each => each.item.id !== product.id)
            if (element.length === 0) {
                console.warn('el elemento es nuevo');
                return [...state, { qty: 1, item: product }]
            } else if (element.length !== 0) {
                const newElement = {...element[0]}
                newElement.qty = newElement.qty+1
                return [...oldElments, newElement  ]
            }        
        })
    }    

 
    return (
        <div className="ordersContainer">
            <header className="navbar">
            <Navbar view='order' handleSaveUser={handleSaveUser} />
            </header>
            <main className="main">
                <Menu allDishes={allDishes} addDishQuanty={addDishQuantity} />
                <ConfirmOrder dishSelected={dishSelected } />
            </main>
        </div>
    )
    
}