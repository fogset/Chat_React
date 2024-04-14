import React from "react";
import styled from "styled-components";
import Avatar from "../Avatar";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
function Search({ searchItem, setSearchItem, setStartSearch }) {
    function onClickSearch() {
        setStartSearch(true);
    }
    return (
        <SearchContainer>
            <Input
                type="text"
                placeholder="find a user"
                onChange={(e) => {
                    setSearchItem(e.target.value);
                }}
            />
            <SearchIcon onClick={onClickSearch}>
                <CiSearch size={28} />
            </SearchIcon>
        </SearchContainer>
    );
}

export default Search;

const SearchContainer = styled.div`
    color: white;
    padding: 10px;
    display: flex;
`;

const Input = styled.input`
    font-size: large;
    height: 25px;
    background-color: white;
    border: none;
    color: black;
    outline: none;
    width: 100%;
    &::placeholder {
        color: darkblue;
    }
`;
const SearchIcon = styled.div`
    padding: 1px;
    background-color: blue;
    height: 25px;
    margin-left: 6px;
`;
