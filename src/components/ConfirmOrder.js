import React, { useEffect } from "react";
import "./confirm-ord.css";
import downIcon from '../images/expand_circle_down.png'
import upIcon from '../images/expand_circle_up.png'
import deleteIcon from '../images/delete.png'
import { useState } from "react";

  
const ConfirmOrder = ({ dishSelected }) => {

  //Pasamos el valor inicial = 0
  const [sumElement, setSumElement] = useState(1);
  const [total, setTotal] = useState([]);

  // const addElement = () =>{
  //   setSumElement(sumElement + 1);
  // }

  // const subtractElement =() =>{
  //   setSumElement(sumElement - 1);
  // }

  // const deleteElement =()=>{
  //   setTotal(0);
  // }

 const totalAccount = () => { 
  total.push(sumElement)
  total.reduce(
    (acc, quantity) => acc + quantity,
    0,
   ) 
  }; 
  
 
   return (
    <section className="order-list">

      <div className="header-ord-list">
        <div className="title-ord-list">
          <p>ORDER LIST</p>
          <p>#001</p>
        </div>
        <div className="data-client">
          <p>CLIENT NAME</p>
          <input
            type="text"
            name="client-name"
            placeholder="Client name"
            className="client-name"
          />
        </div>
      </div>

      <div className="dishesContainer">
         
         {dishSelected&&dishSelected.map((product,index) => (
             <div key={index} className="resume">
              <div className="items">
               <p>{product.item.name}</p>
               <span>${product.item.price}</span>
              </div>

                <div className="add-delete-itm">
               <img src={downIcon} alt='down-icon' />
                <p>{product.qty}</p>
               <img src={upIcon} alt="up-icon" />
                <img src={deleteIcon} alt="delete-icon" />
            </div>
             
             </div>
           ))
           }
          
      </div>
    
      <div className="total">
        <p>Total: <span>$ {(55 * sumElement)}</span></p>
        <button className="done-btn">DONE</button>
      </div>
    </section>
  );
};



export default ConfirmOrder;
