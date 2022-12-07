import ConfirmOrder from "../ConfirmOrder";
import { Navbar } from "../Navbar";
import Menu from '../Menu.js'
import "./orders.css"
import { useEffect, useState } from "react";
import { authBreakfast } from "../../api/authBreakfast";
import { useNavigate } from "react-router-dom";
import createOrderTitle from "../../images/create-order-text.png"
import newOrderIcon from "../../images/new-order-icon.png"
import completedOrdersIcon from "../../images/completed-orders-icon.png"

export default function Orders({ handleSaveUser }) {

    const activeUser = localStorage.getItem("email");
    const navigate = useNavigate();
    const [allDishes, setallDishes] = useState([]);
    const [dishSelected, setdishSelected] = useState([]);
    const completedOrders = () =>{
        navigate('/completed-orders')
    }
   
    useEffect(() => {
        authBreakfast().then(setallDishes) 
    },[])
   


    const addDishQuantity = (product) => {
        setdishSelected((state) => {
            let element = state.filter(each => each.item.id === product.id)
            let oldElments = state.filter(each => each.item.id !== product.id)
            if (element.length === 0) {
                return [...state, { qty: 1, item: product }]
            } else if (element.length !== 0) {
                const newElement = { ...element[0] }
                newElement.qty = newElement.qty+1
                return [...oldElments, newElement  ]
            }        
        })
    }                                               

    const reduceDishQuantity = (product) => {
        setdishSelected((state) => {
            let element = state.filter(each => each.item.id === product.id)
            let oldElments = state.filter(each => each.item.id !== product.id)
            if (element.length === 1 && element[0].qty === 1 ) {
                return oldElments
            } else if (element.length !== 0 && element[0].qty > 1 ) {
                const newElement = { ...element[0] }
                newElement.qty = newElement.qty - 1
                return [...oldElments, newElement]
            }
        })
    }

    const deleteDish = (product) => {
        setdishSelected((state) => {
            let element = state.filter(each => each.item.id === product.id)
            let oldElments = state.filter(each => each.item.id !== product.id)
            const newElement = { ...element[0] }
            newElement.qty = newElement.qty - 1
            return [...oldElments]
        })
    }

 
    return (
        <div className="ordersContainer">
            <header className="navbar">
            <Navbar view='order' handleSaveUser={handleSaveUser}>
                <img className="title" src={createOrderTitle} alt='page-title'/>
                <div className="dynamicIcons">
                    <p className="user-email">{activeUser}</p>
                    <img className="dynamicIcons" src={newOrderIcon} alt='create-order'/>
                    <img className="dynamicIcons" src={completedOrdersIcon} alt='completed-orders' onClick={completedOrders}/>
                </div>
            </Navbar>
            </header>
            <main className="main">
                <Menu allDishes={allDishes} addDishQuantity={addDishQuantity} />
                <ConfirmOrder dishSelected={dishSelected} addDishQuantity={addDishQuantity} reduceDishQuantity={reduceDishQuantity } deleteDish = {deleteDish}/>
            </main>
        </div>
    )
    
}