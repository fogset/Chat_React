import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
function Sidebar() {
    return (
        <SidebarContainer>
            <Navbar />
            <Search />
            <Chats />
        </SidebarContainer>
    );
}

export default Sidebar;
const SidebarContainer = styled.div`
    width: 25%;
    background: #3e3c61;
`;
