import styled from "styled-components";
import { useState, useEffect } from "react";
import Avatar from "../Avatar.jsx";

function Navbar({ setShowContact, showContact, setShowProfile }) {
    const [loginUser, setLoginUser] = useState(null);
    function ShowContactList() {
        setShowContact(!showContact);
    }
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("LoginUser"));
        setLoginUser(data);
    }, []);
    return (
        <NavbarContainer>
            <Logo>Chat</Logo>
            <User onClick={() => setShowProfile(true)}>
                <Avatar height={"50px"} width={"50px"} />
                {loginUser && <span>{loginUser.username}</span>}
            </User>
            <Button onClick={ShowContactList}>
                {showContact ? "Contacts" : "Chats"}
            </Button>
        </NavbarContainer>
    );
}

export default Navbar;
const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #2f2d52;
    height: 50px;
    padding: 10px;
    justify-content: space-between;
    color: #ddddf7;
`;
const Logo = styled.span`
    font-size: large;
    color: white;
    font-weight: bold;
    @include tablet {
        display: none;
    }
`;
const User = styled.div`
    display: flex;
    span {
        font-size: large;
        margin-top: 15px;
        margin-left: 10px;
        margin-right: 15px;
    }
`;
const Image = styled.img`
    background-color: #ddddf7;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
`;

const Button = styled.button`
    background-color: #5d5b8d;
    color: #ddddf7;
    font-size: 10px;
    border: none;
    font-size: large;
    cursor: pointer;
    @include tablet {
        position: absolute;
        bottom: 10px;
    }
    padding: 10px;
`;
