
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Footer from './components/Footer';
import Menu from './Pages/Menu';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Register from './Pages/Register';
import Shoppingcart from './Pages/Shoppingcart';
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
