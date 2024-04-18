import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import { useRecoilValue } from "recoil";
import { currentChatContactRecoil } from "./../globalVariable";
function Message({ msssage, sender }) {
    const email = JSON.parse(localStorage.getItem("LoginUserEmail"));
    const otherContact = useRecoilValue(currentChatContactRecoil);
    return (
        <Container>
            {sender === email && (
                <OwnerMessage>
                    <OwnerContent>{msssage.message}</OwnerContent>
                    <span>{msssage.createdAt}</span>
                </OwnerMessage>
            )}
            {sender !== email && (
                <OtherMessage>
                    <Avatar
                        src={otherContact.profileImg}
                        height={"40px"}
                        width={"40px"}
                        shape={"10px"}
                    />
                    <MessageInfo>
                        <p>{msssage.message}</p>
                        <span>{msssage.createdAt}</span>
                    </MessageInfo>
                </OtherMessage>
            )}
        </Container>
    );
}

export default Message;
const Container = styled.div`
    position: relative;
    margin-bottom: 20px;
`;
const OwnerMessage = styled.div`
    text-align: right;
    display: flex;
    flex-direction: column;
    span {
        margin-top: 0px;
        font-size: 15px;
    }
`;
const OwnerContent = styled.div`
    background-color: purple;
    color: white;
    padding: 10px 20px;
    border-radius: 10px 10px 10px 10px;
    width: fit-content;
    margin-left: auto;
`;
const OtherMessage = styled.div`
    max-width: 80%;
    display: flex;
    margin-left: -5px;
`;

const MessageInfo = styled.div`
    flex-direction: column;
    p {
        background-color: white;
        padding: 10px 20px;
        border-radius: 10px 10px 10px 10px;
        max-width: max-content;
        margin-bottom: 0px;
        margin-top: 0px;
    }
    span {
        margin-top: 0px;
        font-size: 15px;
    }
`;
