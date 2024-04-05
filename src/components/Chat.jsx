import React from "react";
import styled from "styled-components";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { useRecoilState } from "recoil";
import { login_UserRecoil } from "./../globalVariable";
import { signOut } from "firebase/auth";
import { auth } from "./../firebase.js";

function Chat() {
    const [loginUser, setLoginUser] = useRecoilState(login_UserRecoil);
    function handleSignOut() {
        signOut(auth)
            .then(() => {
                setLoginUser(null);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <Container>
            <ChatInfo>
                <span>Jane</span>
                <Button onClick={handleSignOut}>Logout</Button>
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
    width: 100%;
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
const Button = styled.button`
    background-color: #5d5b8d;
    color: #ddddf7;
    font-size: 10px;
    font-size: large;
    cursor: pointer;
    padding: 10px;
`;
