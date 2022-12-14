import Login from './components/no-auth/Login.js'
import Orders from './components/auth/Orders.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Kitchen from './components/auth/Kitchen.js';
import Admin from './components/auth/Admin.js';
import { useState } from 'react'
import { ProtectedRoute } from './components/ProtectedRoute'
import CompletedOrders from './components/auth/CompletedOrders.js';
import { Navbar } from './components/Navbar.js';

function App() {
  const [rol, setRol] = useState(null)
  const handleSaveUser = (userRole) => {
    setRol(userRole)
  }
  return (
    <BrowserRouter>
           <Routes>
        <Route path="/" element={<Login handleSaveUser={handleSaveUser} rol={rol} />} />
        <Route path="/orders" element={
          <ProtectedRoute rol={rol}>
            <Orders handleSaveUser={handleSaveUser} />
          </ProtectedRoute>
        } />
        <Route path="/completed-orders" element={
          <ProtectedRoute rol={rol}>
            <CompletedOrders handleSaveUser={handleSaveUser} />
          </ProtectedRoute>
        } />
        <Route path="/kitchen" element={
          <ProtectedRoute rol={rol}>
          <Kitchen />
          </ProtectedRoute>
        } />
        <Route path="/Admin" element={
          <ProtectedRoute rol={rol}>
            <Admin handleSaveUser={handleSaveUser} />
          </ProtectedRoute>
        } /> 
     </Routes>
    </BrowserRouter>
  );
}

export default App;
