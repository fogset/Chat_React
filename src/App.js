import { Route, Routes } from "react-router-dom";
import LoginOrSignUp from "./pages/LoginOrSignUp";
import Messenger from "./pages/Messenger";
import Profile from "./components/Sidebar/Profile";
import { auth } from "./firebase";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

function App() {
    const user = auth.currentUser;
    const [loginUser, setLoginUser] = useState(null);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setLoginUser(user);
            localStorage.setItem("LoginUserEmail", JSON.stringify(user.email));
        } else {
            setLoginUser(null);
        }
    });
    return (
        <div>
            {loginUser !== null && (
                <Routes>
                    <Route path="/" element={<Messenger />} />
                    <Route path="/loginUser/:id" element={<Messenger />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            )}
            {user === null && <LoginOrSignUp />}
        </div>
    );
}

export default App;
