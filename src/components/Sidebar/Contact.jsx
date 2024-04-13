import React from "react";
import styled from "styled-components";
import SingleContact from "./SingleContact";
import { doc, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "./../../firebase";

function Contact() {
    const [totalUser, setTotalUser] = useState(null);
    useEffect(() => {
        // const unsub = onSnapshot(doc(db, "messages", "SF"), (doc) => {
        //     console.log("Current data: ", doc.data());
        // });
        const data = JSON.parse(localStorage.getItem("totalUsers"));
        setTotalUser(data);
    }, []);
    return (
        <Container>
            {totalUser && (
                <div>
                    {totalUser.map((user) => (
                        <SingleContact user={user} />
                    ))}
                </div>
            )}
        </Container>
    );
}

export default Contact;
const Container = styled.div`
    height: calc(100% - 110px);
    overflow: scroll;
    overflow-x: hidden;
`;
