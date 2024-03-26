import React from "react";
import styled from "styled-components";
import Attach from "../img/attach.png";
import Img from "../img/img.png";

// import ImagePath from ../img/cam.png
function Input() {
    return (
        <Container>
            <InputContainer type="text" placeholder="Type something..." />
            <Send>
                <Image src={Attach} />
                <InputContainer
                    type="file"
                    style={{ display: "none" }}
                    id="file"
                />
                <label htmlFor="file">
                    <img src={Img} />
                </label>
                <Button>Send</Button>
            </Send>
        </Container>
    );
}

export default Input;
const Container = styled.div`
    position: absolute;
    height: 50px;
    background-color: white;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    bottom: 0px;
`;
const InputContainer = styled.input`
    width: 100%;
    border: none;
    outline: none;
    color: #2f2d52;
    font-size: 18px;
    &::placeholder {
        color: lightgray;
    }
`;
const Send = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
const Image = styled.img`
    height: 24px;
    cursor: pointer;
`;
const Button = styled.div`
    border: none;
    padding: 10px 15px;
    color: white;
    background-color: #8da4f1;
    cursor: pointer;
`;
