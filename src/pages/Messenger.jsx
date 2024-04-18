import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar/Sidebar";
import Chat from "../components/Chat";
import { GetTotalUsers, GetUserByEmail } from "../Firebase/Get";
import { useState, useEffect } from "react";

function Messenger() {
    useEffect(() => {
        const email = JSON.parse(localStorage.getItem("LoginUserEmail"));
        GetUserByEmail(email);
        GetTotalUsers();
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
