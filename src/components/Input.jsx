import React from "react";
import styled from "styled-components";
import Attach from "../img/attach.png";
import Img from "../img/img.png";
import { useState, useEffect } from "react";
import { serverTimestamp } from "firebase/firestore";
import { updateMessagebyId } from "../Firebase/Update";
import { useRecoilValue } from "recoil";
import { currentChatContactRecoil } from "./../globalVariable";
import EmojiPicker from "emoji-picker-react";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import moment from "moment";

function Input() {
    const [openEmoji, setOpenEmoji] = useState(false);
    const [message, setMessage] = useState(null);
    const email = JSON.parse(localStorage.getItem("LoginUserEmail"));
    const otherContact = useRecoilValue(currentChatContactRecoil);
    function sendMessage() {
        const newMessage = {
            message: message,
            sender: email,
            createdAt: moment().format("LLL"),
        };
        updateMessagebyId(newMessage, otherContact.messageId);
        setMessage("");
    }
    function handelEmoji(e) {
        //console.log(e);
        setMessage(message + e.emoji);
    }
    return (
        <Container>
            <StyledTextarea
                type="text"
                placeholder="send message "
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => (e.key === "Enter" ? sendMessage() : null)}
            />
            <Send>
                <MdOutlineEmojiEmotions size={35} onClick={() => setOpenEmoji(!openEmoji)} />
                <InputContainer type="file" style={{ display: "none" }} id="file" />
                <label htmlFor="file">
                    <img src={Img} />
                </label>
                <Button onClick={sendMessage}>Send</Button>
            </Send>
            <EmojiContainer>
                <EmojiPicker open={openEmoji} onEmojiClick={handelEmoji} />
            </EmojiContainer>
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
    position: relative;
    display: flex;
    align-items: center;
    gap: 5px;
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
const EmojiContainer = styled.div`
    position: absolute;
    right: 20px;
    bottom: 70px;
`;
