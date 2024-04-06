import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import Contact from "./Contact";
import { useState } from "react";
import Profile from "./Profile";

function Sidebar() {
    const [showContact, setShowContact] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    return (
        <SidebarContainer>
            <Navbar
                setShowContact={setShowContact}
                showContact={showContact}
                setShowProfile={setShowProfile}
            />
            {showProfile && (
                <Profile
                    showProfile={showProfile}
                    setShowProfile={setShowProfile}
                />
            )}
            <Search />
            {showContact === false && <Chats />}
            {showContact === true && <Contact />}
        </SidebarContainer>
    );
}

export default Sidebar;
const SidebarContainer = styled.div`
    width: 25%;
    background: #3e3c61;
`;
