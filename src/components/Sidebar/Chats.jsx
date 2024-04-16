import React from "react";
import styled from "styled-components";
import SingleChat from "./SingleChat";
function Chats({ currUserContactList }) {
    return (
        <Container>
            {currUserContactList !== null && (
                <div>
                    {currUserContactList.map((contact) => (
                        <SingleChat contact={contact} />
                    ))}
                </div>
            )}
        </Container>
    );
}

export default Chats;
const Container = styled.div`
    height: calc(100% - 70px);
    overflow: scroll;
    overflow-x: hidden;
`;
