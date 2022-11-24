import logo from "../../images/logo-carinito.png";
import "./login.css";
import { useState } from 'react';
import authUsers from '../../api/AuthUsers.js'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null)
  const navigate = useNavigate();

  const resultPromise = authUsers();
  resultPromise.then(console.log)

  const redirect = () => {

    if (resultPromise === ['luismirey@elcarinito.ok']) {
      navigate('/orders')
    }
  }  


    const handlePrintMessage = (message) => {
      setMessage(message)
      // if (message === 'valid') {
      //   navigate('/orders')
      // }
      setTimeout(() => {
        setMessage(null)
      }, "5000")
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
            <button className="login-button" onClick={() => authUsers(email, password, handlePrintMessage)}>LOG IN</button>
          </div>
        </div>
      </div>
    )
  };