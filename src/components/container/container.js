import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:${({width})=>{return (width !== undefined) ? width : '10%'}};
    display:flex;
    flex-wrap: ${({flexWrap})=>{return (flexWrap !== undefined) ? flexWrap : 'row'}};
    flex-direction:${({flexDirection})=>{return (flexDirection !== undefined) ? flexDirection : 'row'}};
    justify-content:${({justifyContent})=>{return (justifyContent !== undefined) ? justifyContent : 'center'}};
    justify-items:${({justifyItems})=>{return (justifyItems !== undefined) ? justifyItems : 'center'}};
    align-items:${({alignItems})=>{return (alignItems !== undefined) ? alignItems : 'center'}};
    align-content :${({alignContent})=>{return (alignContent !== undefined) ? alignContent : 'center'}};
`

const DefaultContainer = (props) =>{
    const {width,flexDirection,justifyItems,justifyContent,alignItems,alignContent,children} = props
    return(
        <Container 
            width={width}
            flexDirection={flexDirection}
            justifyItems={justifyItems}
            justifyContent={justifyContent}
            alignItems={alignItems}
            alignContent={alignContent}
            >
            {children}
        </Container>
    )
}

export default DefaultContainer;