import React from "react";
import styled from "styled-components";
function Avatar({ src, customHeight, customWidth }) {
    return (
        <AvatarImage
            width="40px"
            height="40px"
            src="https://media.istockphoto.com/id/1942772853/photo/a-group-of-friends-enjoying-in-the-sea.jpg?s=1024x1024&w=is&k=20&c=OL5QAWwsPAphJkm0xq2pAtCsv-nBbQRoAXn2VABxOP0="
        />
    );
}

export default Avatar;
const AvatarImage = styled.image`
    width: "50px";
    height: "50px";
`;
