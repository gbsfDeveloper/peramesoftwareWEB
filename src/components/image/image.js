import React from 'react';
import styled from 'styled-components';
import Container from '../container';
import px2vw from "../../utils/px2vw";

const Image = styled.img.attrs(({src,alt}) => ({
    src: (src != undefined) ? src : '/imgs/logo.svg',
    alt: (alt != undefined) ? alt : 'Logo',
  }))`
    width:${({ImgWidth})=>{return (ImgWidth != undefined) ? px2vw(ImgWidth) : px2vw(70)}};

    @media (min-width: 768px) {
        width: ${({ImgWidth})=>{return (ImgWidth != undefined) ? px2vw((ImgWidth - (ImgWidth * 0.3))) : px2vw(40)}};
    }

    @media (min-width: 1024px) {
        width: ${({ImgWidth})=>{return (ImgWidth != undefined) ? px2vw((ImgWidth - (ImgWidth * 0.35))) : px2vw(35)}};
    }
`;

const DefaultImage = ({Width, Src, Alt, ImgWidth}) =>{
    return(
        <Container width={Width}>
            <Image src={Src} alt={Alt} ImgWidth={ImgWidth}/>
        </Container>
    )
}

export default DefaultImage;