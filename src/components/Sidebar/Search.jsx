import React from "react";
import styled from "styled-components";
import Avatar from "../Avatar";
function Search() {
    return (
        <Container>
            <Form>
                <Input type="text" placeholder="find a user" />
            </Form>
            <UserChat>
                <Avatar height={"40px"} width={"40px"} />
                <UserChatInfo>
                    <span>Jane</span>
                </UserChatInfo>
            </UserChat>
        </Container>
    );
}

export default Search;

const Container = styled.div`
    border-bottom: 1px solid gray;
`;
const Form = styled.div`
    padding: 10px;
`;
const Input = styled.input`
    font-size: large;
    height: 20px;
    background-color: white;
    border: none;
    color: black;
    outline: none;
    width: 100%;
    &::placeholder {
        color: darkblue;
    }
`;

const UserChat = styled.div`
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

const UserChatInfo = styled.div`
    span {
        font-size: 18px;
        font-weight: 500;
    }
    p {
        font-size: 14px;
        color: lightgray;
    }
`;
