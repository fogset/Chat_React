import React from "react";
import Message from "./Message";
import styled from "styled-components";
import { MessageData } from "../data/MessageData";
import { useState, useEffect } from "react";
import { GetMessageListById } from "../Firebase/Get";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./../firebase";

function Messages() {
    const [message, setMessage] = useState(null);
    const [messageList, setMessageList] = useState(null);
    useEffect(() => {
        GetMessageListById("xHjOadPNP4BLeJ3MxWlD", setMessage);
        console.log(message);
    }, []);
    const unsub = onSnapshot(
        doc(db, "messages", "xHjOadPNP4BLeJ3MxWlD"),
        (doc) => {
            setMessageList(doc.data().messageList);
        }
    );

    return (
        <Container>
            {message !== null && (
                <div>
                    {messageList.map((message) => (
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
