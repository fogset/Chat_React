import styled from "styled-components";
import { signOut } from "firebase/auth";
import { auth } from "./../firebase.js";
import { useRecoilState } from "recoil";
import { login_UserRecoil } from "./../globalVariable";
function Navbar() {
    const [loginUser, setLoginUser] = useRecoilState(login_UserRecoil);
    function handleSignOut() {
        signOut(auth)
            .then(() => {
                setLoginUser(null);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <NavbarContainer>
            <Logo>Lama chat</Logo>
            <User>
                <Image
                    src={
                        "https://media.istockphoto.com/id/1942772853/photo/a-group-of-friends-enjoying-in-the-sea.jpg?s=1024x1024&w=is&k=20&c=OL5QAWwsPAphJkm0xq2pAtCsv-nBbQRoAXn2VABxOP0="
                    }
                />
                <span>John</span>
                <Button onClick={handleSignOut}>logout</Button>
            </User>
        </NavbarContainer>
    );
}

export default Navbar;
const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #2f2d52;
    height: 50px;
    padding: 10px;
    justify-content: space-between;
    color: #ddddf7;
`;
const Logo = styled.span`
    font-weight: bold;
    @include tablet {
        display: none;
    }
`;
const User = styled.div`
    display: flex;
    gap: 10px;
`;
const Image = styled.img`
    background-color: #ddddf7;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    object-fit: cover;
`;
const Button = styled.button`
    background-color: #5d5b8d;
    color: #ddddf7;
    font-size: 10px;
    border: none;
    cursor: pointer;
    @include tablet {
        position: absolute;
        bottom: 10px;
    }
`;
