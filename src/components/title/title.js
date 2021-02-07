import React,{useState} from 'react';
import styled from 'styled-components';
import px2vw from "../../utils/px2vw";
import Container from '../container';

const Title = styled.h2`
    font-weight:bold;
    font-size:${({FontSize})=>{return (FontSize !== undefined) ? px2vw(FontSize) : px2vw(70)}};
    font-family:${({FontFamily})=>{return (FontFamily !== undefined) ? FontFamily : ''}};
    color:${({FontColor})=>{return (FontColor !== undefined) ? FontColor : ''}};
    @media (min-width: 768px) {
        font-size: ${({FontSize})=>{return (FontSize !== undefined) ? px2vw((FontSize - (FontSize * 0.3))) : px2vw(40)}};
    }

    @media (min-width: 1024px) {
        font-size: ${({FontSize})=>{return (FontSize !== undefined) ? px2vw((FontSize - (FontSize * 0.35))) : px2vw(35)}};
    }
`;

const TitleComp = ({Text,TextBold,Width,JustifyContent,Padding,FontSize,FontColor,FontFamily}) =>{
    return(
        <Container width={Width} justifyContent={JustifyContent} padding={Padding}>
            <Title FontSize={FontSize} FontFamily={FontFamily} FontColor={FontColor}>
                <b>{TextBold}</b>{Text}
            </Title>
        </Container>
    )
}

export default TitleComp;