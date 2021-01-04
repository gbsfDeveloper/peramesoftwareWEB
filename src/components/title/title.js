import React,{useState} from 'react';
import styled from 'styled-components';
import px2vw from "../../utils/px2vw";
import Container from '../container';

const Title = styled.h2`
    font-weight:bold;
    font-size:${({FontSize})=>{return (FontSize != undefined) ? px2vw(FontSize) : px2vw(70)}};
    @media (min-width: 768px) {
        font-size: ${({FontSize})=>{return (FontSize != undefined) ? px2vw((FontSize - (FontSize * 0.3))) : px2vw(40)}};
    }

    @media (min-width: 1024px) {
        font-size: ${({FontSize})=>{return (FontSize != undefined) ? px2vw((FontSize - (FontSize * 0.35))) : px2vw(35)}};
    }
`;

const TitleComp = ({Text,Width,JustifyContent,Padding,FontSize}) =>{
    return(
        <Container width={Width} justifyContent={JustifyContent} padding={Padding}>
            <Title FontSize={FontSize}>
                {Text}
            </Title>
        </Container>
    )
}

export default TitleComp;