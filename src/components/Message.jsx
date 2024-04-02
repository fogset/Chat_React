import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
function Message({ msssage, owner }) {
    return (
        <Container>
            {owner === true && (
                <OwnerMessage>
                    <OwnerContent>{msssage.message}</OwnerContent>
                    <span>just now</span>
                </OwnerMessage>
            )}
            {owner === false && (
                <OtherMessage>
                    <p>{msssage.message}</p>
                    <span>just now</span>
                </OtherMessage>
            )}
        </Container>
    );
}

export default Message;
const Container = styled.div`
    position: relative;
    margin-bottom: 20px;
`;
const OwnerMessage = styled.div`
    text-align: right;
    display: flex;
    flex-direction: column;
`;
const OwnerContent = styled.div`
    background-color: purple;
    color: white;
    padding: 10px 20px;
    border-radius: 10px 10px 10px 10px;
    width: fit-content;
    margin-left: auto;
`;
const OtherMessage = styled.div`
    max-width: 80%;
    display: flex;
    flex-direction: column;
    p {
        background-color: white;
        padding: 10px 20px;
        border-radius: 10px 10px 10px 10px;
        max-width: max-content;
        margin-bottom: 0px;
    }
    span {
        margin-top: 0px;
    }
`;
