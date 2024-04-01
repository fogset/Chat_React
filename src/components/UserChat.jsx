import React from "react";
import styled from "styled-components";
function UserChat() {
    return (
        <Container>
            <Image src="https://media.istockphoto.com/id/1942772853/photo/a-group-of-friends-enjoying-in-the-sea.jpg?s=1024x1024&w=is&k=20&c=OL5QAWwsPAphJkm0xq2pAtCsv-nBbQRoAXn2VABxOP0=" />
            <UserChatInfo>
                <span>Jane</span>
                <p>Hello</p>
            </UserChatInfo>
        </Container>
    );
}

export default UserChat;
const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
`;
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
