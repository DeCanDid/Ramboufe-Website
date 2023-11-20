import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Dynam from './Component1/Dynam';
import Reservation from './Component1/Reservation';
import Restaurants from './Component1/Restaurants';
import Catering from './Component1/Catering';
import Menus from './Component1/Menus';


function App() {
  return(
    <>
        
      {/* <Dynam /> */}

      <Routes>
        <Route path='/' element={<Dynam />} />
        <Route path='/Menus' element={<Menus />} />
        <Route path='/Reservation' element={<Reservation />} />
        <Route path='/Restaurants' element={<Restaurants />} />
        <Route path='/Catering' element={<Catering />} />
      </Routes>
    </>
  )
}

export default App;
