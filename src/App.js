import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Single from "./pages/Single";
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/single" element={<Single />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;