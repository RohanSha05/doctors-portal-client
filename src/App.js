import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import GetAppointment from './Pages/GetAppointment/GetAppointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/getappointment' element={<RequireAuth>
          <GetAppointment />
        </RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
