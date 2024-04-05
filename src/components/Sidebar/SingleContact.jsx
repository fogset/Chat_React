import React from "react";
import styled from "styled-components";
import Avatar from "../Avatar";

function SingleContact() {
    return (
        <Container>
            <Avatar height={"40px"} width={"40px"} />
            <UserChatInfo>
                <span>Jane</span>
            </UserChatInfo>
        </Container>
    );
}

export default SingleContact;
const UserChatInfo = styled.div`
    color: white;
    span {
        font-size: 18px;
        font-weight: 500;
    }
    p {
        font-size: 14px;
        color: lightgray;
    }
`;
const Container = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: #2f2d52;
    }
`;
