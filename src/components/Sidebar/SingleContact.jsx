import React from "react";
import styled from "styled-components";
import Avatar from "../Avatar";

function SingleContact({ user }) {
    return (
        <Container>
            <Avatar height={"50px"} width={"50px"} />
            <UserChatInfo>
                <span>{user.username}</span>
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
    border-bottom: 1px solid gray;
    &:hover {
        background-color: #2f2d52;
    }
`;
