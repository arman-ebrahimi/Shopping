import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';
import {Navbar} from "./components/Navbar";
import {HomePage} from "./pages";
import {Details, CartPage} from "./pages";

export function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/carts" element={<CartPage />} />
                </Routes>
            </div>
        </div>
      </BrowserRouter>
  );
}

