import React from "react";
import styled from "styled-components";
import Sidebar from "./../components/Sidebar";
import Chat from "../components/Chat";

function Home() {
    return (
        <HomeContainer>
            <Container>
                <Sidebar />
                <Chat />
            </Container>
        </HomeContainer>
    );
}

export default Home;
const HomeContainer = styled.button`
    background-color: #a7bcff;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
const Container = styled.button`
    width: 65%;
    height: 80%;
    display: flex;
    overflow: hidden;
    @include tablet {
        width: 90%;
    }
`;
