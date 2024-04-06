import React from "react";
import styled from "styled-components";
import Avatar from "../Avatar";
function SingleChat() {
    return (
        <Container>
            <Avatar height={"50px"} width={"50px"} />
            <UserChatInfo>
                <AvatarInfo>
                    <span>Jane</span>
                    <Time>2 days ago</Time>
                </AvatarInfo>
                <p>Hello</p>
            </UserChatInfo>
        </Container>
    );
}

export default SingleChat;
const UserChatInfo = styled.div`
    color: white;
    p {
        font-size: 14px;
        color: lightgray;
    }
`;
const Time = styled.div`
    color: white;
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
const AvatarInfo = styled.div`
    span {
        font-size: 18px;
        font-weight: 500;
    }
    display: flex;
    justify-content: space-between;
    width: 200px;
`;
