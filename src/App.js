import './App.css';
import { Route, Routes } from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Setting from './Pages/Setting';
import Pricing from './Pages/Pricing';
import Forgot from './Pages/Forgot';
import NewPassword from './Pages/NewPassword';
import DocPage from './Pages/DocPage';


function App() {
  return (

      <Routes>
        <Route  path="/" element={<LandingPage />} />
            <Route  path="/register" element={<Signup />} />
            <Route  path="/login" element={<Login />} />
            <Route path='/setting' element={<Setting/>}/>
            <Route path='/pricing' element={<Pricing/>}/>
            <Route path='/forgot' element={<Forgot/>}/>
            <Route path='/new-password' element={<NewPassword/>}/>
            <Route path='/doc' element={<DocPage/>}/>
        {/* </Route> */}
      </Routes>
    
  );
}
export default App;