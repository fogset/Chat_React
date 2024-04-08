import styled from "styled-components";
import { useState, useEffect } from "react";
import Avatar from "../Avatar";
import { FaEdit } from "react-icons/fa";
import { SlClose } from "react-icons/sl";
import { FaCamera } from "react-icons/fa6";
import { useRecoilState } from "recoil";
import { login_UserRecoil } from "./../../globalVariable";

function Profile({ showProfile, setShowProfile }) {
    const [onEdit, setOnEdit] = useState(false);
    const [loginUser, setLoginUser] = useRecoilState(login_UserRecoil);
    useEffect(() => {
        console.log(loginUser);
    }, [loginUser]);

    return (
        <Container>
            <Wrapper>
                <Topbar>
                    <Heading>Profile</Heading>
                    <AppIcon onClick={() => setShowProfile(false)}>
                        <SlClose size={30} />
                    </AppIcon>
                </Topbar>
            </Wrapper>
            {onEdit === true && (
                <ProfileInfos>
                    <AvatarWrapper>
                        <Avatar
                            height={"150px"}
                            width={"150px"}
                            shape={"30px"}
                        />
                        <CameraIcon>
                            <FaCamera size={30} />
                        </CameraIcon>
                    </AvatarWrapper>
                    <ProfileForm onSubmit={() => {}}>
                        <input type="text" placeholder="Username" />
                        <textarea
                            type="text"
                            placeholder="Write something about you."
                        />
                        <ProfileActions>
                            <CancelButton onClick={() => setOnEdit(false)}>
                                Cancel
                            </CancelButton>
                            <SaveButton type="submit">Save</SaveButton>
                        </ProfileActions>
                    </ProfileForm>
                </ProfileInfos>
            )}
            {onEdit === false && (
                <ProfileInfos>
                    <AvatarWrapper>
                        <Avatar
                            height={"150px"}
                            width={"150px"}
                            shape={"30px"}
                        />
                    </AvatarWrapper>
                    <Username>John Doe</Username>
                    <Email>{loginUser?.email}</Email>
                    <Status>some description</Status>
                    <Editbutton onClick={() => setOnEdit(true)}>
                        <FaEdit size={18} />
                        Profile
                    </Editbutton>
                </ProfileInfos>
            )}
        </Container>
    );
}

export default Profile;
const Container = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: #5d5b8d;
    height: 100%;
    width: 320px;
    z-index: 10;
`;
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const Topbar = styled.div`
    height: 70px;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2rem;
    color: white;
`;
const Heading = styled.span`
    font-size: 1.2rem;
`;
const AppIcon = styled.span`
    height: 45px;
    width: 45px;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-light);
    cursor: pointer;
`;
const ProfileInfos = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 1rem;
    gap: 1rem;
    height: calc(100vh - 70px);
    color: white;
`;
const AvatarWrapper = styled.div`
    height: 150px;
    width: 150px;
    position: relative;
    border-radius: 0.5rem;
    overflow: hidden;
`;
const ProfileForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.1rem;
    input {
        padding: 0.5rem 0.8rem;
        border-radius: 0.3rem;
        font-size: 1rem;
        border: none;
        background-color: rgba(255, 255, 255, 0.2);
        color: white;
        outline: none;
    }
    input::placeholder {
        color: lightgray;
    }
    textarea {
        padding: 0.5rem 0.8rem;
        border-radius: 0.3rem;
        font-size: 1rem;
        border: none;
        background-color: rgba(255, 255, 255, 0.2);
        color: white;
        outline: none;
        resize: none;
        height: 80px;
    }
    textarea::placeholder {
        color: lightgray;
    }
`;
const ProfileActions = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;
const CancelButton = styled.button`
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: whitesmoke;
    padding: 5px;
    &:hover {
        color: white;
        background-color: darkblue;
    }
`;
const SaveButton = styled(CancelButton)`
    background-color: rgba(255, 255, 255, 0.4);
`;
const Username = styled.span`
    font-size: 1.3rem;
    font-weight: bold;
`;
const Email = styled.span`
    font-size: 1rem;
`;
const Status = styled.p`
    font-style: italic;
    color: whitesmoke;
`;
const Editbutton = styled.button`
    width: max-content;
    font-size: large;
    padding: 10px;
`;
const CameraIcon = styled.div`
    position: absolute;
    z-index: 10;
    bottom: 0px;
    right: 5px;
    color: white;
`;
