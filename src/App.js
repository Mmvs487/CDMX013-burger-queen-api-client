import Login from './components/no-auth/Login.js'
import Orders from './components/auth/Orders.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Kitchen from './components/auth/Kitchen.js';
import Admin from './components/auth/Admin.js';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path ="/" element = {<Login/>}/>
      <Route path ="/Orders" element={<Orders/>}/>
      <Route path ="/Kitchen" element={<Kitchen/>}/>
      <Route path="/Admin" element={<Admin/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
