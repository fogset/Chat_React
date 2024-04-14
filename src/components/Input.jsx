import React from "react";
import styled from "styled-components";
import Attach from "../img/attach.png";
import Img from "../img/img.png";
import { useState, useEffect } from "react";
import { serverTimestamp } from "firebase/firestore";
import { updateMessagebyId } from "../Firebase/Update";

// import ImagePath from ../img/cam.png
function Input() {
    const [message, setMessage] = useState(null);
    const [messageList, setMessageList] = useState([]);
    const email = JSON.parse(localStorage.getItem("LoginUserEmail"));
    function sendMessage() {
        //alert(message);
        messageList.push({
            message: message,
            sender: email,
            createdAt: Date().toLocaleString(),
        });
        updateMessagebyId(messageList, "xHjOadPNP4BLeJ3MxWlD");
    }
    return (
        <Container>
            <StyledTextarea
                type="text"
                placeholder="send message "
                onChange={(e) => setMessage(e.target.value)}
            />
            <Send>
                <Image src={Attach} />
                <InputContainer
                    type="file"
                    style={{ display: "none" }}
                    id="file"
                />
                <label htmlFor="file">
                    <img src={Img} />
                </label>
                <Button onClick={sendMessage}>Send</Button>
            </Send>
        </Container>
    );
}

export default Input;
const Container = styled.div`
    position: absolute;
    height: 70px;
    background-color: white;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    bottom: 0px;
`;
const InputContainer = styled.input`
    width: 100%;
    border: none;
    outline: none;
    color: #2f2d52;
    font-size: 18px;
    &::placeholder {
        color: lightgray;
    }
`;
const Send = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 50px;
`;
const Image = styled.img`
    height: 24px;
    cursor: pointer;
`;
const Button = styled.div`
    border: none;
    padding: 10px 15px;
    color: white;
    background-color: #8da4f1;
    cursor: pointer;
`;

const StyledTextarea = styled.textarea`
    border-radius: 0.3rem;
    font-size: 1rem;
    border: none;
    color: black;
    outline: none;
    height: 100%;
    width: 100%;
`;
