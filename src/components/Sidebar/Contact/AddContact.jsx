import React from "react";
import styled from "styled-components";
import { updateContactbyEmail } from "../../../Firebase/Update";
import Avatar from "../../Avatar";
import { useState, useEffect } from "react";
import { CreateNewConversationbyEmail } from "../../../Firebase/Add";

function AddContact({ newContact, setResultUser }) {
    const loginUser = JSON.parse(localStorage.getItem("LoginUser"));
    const [newMessageId, setNewMessageId] = useState(null);
    function addUser() {
        CreateNewConversationbyEmail(loginUser.email, newContact.email, setNewMessageId);
    }
    function clearInput() {
        // setAddContact([]);
    }
    useEffect(() => {
        if (newMessageId !== null) {
            const otherContact = {
                email: newContact.email,
                messageId: newMessageId,
                username: newContact.username,
                profileImg: newContact.profileImg,
            };
            const LoginUser = {
                email: loginUser.email,
                messageId: newMessageId,
                username: loginUser.username,
                profileImg: loginUser.profileImg,
            };
            updateContactbyEmail(loginUser.email, otherContact);
            updateContactbyEmail(newContact.email, LoginUser);
        }
    }, [newMessageId]);
    return (
        <Container>
            <Avatar height={"50px"} width={"50px"} />
            <UserChatInfo>{newContact.email}</UserChatInfo>
            <Add onClick={addUser}>Add</Add>
        </Container>
    );
}

export default AddContact;
const UserChatInfo = styled.div``;
const Add = styled.button`
    font-size: 19px;
    font-weight: 500;
    background-color: blue;
    color: white;
    padding: 10px;
    /* margin-left: 15%; */
    &:hover {
        background-color: lightcoral;
    }
`;
const Container = styled.div`
    font-weight: 500;
    font-size: 18px;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
    cursor: pointer;
    border-bottom: 1px solid gray;
    background-color: blueviolet;
`;
