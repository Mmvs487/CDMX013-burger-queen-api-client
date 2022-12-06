import React, { useEffect } from "react";
import "./confirm-ord.css";
import downIcon from '../images/expand_circle_down.png'
import upIcon from '../images/expand_circle_up.png'
import deleteIcon from '../images/delete.png'
import { useState } from "react";
import Modal from "./Modal";

  
const ConfirmOrder = ({ dishSelected, addDishQuantity, reduceDishQuantity }) => {

  //Pasamos el valor inicial = 0
  const [sumElement, setSumElement] = useState(1);
  const [total, setTotal] = useState([]);
  const [stateModal, setStateModal] = useState(false)

  const handleModal = (state) => {
  setStateModal(state )
  }

  // const deleteElement =()=>{
  //   setTotal(0);
  // }

  // const totalAccount = (dishSelected) => { 
  // dishSelected.item.price.reduce(
  //   (acc, quantity) => acc + quantity, 0,
  //     )
  // }; 
  

 
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
         
         {dishSelected.map((product,index) => (
             <div key={index} className="resume">
              <div className="items">
               <p>{product.item.name}</p>
               <span>${product.item.price}</span>
              </div>

                <div className="add-delete-itm">
               <img src={downIcon} alt='down-icon' onClick={() => reduceDishQuantity(product.item)} />
                <p>{product.qty}</p>
               <img src={upIcon} alt="up-icon" onClick={() => addDishQuantity(product.item)} />
                <img src={deleteIcon} alt="delete-icon" />
            </div>
             
             </div>
           ))
           }
          
      </div>
          <div className="total">
         <p>Total: <span>{ }</span></p>
        <button className="done-btn" onClick={() => handleModal(true)}>DONE</button>
       </div>
       <Modal stateModal={stateModal}>
         <h1> Are you sure you want to submit this order? </h1>
         <div className="buttonContainer">
           <button className="yesButton">YES</button>
           <button className="closeButton" onClick={() => handleModal(false)}> CLOSE </button>
         </div>
       </Modal>
    </section>
  );
};



export default ConfirmOrder;
