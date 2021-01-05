import React,{useState} from 'react';
import styled from 'styled-components';
import px2vw from "../../utils/px2vw";
import Container from '../container';

const Button = styled.a`
    width:${({ButtonWidth})=>{return (ButtonWidth !== undefined) ? ButtonWidth : '100%'}};
    text-align:center;
    height:${({ButtonHeight})=>{return (ButtonHeight !== undefined) ? ButtonHeight : ''}};
    padding:${({ButtonPadding})=>{return (ButtonPadding !== undefined) ? ButtonPadding : '0'}};
    background-color:${({ButtonBgColor})=>{return (ButtonBgColor !== undefined) ? ButtonBgColor : '#4298f4'}};
    border-radius:${({ButtonBorderRadius})=>{return (ButtonBorderRadius != undefined) ? px2vw(ButtonBorderRadius) : px2vw(250)}};
    border: none;
    outline: none;
    color:white;
    transition: 0.5s;
    &:hover{
        background-color:${({ButtonHoverBgColor})=>{return (ButtonHoverBgColor !== undefined) ? ButtonHoverBgColor : '#2c68a7'}};
        border:${({ButtonHoverBorder})=>{return (ButtonHoverBorder !== undefined) ? ButtonHoverBorder : 'none'}};
        cursor:${({ButtonHoverCursor})=>{return (ButtonHoverCursor !== undefined) ? ButtonHoverCursor : 'pointer'}};
    }
    
    font-size:${({FontSize})=>{return (FontSize != undefined) ? px2vw(FontSize) : px2vw(70)}};
    @media (min-width: 768px) {
        font-size: ${({FontSize})=>{return (FontSize != undefined) ? px2vw((FontSize - (FontSize * 0.3))) : px2vw(40)}};
    }

    @media (min-width: 1024px) {
        font-size: ${({FontSize})=>{return (FontSize != undefined) ? px2vw((FontSize - (FontSize * 0.35))) : px2vw(35)}};
    }
`;

const DefaultButton = ({
    Text,
    Width,
    Padding,
    JustifyContent,
    FontSize,
    ButtonWidth,
    ButtonHeight,
    ButtonPadding,
    ButtonBgColor,
    ButtonBorderRadius,
    ButtonHoverBgColor,
    ButtonHoverBorder,
    ButtonHoverCursor
}) =>{
    return(
        <Container width={Width} justifyContent={JustifyContent} padding={Padding}>
            <Button
                ButtonWidth={ButtonWidth}
                ButtonHeight={ButtonHeight}
                ButtonPadding={ButtonPadding}
                ButtonBgColor={ButtonBgColor}
                ButtonBorderRadius={ButtonBorderRadius}
                ButtonHoverBgColor={ButtonHoverBgColor}
                ButtonHoverBorder={ButtonHoverBorder}
                ButtonHoverCursor={ButtonHoverCursor}
                FontSize={FontSize}
            >
                {Text}
            </Button>
        </Container>
    )
}

export default DefaultButton;