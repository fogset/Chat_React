import styled from "styled-components";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { login_UserRecoil } from "../globalVariable";
import { db } from "./../firebase";
import { doc, setDoc, collection, addDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { GetUserByEmail } from "../Firebase/Get";

function Register({ setIfLogin }) {
    const [loginUser, setLoginUser] = useRecoilState(login_UserRecoil);
    const auth = getAuth();
    const [userCredentials, setUserCredentials] = useState({});
    const [error, setError] = useState(null);
    const [test, setTest] = useState(null);
    function handleCredentials(e) {
        setUserCredentials({
            ...userCredentials,
            [e.target.name]: e.target.value,
        });
    }
    function handleSignup(e) {
        e.preventDefault();
        setError(null);
        createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
            .then((userCredential) => {
                const user = userCredential.user;
                AddUserToFirebase();
                const UserInfo = GetUserByEmail(userCredentials.email);
                setLoginUser(UserInfo);
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    function Login() {
        setIfLogin(true);
    }
    const AddUserToFirebase = async () => {
        try {
            await setDoc(doc(db, "users", userCredentials.email), {
                contact: [],
                username: userCredentials.username,
                email: userCredentials.email,
                desc: "Write a description😀",
                profile: "",
                createdAt: serverTimestamp(),
            });
            alert(userCredentials.email + " --  " + "added");
        } catch (error) {
            console.log(error);
        }
    };
    function Test() {
        const UserInfo = GetUserByEmail(userCredentials.email, setTest);
        console.log("UserInfo.email loginUser");
        console.log(test.email);
    }

    return (
        <Container>
            <Wrapper>
                <Logo onClick={AddUserToFirebase}>Lama Chat</Logo>
                <Title onClick={Test}>Register</Title>
                <Form>
                    <Input
                        onChange={(e) => {
                            handleCredentials(e);
                        }}
                        type="username"
                        name="username"
                        placeholder="username"
                    />
                    <Input
                        onChange={(e) => {
                            handleCredentials(e);
                        }}
                        type="email"
                        name="email"
                        placeholder="email"
                    />
                    <Input
                        onChange={(e) => {
                            handleCredentials(e);
                        }}
                        type="password"
                        name="password"
                        placeholder="password"
                    />

                    <Button
                        onClick={(e) => {
                            handleSignup(e);
                        }}
                    >
                        Sign up
                    </Button>
                </Form>
                {error && <Error>{error}</Error>}
                <Error onClick={Login}>You don't have an account? Login</Error>
            </Wrapper>
        </Container>
    );
}
// <Input type="text" placeholder="display name" />;
export default Register;
const Container = styled.button`
    background-color: #a7bcff;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
const Wrapper = styled.button`
    background-color: white;
    padding: 20px 60px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`;
const Logo = styled.span`
    color: #5d5b8d;
    font-weight: bold;
    font-size: 24px;
`;
const Title = styled.span`
    color: #5d5b8d;
    font-size: 12px;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;
const Input = styled.input`
    padding: 15px;
    border: none;
    width: 250px;
    border-bottom: 1px solid #a7bcff;
    &:placeholder {
        color: rgb(175, 175, 175);
    }
`;
const Button = styled.button`
    background-color: #7b96ec;
    color: white;
    padding: 10px;
    font-weight: bold;
    border: none;
    cursor: pointer;
`;
const Image = styled.img`
    width: 32px;
`;
const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #8da4f1;
    font-size: 12px;
    cursor: pointer;
`;
const Error = styled.div`
    color: red;
`;
