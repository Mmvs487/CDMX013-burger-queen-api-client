import { useState, useEffect } from "react";
import { authOrdersInKitchen } from "../../api/authOrdersInKitchen"
import './orderInKitchen.css'


export default function OrdersInKitchen() {

    const [orderConfirmed, setOrdersConfirmed] = useState([])
  

    useEffect(() => {
        authOrdersInKitchen().then(setOrdersConfirmed)
        console.log("axios", orderConfirmed)
    }, [])

    return (
        <section className="commandContainer">
                 
            {orderConfirmed.map((order, index) => (
                <div key={index} className="command">
                    <div className="headerOrder">
                        <p>{order.dateEntry.substring(12, 17)}</p>
                        <p>{order.client}</p>
                    </div>
                    <div className="productsContainer">
                        {order.products.map((product, index) => (
                            <div className="itemDish">
                                <b>{product.qty}</b>
                                <p>{product.item.name}</p>
                                <input
                                    type={'checkbox'}
                                    className="check"
                                ></input>
                            </div> 
                        ))}
                    </div>
                </div>   


            ))}

       </section>
    )
}