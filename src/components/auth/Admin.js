import { Navbar } from "../Navbar";
import ModalAdd from "../ModalAdd";
import {getUsers, postUsers } from "../../api/getUsers";
import logoAdmin from "../../images/tittle-admin.png";
import employeesIcon from "../../images/employees-icon.png";
import productsIcon from "../../images/products-icon.png";
import addIcon from "../../images/add-icon.png";
import findIcon from "../../images/find-icon.png";
import editIcon from "../../images/edit-icon.png";
import deleteIcon from "../../images/delete-icon.png";
import "./admin.css";
import { useEffect, useState } from "react";

export default function Admin({ handleSaveUser }) {
  const activeUser = localStorage.getItem("email");
  const [allUsers, setAllUser] = useState([]);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [stateModal, setStateModal] = useState(false);

  const handleModal = (state) => {
    setStateModal(state);
  };
  
  const addUser = () => {
    const newUser = {user: email, password: password, role: role, name: name};
    return newUser
  }

  console.log(allUsers)

  const sendNewUser = () => {
    //setAllUser([...allUsers, addUser()])
    postUsers(addUser())
    setStateModal(false)
  }

  useEffect(() => {
    getUsers().then(setAllUser);
  }, []);




  return (
    <div>
      <header className="navbar">
        <Navbar handleSaveUser={handleSaveUser}>
          <img className="title" src={logoAdmin} alt="page-title" />
          <div className="dynamicIcons">
            <p className="user-email">{activeUser}</p>
            <img
              className="newOrderIcon"
              src={employeesIcon}
              alt="create-order"
            />
            <img
              className="completedOrderIcon"
              src={productsIcon}
              alt="completed-orders"
            />
          </div>
        </Navbar>
      </header>
      <main className="icons-container">
        <img src={addIcon} alt="add-icon" onClick={() => handleModal(true)} />
        <div id="find-container">
          <img src={findIcon} alt="find-icon" />
        </div>
      </main>
      <section className="admin-section">
        <ul className="table" id="header-table">
          <li>ID</li>
          <li>NAME</li>
          <li>E-MAIL</li>
          <li>ROLE</li>
          <li>EDIT</li>
          <li>DELETE</li>
        </ul>
        {allUsers.map((data, index) => (
          <ul className="table" id="body-table" key={index}>
            <li>{data.id}</li>
            <li>{data.name}</li>
            <li>{data.user}</li>
            <li>{data.role}</li>
            <li>
              <img src={editIcon} alt="edit-icon" />
            </li>
            <li>
              <img src={deleteIcon} alt="delete-icon" />
            </li>
          </ul>
        ))}

        <ModalAdd stateModal={stateModal}>
          <div className="tittle-modal">
            <img src={addIcon} alt="add-icon" />
            <h2>Add employee</h2>
          </div>
          <div className="body-modal">
            <p>
              <label>ID: #001</label>
            </p>
            <p>
              <label>NAME:</label>
              <input id="username" type="text" name="username" onChange={(e) => setName((e.target.value))} />
            </p>
            <p>
              <label>E-MAIL:</label>
              <input id="mail" type="email" name="usermail" onChange={(e) => setEmail((e.target.value))}/>
            </p>
            <p>
              <label>PASSWORD:</label>
              <input type="password" id="pwd" name="password" onChange={(e) => setPassword((e.target.value))}/>
            </p>

            <p>
              <label>
                <span>ROLE</span>
              </label>
              <select id="role" name="userrole" onChange={(e) => setRole((e.target.value))}>
                <option value="waiter">WAITER</option>
                <option value="kitchen">KITCHEN</option>
                <option value="admin">ADMIN</option>
              </select>
            </p>
          </div>
          <div className="buttonContainer">
            <button className="yesButton" onClick={() => sendNewUser()}>OK</button>
            <button className="closeButton" onClick={() => handleModal(false)}>
              {" "}
              CLOSE{" "}
            </button>
          </div>
        </ModalAdd>
      </section>
    </div>
  );
}
