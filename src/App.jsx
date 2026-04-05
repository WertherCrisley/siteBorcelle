import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/home";



function App() {
  return (
    <HashRouter>
      <ToastContainer position="top-right"
        autoClose={2000}
        theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>



  )
}

export default App