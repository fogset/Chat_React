import React from "react";
import styled from "styled-components";
function Search() {
    return (
        <Container>
            <Form>
                <Input type="text" placeholder="find a user" />
            </Form>
            <UserChat>
                <Image src="https://media.istockphoto.com/id/1942772853/photo/a-group-of-friends-enjoying-in-the-sea.jpg?s=1024x1024&w=is&k=20&c=OL5QAWwsPAphJkm0xq2pAtCsv-nBbQRoAXn2VABxOP0=" />
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
const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
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
