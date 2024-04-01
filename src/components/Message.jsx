import React from "react";
import styled from "styled-components";
function Message() {
    return (
        <Container>
            <MessageInfo>
                <Image src="https://media.istockphoto.com/id/1942772853/photo/a-group-of-friends-enjoying-in-the-sea.jpg?s=1024x1024&w=is&k=20&c=OL5QAWwsPAphJkm0xq2pAtCsv-nBbQRoAXn2VABxOP0=" />
                <span>just now</span>
            </MessageInfo>
            <MessageContent>
                <p>hello</p>
                <Image src="https://media.istockphoto.com/id/1942772853/photo/a-group-of-friends-enjoying-in-the-sea.jpg?s=1024x1024&w=is&k=20&c=OL5QAWwsPAphJkm0xq2pAtCsv-nBbQRoAXn2VABxOP0=" />
            </MessageContent>
        </Container>
    );
}

export default Message;
const Container = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    justify-content: space-between;
`;
const MessageInfo = styled.div`
    display: flex;
    flex-direction: column;
    color: gray;
    font-weight: 300;
`;
const MessageContent = styled.div`
    max-width: 80%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    p {
        background-color: white;
        padding: 10px 20px;
        border-radius: 0px 10px 10px 10px;
        max-width: max-content;
    }
`;

const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`;
