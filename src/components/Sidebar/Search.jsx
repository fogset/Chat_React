import React from "react";
import styled from "styled-components";
import Avatar from "../Avatar";
function Search() {
    return (
        <Container>
            <Form>
                <Input type="text" placeholder="find a user" />
            </Form>
        </Container>
    );
}

export default Search;

const Container = styled.div``;
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
