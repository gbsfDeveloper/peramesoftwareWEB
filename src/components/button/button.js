import React,{useState} from 'react';
import styled,{keyframes} from 'styled-components';
import px2vw from "../../utils/px2vw";
import Container from '../container';

const Button = styled.a.attrs(({Href,HrefTarget,OnClick}) => ({
    href: (Href !== undefined) ? Href : 'https://www.facebook.com/gelaciobenyair.santosfernandez.3',
    target: (HrefTarget !== undefined) ? HrefTarget : '_blank',
    onClick:(OnClick !== undefined) ? OnClick : ''
  }))`
    width:${({ButtonWidth})=>{return (ButtonWidth !== undefined) ? ButtonWidth : '100%'}};
    height:${({ButtonHeight})=>{return (ButtonHeight !== undefined) ? ButtonHeight : ''}};
    text-align:center;
    text-decoration:none;
    padding:${({ButtonPadding})=>{return (ButtonPadding !== undefined) ? ButtonPadding : '0'}};
    color:${({ButtonFontColor})=>{return (ButtonFontColor !== undefined) ? ButtonFontColor : 'black'}};
    background-color:${({ButtonBgColor})=>{return (ButtonBgColor !== undefined) ? ButtonBgColor : 'transparent'}};
    border-radius:${({ButtonBorderRadius})=>{return (ButtonBorderRadius !== undefined) ? px2vw(ButtonBorderRadius) : px2vw(250)}};
    border: none;
    outline: none;
    transition: 0.5s;
    &:hover{
        background-color:${({ButtonHoverBgColor})=>{return (ButtonHoverBgColor !== undefined) ? ButtonHoverBgColor : '#2c68a7'}};
        border:${({ButtonHoverBorder})=>{return (ButtonHoverBorder !== undefined) ? ButtonHoverBorder : 'none'}};
        cursor:${({ButtonHoverCursor})=>{return (ButtonHoverCursor !== undefined) ? ButtonHoverCursor : 'pointer'}};
        color:${({ButtonHoverFontColor})=>{return (ButtonHoverFontColor !== undefined) ? ButtonHoverFontColor : 'black'}};
    }
    
    font-size:${({FontSize})=>{return (FontSize !== undefined) ? px2vw(FontSize) : px2vw(70)}};
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Icon = styled.i.attrs(({Class}) => ({
    className:  (Class !== undefined) ? Class : '',
  }))`
    padding-right:${({Padding})=>{return (Padding !== undefined) ? Padding : '0'}};
    animation: ${({IsIconAnimate})=>{return (IsIconAnimate !== undefined) ? `${rotate} 2s linear infinite` : ''}} ;
`;

const DefaultButton = ({
    Text,
    Width,
    Height,
    Padding,
    JustifyContent,
    FontSize,
    Href,
    HrefTarget,
    ButtonWidth,
    ButtonHeight,
    ButtonPadding,
    ButtonBgColor,
    ButtonBorderRadius,
    ButtonHoverBgColor,
    ButtonHoverBorder,
    ButtonHoverCursor,
    ButtonFontColor,
    ButtonHoverFontColor,
    IconClassFA,
    OnClick,
    IsAnimate
}) =>{
    return(
        <Container width={Width} height={Height} justifyContent={JustifyContent} padding={Padding}>
            <Button
                ButtonWidth={ButtonWidth}
                ButtonHeight={ButtonHeight}
                ButtonPadding={ButtonPadding}
                ButtonBgColor={ButtonBgColor}
                ButtonBorderRadius={ButtonBorderRadius}
                ButtonHoverBgColor={ButtonHoverBgColor}
                ButtonHoverBorder={ButtonHoverBorder}
                ButtonHoverCursor={ButtonHoverCursor} 
                ButtonFontColor={ButtonFontColor} 
                ButtonHoverFontColor={ButtonHoverFontColor} 
                FontSize={FontSize}
                Href={Href}
                HrefTarget={HrefTarget}
                OnClick={OnClick}
            >
                <Icon Class={IconClassFA}/>
                {Text}
            </Button>
        </Container>
    )
}

export default DefaultButton;