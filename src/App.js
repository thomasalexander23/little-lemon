import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Reserve from './Pages/Reservation';
import Menu from './Pages/Menu';
import Order from './Pages/Order';
import { Route, Routes, useLocation} from 'react-router-dom';
import Login from './Pages/Login';
import Confirmation from './Components/Booking/Confirmation';
import { useEffect } from 'react';
function App() {
  const {pathname} =useLocation();
useEffect(() =>{
  window.scroll(0,0)
},[pathname]);
  return (
    <>
          <Routes>
            <Route index path="/Home" element={<Home/>}/>
            <Route index path="/little-lemon" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Menu" element={<Menu/>}/>
            <Route path="/Reservation" element={<Reserve/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Order" element={<Order/>}/>
            <Route path='/confirmation' element={<Confirmation/>}/>
          </Routes>

    </>
  );
}

export default App;
