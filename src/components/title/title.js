import React from 'react';
import styled from 'styled-components';
import px2vw from "../../utils/px2vw";
import Container from '../container';

const Title = styled.h2`
    font-weight:bold;
    font-size:${({fontSize})=>{return (fontSize != undefined) ? fontSize : px2vw(70)}};
    @media (min-width: 768px) {
        font-size: ${px2vw(40)};
    }

    @media (min-width: 1024px) {
        font-size: ${px2vw(35)};
    }
`;

const TitleComp = ({text}) =>{
    return(
        <Container width={'80vw'} justifyContent={'flex-start'} padding={`0vw 0vw 0vw ${px2vw(15)}` }>
            <Title>
                {text}
            </Title>
        </Container>
    )
}

export default TitleComp;