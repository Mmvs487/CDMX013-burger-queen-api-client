import ConfirmOrder from "../orders/ConfirmOrder";
import { Navbar } from "../Navbar";
import Menu from '../orders/Menu.js'
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
   

//Add dish in ticket
    const addDishQuantity = (product) => {
        setdishSelected((state) => {
            let element = state.filter(each => each.item.id === product.id)
            let oldElments = state.filter(each => each.item.id !== product.id)
            if (element.length === 0) {
                console.log("nuevo elemento")
                return [...state, { qty: 1, item: product }]
            } else if (element.length !== 0) {
                console.log("elemento repetido")
                //Accessing to object
                const newElement = { ...element[0] }
                // console.log("newElement", newElement)
                newElement.qty = newElement.qty+1
                return [...oldElments, newElement]
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
            let oldElments = state.filter(each => each.item.id !== product.id);
            return [...oldElments];
        })
    }

 
    return (
        <div className="ordersContainer">
            <header className="navbar">
            <Navbar view='order' handleSaveUser={handleSaveUser}>
                <img className="title" src={createOrderTitle} alt='page-title'/>
                <div className="dynamicIcons">
                    <p className="user-email">{activeUser}</p>
                    <img className="newOrderIcon" src={newOrderIcon} alt='create-order'/>
                    <img className="completedOrderIcon" src={completedOrdersIcon} alt='completed-orders' onClick={completedOrders}/>
                </div>
            </Navbar>
            </header>
            <main className="main">
                <Menu allDishes={allDishes} addDishQuantity={addDishQuantity} />
                <ConfirmOrder dishSelected={dishSelected} addDishQuantity={addDishQuantity} reduceDishQuantity={reduceDishQuantity} deleteDish={deleteDish} setdishSelected={setdishSelected } />
            </main>
        </div>
    )
    
}