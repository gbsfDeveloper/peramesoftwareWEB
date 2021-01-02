import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.img`
    width: 20%;
    height: 50%;
    padding:3rem 1rem;
    border-radius: 0.4em 0em 0em 0.4em;
    background:url(${props => props.mimg});
`;

const DefaultImage = (props) =>{
    const Mimg = props.Mimg;
    console.log(props.Mimg);
    return(
        <ImageContainer mimg={Mimg}>
        </ImageContainer>
    )
}

export default DefaultImage;