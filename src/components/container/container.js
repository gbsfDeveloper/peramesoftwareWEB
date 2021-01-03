import React from 'react';
import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

const Container = styled.div`
    width:${({width})=>{return (width !== undefined) ? width : '10vw'}};
    max-width: 100%;
    display:flex;
    flex-grow:${({flexGrow})=>{return (flexGrow !== undefined) ? flexGrow : ''}};
    flex-wrap: ${({flexWrap})=>{return (flexWrap !== undefined) ? flexWrap : 'row'}};
    flex-direction:${({flexDirection})=>{return (flexDirection !== undefined) ? flexDirection : 'row'}};
    justify-content:${({justifyContent})=>{return (justifyContent !== undefined) ? justifyContent : 'center'}};
    justify-items:${({justifyItems})=>{return (justifyItems !== undefined) ? justifyItems : 'center'}};
    align-items:${({alignItems})=>{return (alignItems !== undefined) ? alignItems : 'center'}};
    align-content :${({alignContent})=>{return (alignContent !== undefined) ? alignContent : 'center'}};
    
    @media (min-width: 1024px) {
        flex-wrap: nowrap;
    }
`

const DefaultContainer = (props) =>{
    const {width,flexDirection,justifyItems,justifyContent,alignItems,alignContent,flexGrow,children} = props
    return(
        <Container 
            width={width}
            flexGrow={flexGrow}
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