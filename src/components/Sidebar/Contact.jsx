import React from "react";
import styled from "styled-components";
import SingleContact from "./SingleContact";
function Contact() {
    return (
        <Container>
            <SingleContact />
            <SingleContact />
            <SingleContact />
            <SingleContact />
            <SingleContact />
            <SingleContact />
            <SingleContact />
            <SingleContact />
        </Container>
    );
}

export default Contact;
const Container = styled.div`
    height: calc(100% - 110px);
    overflow: scroll;
    overflow-x: hidden;
`;
