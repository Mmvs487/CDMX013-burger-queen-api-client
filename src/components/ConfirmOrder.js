import React from "react";
import "./confirm-ord.css";
import downIcon from '../images/expand_circle_down.png'
import upIcon from '../images/expand_circle_up.png'
import deleteIcon from '../images/delete.png'
import { useState } from "react";

const ConfirmOrder = () => {

  //Pasamos el valor inicial = 0
  const [sumElement, setSumElement] = useState(0);

  const addElement = () =>{
    setSumElement(sumElement + 1);
  }

  const subtractElement =() =>{
    setSumElement(sumElement - 1);
  }

  const deleteElement =()=>{
    setSumElement(0);
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
            placeholder="Client name"
            className="client-name"
          />
        </div>
      </div>
      <div className="resume">
        <div className="items">
            <p>Pozole</p>
            <span>$190.00</span>
        </div>
        <div className="add-delete-itm">
            <img src={downIcon} alt='down-icon' onClick={subtractElement} />
            <p>{sumElement}</p>
            <img src={upIcon} alt="up-icon" onClick={addElement}/>
            <img src={deleteIcon} alt="delete-icon" onClick={deleteElement}/>
        </div>
      </div>
      <div className="total">
        <p>Total: <span>$190.00</span></p>
        <button className="done-btn">DONE</button>
      </div>
    </section>
  );
};



export default ConfirmOrder;
