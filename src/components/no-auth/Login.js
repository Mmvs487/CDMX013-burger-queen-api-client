import logo from "../../images/logo-carinito.png";
import "./login.css";
import { useEffect, useState } from 'react';
import authUsers from '../../api/authUsers.js'
import { useNavigate } from 'react-router-dom'

export default function Login({ handleSaveUser, rol }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null)

  const navigate = useNavigate();
  console.log("rol", rol);
  
  useEffect(() => {
     if (rol === 'waiter') {
      navigate('/orders')
    } else if (rol === 'kitchen') {
      navigate('/kitchen')
    } else if (rol === 'admin') {
      navigate('/admin')
    } 
  })

    const handlePrintMessage = (message) => {
      setMessage(message)
      setTimeout(() => {
        setMessage(null)
      }, "5000")
  }
  
  const handleSubmit = () => {
    authUsers(email, password, handlePrintMessage).then(role => handleSaveUser(...role))
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
            <div className="messageContainer">{message && <p>{message}</p>}</div>
            <button className="login-button" onClick={handleSubmit}>LOG IN</button>
          </div>
        </div>
      </div>
    )
  };