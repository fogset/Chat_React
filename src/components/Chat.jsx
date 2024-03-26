import React from "react";
import styled from "styled-components";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";

function Chat() {
    return (
        <Container>
            <ChatInfo>
                <span>Jane</span>
                <ChatIcons>
                    <Image src={Cam} />
                    <Image src={Add} />
                    <Image src={More} />
                </ChatIcons>
            </ChatInfo>
            <Messages />
            <Input />
        </Container>
    );
}

export default Chat;
const Container = styled.div`
    height: 100%;
    position: relative;
    width: 70%;
`;
const ChatInfo = styled.div`
    height: 50px;
    background-color: #5d5b8d;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    color: lightgray;
`;
const ChatIcons = styled.div`
    display: flex;
    gap: 10px;
    img {
        height: 24px;
        cursor: pointer;
    }
`;
const Image = styled.div``;
