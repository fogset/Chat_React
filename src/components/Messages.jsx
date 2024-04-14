import React from "react";
import Message from "./Message";
import styled from "styled-components";
import { MessageData } from "../data/MessageData";
import { GetMessageListById } from "../Firebase/Get";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./../firebase";
import { useRef, useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { currentChatContactRecoil } from "./../globalVariable";

function Messages() {
    const [message, setMessage] = useState(null);
    const [messageList, setMessageList] = useState(null);
    const otherContact = useRecoilValue(currentChatContactRecoil);
    useEffect(() => {
        if (otherContact !== null) {
            const GetUpdate = onSnapshot(
                doc(db, "messages", otherContact.messageId),
                (doc) => {
                    setMessageList(doc.data().messageList);
                }
            );
        }
    });

    return (
        <Container>
            {messageList !== null && (
                <div>
                    {messageList.map((message) => (
                        <Message
                            msssage={message}
                            sender={message.sender}
                            id={otherContact.messageId}
                        />
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
