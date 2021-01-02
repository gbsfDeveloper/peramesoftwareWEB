import React from 'react';
import styled from 'styled-components';
import Container from '../container';

const Title = styled.h2`
    font-weight:bold;
    font-size:${({fontSize})=>{return (fontSize != undefined) ? fontSize : '2rem'}};
`;

const TitleComp = ({text}) =>{
    return(
        <Container width={'80%'}justifyContent={'flex-start'}>
            <Title>
                {text}
            </Title>
        </Container>
    )
}

export default TitleComp;