import React from "react";
import Message from "./Message";
import styled from "styled-components";
import { MessageData } from "../data/MessageData";

function Messages() {
    return (
        <Container>
            {MessageData.map((message) => (
                <Message msssage={message} owner={message.owner} />
            ))}
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
