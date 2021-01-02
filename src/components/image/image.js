import React from 'react';
import styled from 'styled-components';
import Container from '../container';

const Image = styled.img.attrs(({src,alt}) => ({
    src: (src != undefined) ? src : '/imgs/logo.svg',
    alt: (alt != undefined) ? alt : 'Logo',
  }))`
    width:6rem;
	min-width: 6rem;
	max-width: 6rem;
`;

const DefaultImage = (props) =>{
    return(
        <Container width={'10%'}>
            <Image/>
        </Container>
    )
}

export default DefaultImage;