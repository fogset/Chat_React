import React from "react";
import styled from "styled-components";
import SingleContact from "./SingleContact";
import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import AddContact from "./AddContact";

function Contact({ currUserContactList }) {
    const [totalUser, setTotalUser] = useState(null);
    const [searchUser, setSearchUser] = useState(null);
    const [resultUser, setResultUser] = useState(null);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("totalUsers"));
        setTotalUser(data);
    }, []);
    function onClickSearch() {
        const findUser = totalUser.find((user) => user.email === searchUser);
        setResultUser(findUser);
    }
    return (
        <Container>
            <SearchContainer>
                <Input
                    type="text"
                    placeholder="find a user"
                    onChange={(e) => {
                        setSearchUser(e.target.value);
                    }}
                />
                <SearchIcon onClick={onClickSearch}>
                    <CiSearch size={28} />
                </SearchIcon>
            </SearchContainer>
            {resultUser && <AddContact newContact={resultUser} setResultUser={setResultUser} />}
            {currUserContactList !== null && (
                <div>
                    {currUserContactList.map((user) => (
                        <SingleContact user={user} />
                    ))}
                </div>
            )}
        </Container>
    );
}

export default Contact;
const Container = styled.div`
    height: calc(100% - 70px);
    overflow: scroll;
    overflow-x: hidden;
`;
const Test = styled.div`
    font-size: larger;
    color: white;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 50px;
    left: 50px;
    z-index: 100;
`;
const SearchContainer = styled.div`
    color: white;
    padding: 10px;
    display: flex;
`;

const Input = styled.input`
    font-size: large;
    height: 25px;
    background-color: white;
    border: none;
    color: black;
    outline: none;
    width: 100%;
    &::placeholder {
        color: darkblue;
    }
`;
const SearchIcon = styled.div`
    padding: 1px;
    background-color: blue;
    height: 25px;
    margin-left: 6px;
`;
