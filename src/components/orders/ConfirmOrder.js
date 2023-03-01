import React, { useEffect } from "react";
import "./confirm-ord.css";
import downIcon from "../../images/expand_circle_down.png";
import upIcon from "../../images/expand_circle_up.png";
import deleteIcon from "../../images/delete.png";
import { useState } from "react";
import Modal from "../Modal";
import postOrders from "../../api/postOrders";

const ConfirmOrder = ({
  dishSelected,
  setdishSelected,
  addDishQuantity,
  reduceDishQuantity,
  deleteDish,
}) => {

  const [stateModal, setStateModal] = useState(false);
  const [clientName, setClientName] = useState("");
  const activeUser = localStorage.getItem("email");
  
   const handleModal = (state) => {
    if (clientName === "" ) {
      alert("falta el nombre del cliente")
    } else {
      setStateModal(state);
    }
  };

  const sumAllDishes = () => {
    const arraySum = [];
    dishSelected.map((dish) => {
     return arraySum.push(dish.item.price * dish.qty);
    });
    const sumInArray = arraySum.reduce((accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return <span> $ {sumInArray}</span>
  };

  const addClientName = ( ) => {
    const date = new Date().toLocaleString()
    console.log("dishSelected", dishSelected)
    const newData = { products: dishSelected, client: clientName, dateEntry: date, userId: activeUser, status: "pending" }
    return newData;
  }

    const confirmOrder = () => { 
    postOrders(addClientName())
    setStateModal(false)
    setClientName("")
    setdishSelected([])
  }
  

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
            value={clientName}
            placeholder="Client-name"
            className="client-name"
            onChange={(e) => setClientName(e.target.value)}
          />
        </div>
      </div>

      <div className="dishesContainer">
        {dishSelected.map((product, index) => (
          <div key={index} className="resume">
            <div className="items">
              <p>{product.item.name}</p>
              <span>${product.item.price}</span>
            </div>

            <div className="add-delete-itm">
              <img
                src={downIcon}
                alt="down-icon"
                onClick={() => reduceDishQuantity(product.item)}
              />
              <p>{product.qty}</p>
              <img
                src={upIcon}
                alt="up-icon"
                onClick={() => addDishQuantity(product.item)}
              />
              <img src={deleteIcon} alt="delete-icon" onClick={()=>deleteDish(product.item)}/>
            </div>
          </div>
        ))}
      </div>
      <div className="total">
        <p>
          Total: {sumAllDishes()}
        </p>
        <button className="done-btn" onClick={() => handleModal(true)}>
          DONE
        </button>
      </div>

      <Modal stateModal={stateModal} dishSelected={dishSelected}>
        <h1> Are you sure you want to submit this order? </h1>
        <div className="buttonContainer">
          <button className="yesButton" onClick={() => confirmOrder()}>YES</button>
          <button className="closeButton" onClick={() => handleModal(false)}>
            {" "}
            CLOSE{" "}
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default ConfirmOrder;
