import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Modal } from 'bootstrap';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';

function App() {

const [isAuth , setIsAuth] = useState(false);


  return (
<>
{isAuth ? < ProductPage getP setIsAuth={setIsAuth} /> : <LoginPage setIsAuth={setIsAuth} />}



</>
  )
  
}

export default App
