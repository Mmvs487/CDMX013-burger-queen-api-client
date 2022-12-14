import OrdersInKitchen from "../OrdersInKitchen"
import { Navbar } from "../Navbar"
import pendingOrder from '../../images/pending-order.png'
import inProcess from '../../images/in-process.png'
import complete from '../../images/complete.png'
import './kitchen.css'
import '../navbar.css'

export default function Kitchen({handleSaveUser}) {
    
    const activeUser = localStorage.getItem("email");
    
    return (
        <div>
        
            <header className="navbar">
                <Navbar handleSaveUser={handleSaveUser} >
                    <img className="title" src={pendingOrder} alt='title-kitchen' />
                    <div className="dynamicIcons">
                        <p className="user-email">{activeUser}</p>
                        <img className="newOrderIcon" src={inProcess} alt='inProcess-icon' />
                        <img className="completedOrderIcon" src={complete} alt='complete-icon'  />
                    </div>
               </Navbar>
            </header>
                
            <main >      
                <OrdersInKitchen/>
            </main>            
    </div>
    )
}         