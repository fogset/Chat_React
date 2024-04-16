import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Chats from "./Chats";
import Contact from "./Contact/Contact";
import { useState } from "react";
import Profile from "./Profile";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./../../firebase";

function Sidebar() {
    const [showContact, setShowContact] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const email = JSON.parse(localStorage.getItem("LoginUserEmail"));
    const [currUserContactList, setCurrUserContactList] = useState(null);
    const currUserContactListFirebase = onSnapshot(doc(db, "users", email), (doc) => {
        if (doc.data().contact !== null) {
            setCurrUserContactList(doc.data().contact);
        }
    });

    return (
        <SidebarContainer>
            <Navbar
                setShowContact={setShowContact}
                showContact={showContact}
                setShowProfile={setShowProfile}
            />
            {showProfile && <Profile setShowProfile={setShowProfile} />}
            {showContact === false && <Chats currUserContactList={currUserContactList} />}
            {showContact === true && <Contact currUserContactList={currUserContactList} />}
        </SidebarContainer>
    );
}

export default Sidebar;
const SidebarContainer = styled.div`
    width: 25%;
    background: #3e3c61;
`;
