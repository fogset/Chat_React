import React from "react";
import styled from "styled-components";
import SingleChat from "./SingleChat";
import { useState, useEffect } from "react";
function Chats() {
    const [contactList, setContactList] = useState(null);
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("LoginUser"));
        setContactList(data.contact);
    }, []);

    return (
        <Container>
            {contactList !== null && (
                <div>
                    {contactList.map((contact) => (
                        <SingleChat contact={contact} />
                    ))}
                </div>
            )}
        </Container>
    );
}

export default Chats;
const Container = styled.div`
    height: calc(100% - 110px);
    overflow: scroll;
    overflow-x: hidden;
`;
