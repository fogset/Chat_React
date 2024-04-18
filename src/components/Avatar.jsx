import React from "react";
import styled from "styled-components";
function Avatar({ src, height, width, shape }) {
    return <AvatarImage width={width} height={height} shape={shape} src={src} />;
}
//firebasestorage.googleapis.com/v0/b/chat-b1814.appspot.com/o/images%2FWed%20Apr%2017%202024%2016%3A44%3A50%20GMT-0600%20(Mountain%20Daylight%20Time)?alt=media&token=c0054b9b-1c0e-4aef-b1bd-26cb334dbd53
export default Avatar;
const AvatarImage = styled.img`
    width: ${(props) => (props.width ? props.width : "auto")};
    height: ${(props) => (props.height ? props.height : "auto")};
    object-fit: cover;
    border-radius: ${(props) => (props.shape ? props.shape : "50px")};
`;
