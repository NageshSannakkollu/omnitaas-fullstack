import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LandingPage from './components/LandingPage'
import HeaderPage from './components/HeaderPage'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'

const App = () => (
  <BrowserRouter>
    <ToastContainer position='top-center' autoClose={600} hideProgressBar={true} transition={Slide}/>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/header" element={<HeaderPage />} />
      <Route exact path='/signup' element={<RegisterPage/>}/>
      <Route exact path='/signin' element={<LoginPage/>}/>
      <Route path="*" element={<h1 style={{textAlign:"center"}}>404 Not Found</h1>} />
    </Routes>
  </BrowserRouter>
)

export default App