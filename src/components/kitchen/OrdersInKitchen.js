import { useState, useEffect } from "react";
import { authOrdersInKitchen } from "../../api/authOrdersInKitchen"
import './orderInKitchen.css'

export default function OrdersInKitchen() {

    const [orderConfirmed, setOrdersConfirmed] = useState([])
    const [checked, setChecked] = useState(false)
   
    useEffect(() => {
        authOrdersInKitchen().then(setOrdersConfirmed)
    }, [])

    const handleChecked = (input, order) => {

        setOrdersConfirmed(
        orderConfirmed.map((element) => {
            if (element.id === order.id) {
               return {...element, checked: true}
            }
            return element
        })
        )

        

}

    // const commandBorder = (order) => { 
    //     if (order.id === '2') {
    //     return 'command_yellow'
    //     }
    //     return 'command_green'
    // }

    return (
        <section className="commandContainer">
                 
            {orderConfirmed.map((order, index) => (
                <div key={order.id} className={`command ${ order.checked ? 'command_yellow' : 'command'}`}>
                    {console.log("order",index, order.id)}
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
                                    key={index}
                                    type={'checkbox'}
                                    className="check"
                                    value={checked}
                                    onClick={() => handleChecked(checked, order)}
                                ></input>
                                {console.log("input", index)}
                            </div> 
                        ))}
                    </div>
                </div>   


            ))}

       </section>
    )
}