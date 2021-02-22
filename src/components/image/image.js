import React from 'react';
import styled from 'styled-components';
import Container from '../container';
import px2vw from "../../utils/px2vw";

const Image = styled.img.attrs(({src,alt}) => ({
    src: (src !== undefined) ? src : '',
    // alt: (alt !== undefined) ? alt : 'Logo',
  }))`
    border-radius:${({BorderRadius})=>{return (BorderRadius !== undefined) ? px2vw(BorderRadius) : px2vw(0)}};
    width:${({ImgWidth})=>{return (ImgWidth !== undefined) ? px2vw(ImgWidth) : px2vw(70)}};
`;

const DefaultImage = ({Width, Height, Src, Alt, ImgWidth, BorderRadius,border,borderStyle,BgImage}) =>{
    return(
        <Container width={Width} height={Height} border={border} borderStyle={borderStyle} bgimage={BgImage}>
            <Image src={Src} alt={Alt} ImgWidth={ImgWidth} BorderRadius={BorderRadius}/>
        </Container>
    )
}

export default DefaultImage;