import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";
function App() {
  return (
    <>
    {/* <ToastContainer/> */}
    <ToastContainer
// position="bottom-center"
position="top-center"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
     <Routes>
     
      <Route path="/" element={ <ProtectedRoute><HomePage/></ProtectedRoute>}/>
    
      <Route path="/login" element={  <PublicRoute><Login/></PublicRoute>}/>
      <Route path="/register" element={<PublicRoute><Register/></PublicRoute>}/>

     </Routes>
    </>
  );
}

export default App;
