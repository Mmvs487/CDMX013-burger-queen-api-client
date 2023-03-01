import { useNavigate } from "react-router-dom"
import "./navbar.css"
import logoutButton from "../images/logout.png"

export function Navbar({ handleSaveUser, children }) {
    const navigate = useNavigate();

    const logOut = () => {
        handleSaveUser(null)
        localStorage.removeItem("email")
        navigate('/')
    }
    
    return (
    <nav>
        { handleSaveUser &&
        <div className="navbar">
        <div className="defaults">
        <img className="log-out" src={logoutButton} alt="logout" onClick={logOut}/>
        </div>
        {children}
        </div>
        }
    </nav>
    )
}