import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:${({width})=>{return (width != undefined) ? width : '10%'}};
`

const DefaultContainer = ({width, children}) =>{
    return(
        <Container width={width}>
            {children}
        </Container>
    )
}

export default DefaultContainer;