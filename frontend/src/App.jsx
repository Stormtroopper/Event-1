import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UploadFile from "./pages/UploadFile";
import ExtractionHistory from "./pages/ExtractionHistory";
import ExtractionDetails from "./pages/ExtractionDetails";
import NotFound from "./pages/NotFound";
import ProtectedRoutes from "./protection/ProtectedRoutes";
import { useState } from "react";

function App() {
  const [loggedIn,setLoggedIn]=useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />

        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/register" element={<Register setLoggedIn={setLoggedIn}/>} />
        <Route element={<ProtectedRoutes loggedIn={loggedIn}/>}>

          <Route path="/upload" element={<UploadFile />} />
          <Route path="/history" element={<ExtractionHistory />} />
          <Route path="/extraction/:id" element={<ExtractionDetails />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;