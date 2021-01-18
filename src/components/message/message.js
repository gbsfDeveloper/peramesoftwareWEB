import React from 'react';
import styled from 'styled-components';
import px2vw from "../../utils/px2vw";
import Container from '../container';

const Message = styled.p`
    font-weight:normal;
    font-size:${({FontSize})=>{return (FontSize !== undefined) ? px2vw(FontSize) : px2vw(70)}};
    text-align:${({TextAlign})=>{return (TextAlign !== undefined) ? TextAlign : 'left'}};
    @media (min-width: 768px) {
        font-size: ${({FontSize})=>{return (FontSize !== undefined) ? px2vw((FontSize - (FontSize * 0.3))) : px2vw(40)}};
    }

    @media (min-width: 1024px) {
        font-size: ${({FontSize})=>{return (FontSize !== undefined) ? px2vw((FontSize - (FontSize * 0.35))) : px2vw(35)}};
    }
`;

const MessageComp = ({Text,Width,Height, JustifyContent,AlignContent,Padding,FontSize,TextAlign}) =>{
    return(
        <Container width={Width} height={Height} alignContent={AlignContent} justifyContent={JustifyContent} padding={Padding}>
            <Message FontSize={FontSize} TextAlign={TextAlign}>
                {Text}
            </Message>
        </Container>
    )
}

export default MessageComp;