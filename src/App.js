import { useRecoilState } from "recoil";
import { login_UserRecoil } from "./globalVariable";
import { Route, Routes } from "react-router-dom";
import LoginOrSignUp from "./pages/LoginOrSignUp";
import Messenger from "./pages/Home";

function App() {
    const [loginUser, setLoginUser] = useRecoilState(login_UserRecoil);
    return (
        <div>
            {loginUser && (
                <Routes>
                    <Route path="/" element={<Messenger />} />
                    <Route path="/loginUser/:id" element={<Messenger />} />
                </Routes>
            )}
            {loginUser === null && <LoginOrSignUp />}
        </div>
    );
}

export default App;
