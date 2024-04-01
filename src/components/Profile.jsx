import styled from "styled-components";

function Profile() {
    return (
        <Container>
            <Wrapper>
                <Topbar>
                    <Heading>Profile</Heading>
                    <AppIcon>
                        <i className="fa-solid fa-xmark"></i>
                    </AppIcon>
                </Topbar>
            </Wrapper>
        </Container>
    );
}

export default Profile;
const Container = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: red;
    height: 100%;
    width: 350px;
    z-index: 100;
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
