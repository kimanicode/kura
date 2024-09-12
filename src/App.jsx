import Homepage from './components/Homepage'
import {BrowserRouter as Router , Routes ,Route}from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Pricing from './pages/Pricing';
import Features from './pages/Features';
import Integrations from './pages/Integrations';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Contact from './pages/Contact'
import Product from './pages/Product'



function App() {
 

  return (
    <Router>
      <div className='w-full '>
        <NavBar/>
        <Routes>


        <Route path='/' element={<Homepage />} exact />
           
        
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/features' element={<Features/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/integrations' element={<Integrations />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />



        </Routes>

        <Footer/>
      </div>
      
      
      
      
    </Router>
  )
}

export default App
