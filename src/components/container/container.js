import React from 'react';
import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

const Container = styled.div`
    width:${({width})=>{return (width !== undefined) ? width : '10vw'}};
    max-width: ${({width})=>{return (width !== undefined) ? width : '10vw'}};;
    display:flex;
    flex-grow:${({flexGrow})=>{return (flexGrow !== undefined) ? flexGrow : ''}};
    flex-wrap: ${({flexWrap})=>{return (flexWrap !== undefined) ? flexWrap : 'nowrap'}};
    flex-direction:${({flexDirection})=>{return (flexDirection !== undefined) ? flexDirection : 'row'}};
    justify-content:${({justifyContent})=>{return (justifyContent !== undefined) ? justifyContent : 'center'}};
    justify-items:${({justifyItems})=>{return (justifyItems !== undefined) ? justifyItems : 'center'}};
    align-items:${({alignItems})=>{return (alignItems !== undefined) ? alignItems : 'center'}};
    align-content :${({alignContent})=>{return (alignContent !== undefined) ? alignContent : 'center'}};
    padding:${({padding})=>{return (padding !== undefined) ? padding : '0'}};
    
    @media (min-width: 1024px) {
        flex-wrap: nowrap;
    }
`

const DefaultContainer = (props) =>{
    const {width,flexDirection,justifyItems,justifyContent,alignItems,alignContent,flexGrow,flexWrap,children,padding} = props
    return(
        <Container 
            width={width}
            flexGrow={flexGrow}
            flexWrap={flexWrap}
            flexDirection={flexDirection}
            justifyItems={justifyItems}
            justifyContent={justifyContent}
            alignItems={alignItems}
            alignContent={alignContent}
            padding={padding}
            >
            {children}
        </Container>
    )
}

export default DefaultContainer;