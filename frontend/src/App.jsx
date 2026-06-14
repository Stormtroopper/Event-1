import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UploadFile from "./pages/UploadFile";
import ExtractionHistory from "./pages/ExtractionHistory";
import ExtractionDetails from "./pages/ExtractionDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/upload" element={<UploadFile />} />
        <Route path="/history" element={<ExtractionHistory />} />
        <Route path="/extraction/:id" element={<ExtractionDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;