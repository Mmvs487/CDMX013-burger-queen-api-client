import ConfirmOrder from "../ConfirmOrder";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar";
import Menu from '../Menu.js'
import "./orders.css"

export default function Orders() {
    const activeUser = localStorage.getItem("email");
    console.log(activeUser)
    const navigate = useNavigate()
    if (!activeUser) {
        navigate('/')
    } else {
        navigate('/orders')
    }
    return (
        <div className="ordersContainer">
            <header className="navbar">
            <Navbar view='order'/>
            </header>
            <main className="main">
            <Menu />
            <ConfirmOrder />
            </main>
        </div>
    )
    
}