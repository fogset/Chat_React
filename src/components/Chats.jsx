import React from "react";
import styled from "styled-components";
import UserChat from "./UserChat";
function Chats() {
    return (
        <Container>
            <UserChat />
            <UserChat />
            <UserChat />
            <UserChat />
            <UserChat />
            <UserChat />
            <UserChat />
            <UserChat />
        </Container>
    );
}

export default Chats;
const Container = styled.div`
    height: calc(100% - 180px);
    overflow: scroll;
    overflow-x: hidden;
`;
