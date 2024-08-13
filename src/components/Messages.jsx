import React from "react";
import Message from "./Message";
import styled from "styled-components";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./../firebase";
import { useState, useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { currentChatContactRecoil } from "./../globalVariable";

function Messages() {
    const [messageList, setMessageList] = useState(null);
    const otherContact = useRecoilValue(currentChatContactRecoil);
    useEffect(() => {
        if (otherContact !== null) {
            const GetUpdate = onSnapshot(doc(db, "messages", otherContact.messageId), (doc) => {
                setMessageList(doc.data().messageList);
            });
        }
    });

    const bottomRef = useRef(null);
    useEffect(() => {
        scrollToBottom();
    }, [messageList]);

    function scrollToBottom() {
        bottomRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    return (
        <Container onClick={scrollToBottom}>
            {messageList !== null && (
                <div>
                    {messageList.map((message) => (
                        <Message msssage={message} sender={message.sender} />
                    ))}
                </div>
            )}
            <ScrollBottom ref={bottomRef} />
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
const ScrollBottom = styled.div`
    height: 65px;
`;
