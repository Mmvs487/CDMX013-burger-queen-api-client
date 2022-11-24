import Login from './components/no-auth/Login.js'
import Orders from './components/auth/Orders.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Kitchen from './components/auth/Kitchen.js';
import Admin from './components/auth/Admin.js';
import { useState } from 'react'
import { redirect } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null)
  const handleSaveUser = (oneUser) => {
    setUser(oneUser)
  }
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Login handleSaveUser={handleSaveUser} user={user}  />}/>
      <Route path ="/orders" element={<Orders/>}/>
      <Route path ="/Kitchen" element={<Kitchen/>}/>
      <Route path="/Admin" element={<Admin/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
