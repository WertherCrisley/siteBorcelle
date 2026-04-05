import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HashRouter } from "react-router-dom";


import Home from "./pages/home";



function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>



  )
}

export default App