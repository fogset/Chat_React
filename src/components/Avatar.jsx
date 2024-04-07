import React from "react";
import styled from "styled-components";
function Avatar({ src, height, width, shape }) {
    return (
        <AvatarImage
            width={width}
            height={height}
            shape={shape}
            src="https://media.istockphoto.com/id/1942772853/photo/a-group-of-friends-enjoying-in-the-sea.jpg?s=1024x1024&w=is&k=20&c=OL5QAWwsPAphJkm0xq2pAtCsv-nBbQRoAXn2VABxOP0="
        />
    );
}

export default Avatar;
const AvatarImage = styled.img`
    width: ${(props) => (props.width ? props.width : "auto")};
    height: ${(props) => (props.height ? props.height : "auto")};
    object-fit: cover;
    border-radius: ${(props) => (props.shape ? props.shape : "50px")};
`;
