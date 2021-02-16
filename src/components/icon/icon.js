import React,{useState} from 'react';
import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

const Icon = styled.i.attrs(({Class}) => ({
    className:  (Class !== undefined) ? Class : '',
  }))`
    padding:${({Padding})=>{return (Padding !== undefined) ? Padding : '0'}};
    font-size:${({FontSize})=>{return (FontSize !== undefined) ? px2vw(FontSize) : px2vw(70)}};
    color:${({FontColor})=>{return (FontColor !== undefined) ? px2vw(FontColor) : ''}};
`;

const DefaultIcon = ({Class,FontSize,FontColor}) =>{
    return(
        <Icon 
            Class={Class}  
            FontColor={FontColor}  
            FontSize={FontSize}
        />
    )
}

export default DefaultIcon;