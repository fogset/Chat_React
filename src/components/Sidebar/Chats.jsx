import React from "react";
import styled from "styled-components";
import SingleChat from "./SingleChat";
function Chats() {
    return (
        <Container>
            <SingleChat />
            <SingleChat />
            <SingleChat />
            <SingleChat />
            <SingleChat />
            <SingleChat />
            <SingleChat />
            <SingleChat />
        </Container>
    );
}

export default Chats;
const Container = styled.div`
    height: calc(100% - 110px);
    overflow: scroll;
    overflow-x: hidden;
`;
