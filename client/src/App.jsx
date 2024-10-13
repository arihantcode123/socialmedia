import './App.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import AdminLogin from './pages/AdminLogin'
import Navbar from './components/Navbar'
import Userform from './pages/Userform'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Userform/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
