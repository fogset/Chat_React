import styled from "styled-components";
import Add from "./../img/add.png";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { login_UserRecoil } from "../globalVariable";
function Register() {
    const [loginUser, setLoginUser] = useRecoilState(login_UserRecoil);
    const auth = getAuth();
    const [userCredentials, setUserCredentials] = useState({});
    const [error, setError] = useState(null);
    function handleCredentials(e) {
        setUserCredentials({
            ...userCredentials,
            [e.target.name]: e.target.value,
        });
    }
    function handleSignup(e) {
        e.preventDefault();
        setError(null);
        createUserWithEmailAndPassword(
            auth,
            userCredentials.email,
            userCredentials.password
        )
            .then((userCredential) => {
                const user = userCredential.user;
                setLoginUser({
                    id: user.uid,
                    email: user.email,
                });
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    return (
        <Container>
            <Wrapper>
                <Logo>Lama Chat</Logo>
                <Title>Register</Title>
                <Form>
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
                <p>You don't have an account? Login</p>
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
