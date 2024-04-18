import React from "react";
import styled from "styled-components";
import Avatar from "../../Avatar";

function SingleContact({ user }) {
    return (
        <Container>
            <Avatar height={"50px"} width={"50px"} src={user.profileImg} />
            <UserChatInfo>
                <Name>{user.username}</Name>
                <Email>{user.email}</Email>
            </UserChatInfo>
        </Container>
    );
}

export default SingleContact;
const UserChatInfo = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    font-weight: 500;
`;
const Name = styled.div`
    color: #fcf78d;
`;
const Email = styled.div`
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
