import React from "react";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "./pages/Login";
import Routes from "./Routes";
function App() {

  return (
   <div className="w-screen h-screen ">
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
   </div>
  )
}

export default App
