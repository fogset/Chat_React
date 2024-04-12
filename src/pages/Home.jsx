import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar/Sidebar";
import Chat from "../components/Chat";
import { GetUserByEmail } from "../Firebase/authServices";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { login_UserRecoil } from "./../globalVariable";

function Messenger() {
    const [loginUser, setLoginUser] = useRecoilState(login_UserRecoil);
    const [tempData, setTempData] = useState(null);
    useEffect(() => {
        const email = JSON.parse(localStorage.getItem("LoginUserEmail"));
        GetUserByEmail(email);
    }, []);

    return (
        <MessengerContainer>
            <Sidebar />
            <Chat />
        </MessengerContainer>
    );
}

export default Messenger;
const MessengerContainer = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    width: 100%;
    height: 100%;
`;
