import React from "react";
import styled from "styled-components";
import { updateContactbyEmail } from "../../Firebase/Update";
import Avatar from "./../Avatar";
import { useState, useEffect } from "react";
import { CreateNewConversationbyEmail } from "../../Firebase/Add";
function AddContact({ user, currUserContactList, setResultUser }) {
    const loginUserEmail = JSON.parse(localStorage.getItem("LoginUserEmail"));
    const [addContact, setAddContact] = useState([]);
    const [newMessageId, setNewMessageId] = useState(null);
    function addUser() {
        CreateNewConversationbyEmail(loginUserEmail, user.email, setNewMessageId);
    }
    function clearInput() {
        setAddContact([]);
    }
    useEffect(() => {
        if (newMessageId !== null) {
            const contact = {
                email: user.email,
                messageId: newMessageId,
                username: user.username,
            };
            // if (currUserContactList === null) {
            //     setAddContact(contact);
            // } else {
            //     setAddContact([...currUserContactList, contact]);
            // }
            updateContactbyEmail(loginUserEmail, contact);
        }
    }, [newMessageId]);
    return (
        <Container>
            <Avatar height={"50px"} width={"50px"} />
            <UserChatInfo>{user.email}</UserChatInfo>
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
