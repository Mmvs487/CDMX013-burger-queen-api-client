import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./navbar.css"
import createOrderTitle from "../images/create-order-text.png"
import logoutButton from "../images/logout.png"
import newOrderIcon from "../images/new-order-icon.png"
import completedOrdersIcon from "../images/completed-orders-icon.png"

export function Navbar() {
    const navigate = useNavigate();
    /* const newOrders = () =>{
        navigate('/orders');
      } */
    const completedOrders = () =>{
        navigate('/completed-orders');
    }
    return (
    <nav className="nav">
        <div className="defaults">
        <img className="log-out" src={logoutButton} alt="logout"/>
        <img className="title" src={createOrderTitle} alt='page-title'/>
        </div>
        <ul>
        <p className="user-email">{localStorage.getItem("email")}</p>
            <li>
            <img className="dinamicIcons" src={newOrderIcon} alt='create-order'/>
            </li>
            <li>
            <img className="dinamicIcons" src={completedOrdersIcon} alt='completed-orders' onClick={completedOrders}/>
            </li>
        </ul>
    </nav>
    )
}