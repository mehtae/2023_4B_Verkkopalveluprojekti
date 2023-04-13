import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu.js'
import Shoppingcart from './pages/Shoppingcart.js'
import About from './pages/About.js'
import ContactUs from './pages/Contact.js'
import Footer from './components/Footer.js'
import Register from './pages/Register';

import { BrowserRouter, Routes,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} /> 
          <Route exact path="/Menu" element={<Menu/>} />
          <Route exact path="/About" element={<About/>} />
          <Route exact path="/Contact" element={<ContactUs/>} />
          <Route exact path="/Register" element={<Register/>} />
          <Route exact path="/Shoppingcart" element={<Shoppingcart/>} />
        </Routes>
        <Footer/>
  
        </BrowserRouter>
    </div>
  );
}

export default App;
