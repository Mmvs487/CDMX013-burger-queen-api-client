import { Navbar } from "../Navbar"
import { useNavigate } from "react-router-dom"
import "./completedOrders.css"
import completedOrdersTitle from "../../images/completed-orders-title.png"
import newOrderIcon from "../../images/new-order-icon.png"
import completedOrdersIcon from "../../images/completed-orders-icon.png"

export default function CompletedOrders({handleSaveUser}){
    
    const activeUser = localStorage.getItem("email");
    const navigate = useNavigate();
    const createNewOrder = () =>{
        navigate('/orders')
    }

    return(
    <div className="ordersContainer">
            <header className="navbar">
            <Navbar view='order' handleSaveUser={handleSaveUser}>
                <img className="title" src={completedOrdersTitle} alt='page-title'/>
                <div className="dynamicIcons">
                    <p className="user-email">{activeUser}</p>
                    <img className="newOrderIcon" src={newOrderIcon} alt='create-order' onClick={createNewOrder}/>
                    <img className="completedOrderIcon" src={completedOrdersIcon} alt='completed-orders'/>
                </div>
            </Navbar>
            </header>
            <main className="main">
                <table className="table">
                    <tr className="headers">
                        <td>Order #</td>
                        <td>Client</td>
                        <td>Waiter</td>
                        <td>Status</td>
                    </tr>
                    <tr className="ordersList">
                        <td>001</td>
                        <td>Gordon Ramsey</td>
                        <td>luismirey@elcarinito.ok</td>
                        <td>Ready/delivered</td>
                    </tr>
                </table>
            </main>
        </div>
    )
}