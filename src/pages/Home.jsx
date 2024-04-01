import React from "react";
import styled from "styled-components";
import Sidebar from "./../components/Sidebar";
import Chat from "../components/Chat";

function Messenger() {
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
