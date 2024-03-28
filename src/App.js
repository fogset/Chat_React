import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useRecoilState } from "recoil";
import { login_UserRecoil } from "./globalVariable";
import { Route, Routes } from "react-router-dom";
import LoginOrSignUp from "./pages/LoginOrSignUp";

function App() {
    const [loginUser, setLoginUser] = useRecoilState(login_UserRecoil);
    return (
        <div>
            {loginUser && (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/loginUser/:id" element={<Home />} />
                </Routes>
            )}
            {loginUser === null && <LoginOrSignUp />}
        </div>
    );
}

export default App;
