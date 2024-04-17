import styled from "styled-components";
import { useState, useEffect } from "react";
import Avatar from "../Avatar";
import { FaEdit } from "react-icons/fa";
import { SlClose } from "react-icons/sl";
import { FaCamera } from "react-icons/fa6";
import { updateUserProfile } from "../../Firebase/Update";
import { uploadImage } from "../../Firebase/upload";

function Profile({ setShowProfile }) {
    const [onEdit, setOnEdit] = useState(false);
    const [userName, setUserName] = useState(null);
    const [description, setDescription] = useState(null);
    const [loginUser, setLoginUser] = useState(null);
    const [profileImage, setProfileImage] = useState(null);
    const date = new Date();
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("LoginUser"));
        setLoginUser(data);
    }, []);
    function SaveToFireBase() {
        updateUserProfile(userName, description, loginUser.email);
    }
    function handleImage(e) {
        const file = e.target.files[0];
        const Image = {
            orgin: file.name,
            filename: date + "-" + file.name,
            file,
        };
        setProfileImage(Image);
        uploadImage(file);
        // console.log(profileImage);
        // const date = new Date();
        // alert(date);
    }

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
                            src={profileImage ? URL.createObjectURL(profileImage.file) : ""}
                            height={"150px"}
                            width={"150px"}
                            shape={"30px"}
                        />
                        <CameraIcon>
                            <FaCamera size={30} />
                            <input
                                label="Image"
                                placeholder="Choose image"
                                accept="image/png,image/jpeg"
                                type="file"
                                onChange={handleImage}
                            />
                        </CameraIcon>
                    </AvatarWrapper>
                    <ProfileForm onSubmit={() => {}}>
                        <input
                            type="text"
                            placeholder="Username"
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <textarea
                            type="text"
                            placeholder="Write something about you."
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <ProfileActions>
                            <CancelButton onClick={() => setOnEdit(false)}>Cancel</CancelButton>
                            <SaveButton onClick={SaveToFireBase} type="submit">
                                Save
                            </SaveButton>
                        </ProfileActions>
                    </ProfileForm>
                </ProfileInfos>
            )}
            {onEdit === false && (
                <ProfileInfos>
                    <AvatarWrapper>
                        <Avatar height={"150px"} width={"150px"} shape={"30px"} />
                    </AvatarWrapper>
                    {loginUser && (
                        <ProfileDetail>
                            <Username>{loginUser.username}</Username>
                            <Email>{loginUser.email}</Email>
                            <Status>{loginUser.description}</Status>
                        </ProfileDetail>
                    )}
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

const ProfileDetail = styled.div`
    display: flex;
    flex-direction: column;
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
    margin-top: 5px;
    font-size: 1rem;
`;
const Status = styled.p`
    font-style: italic;
    color: whitesmoke;
    width: 100%;
    height: auto;
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
