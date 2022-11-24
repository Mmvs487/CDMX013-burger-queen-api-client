import logo from "../../images/logo-carinito.png";
import "./login.css";
import { useEffect, useState } from 'react';
import authUsers from '../../api/AuthUsers.js'
import { useNavigate } from 'react-router-dom'
import { redirect } from "react-router-dom";

export default function Login({ handleSaveUser, user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null)
   const navigate = useNavigate();


  useEffect(() => {
    if (user) {
      navigate('/orders')
    }
  })

    const handlePrintMessage = (message) => {
      setMessage(message)
      setTimeout(() => {
        setMessage(null)
      }, "5000")
  }
  
  const handleSubmit = () => {
    authUsers(email, password, handlePrintMessage).then(eluser => handleSaveUser(eluser))
  }
  
    return (
      <div className="container">
        <img src={logo} alt="logo"></img>
        <div className="inputsContainer">
          <div className="emailContainer">
            <input
              type="text"
              name="email"
              placeholder="E-MAIL"
              className="inputLogin"
              onChange={(e) => setEmail((e.target.value))}
            />
            <input
              type="password"
              name="password"
              placeholder="PASSWORD"
              className="inputLogin"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>{message && <p>{message}</p>}</div>
            <button className="login-button" onClick={handleSubmit}>LOG IN</button>
          </div>
        </div>
      </div>
    )
  };