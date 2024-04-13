import React from "react";
import Message from "./Message";
import styled from "styled-components";
import { MessageData } from "../data/MessageData";
import { useState, useEffect } from "react";
import { GetMessageListById } from "../Firebase/Get";
function Messages() {
    const [message, setMessage] = useState(null);
    useEffect(() => {
        GetMessageListById("xHjOadPNP4BLeJ3MxWlD", setMessage);
        console.log(message);
    }, []);
    function sendMessage() {
        GetMessageListById("xHjOadPNP4BLeJ3MxWlD", setMessage);
        console.log("message");
        console.log(message.messageList);
    }
    return (
        <Container onClick={sendMessage}>
            {message !== null && (
                <div>
                    {message.messageList.map((message) => (
                        <Message msssage={message} sender={message.sender} />
                    ))}
                </div>
            )}
        </Container>
    );
}

export default Messages;
const Container = styled.div`
    background-color: #ddddf7;
    padding: 10px;
    height: calc(100% - 160px);
    overflow: scroll;
    overflow-x: hidden;
`;
