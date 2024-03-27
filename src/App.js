import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";
function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/loginUser/:id" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
