import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.img.attrs(props => ({
    src: (props.src != undefined) ? props.src : '/imgs/logo.svg',
    alt: (props.alt != undefined) ? props.alt : 'Logo',
  }))`
    width:6rem;
	min-width: 6rem;
	max-width: 6rem;
`;

const DefaultImage = (props) =>{
    return(
        <ImageContainer>
        </ImageContainer>
    )
}

export default DefaultImage;