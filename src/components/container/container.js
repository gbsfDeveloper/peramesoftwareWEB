import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:${({width})=>{return (width !== undefined) ? width : '10vw'}};
    height:${({height})=>{return (height !== undefined) ? height : ''}};
    display:${({display})=>{return (display !== undefined) ? display : 'flex'}};
    flex:${({flex})=>{return (flex !== undefined) ? flex : ''}};
    flex-grow:${({flexGrow})=>{return (flexGrow !== undefined) ? flexGrow : ''}};
    flex-wrap: ${({flexWrap})=>{return (flexWrap !== undefined) ? flexWrap : 'nowrap'}};
    flex-direction:${({flexDirection})=>{return (flexDirection !== undefined) ? flexDirection : 'row'}};
    justify-content:${({justifyContent})=>{return (justifyContent !== undefined) ? justifyContent : 'center'}};
    justify-items:${({justifyItems})=>{return (justifyItems !== undefined) ? justifyItems : 'center'}};
    align-items:${({alignItems})=>{return (alignItems !== undefined) ? alignItems : 'center'}};
    align-content :${({alignContent})=>{return (alignContent !== undefined) ? alignContent : 'center'}};
    padding:${({padding})=>{return (padding !== undefined) ? padding : '0'}};
    margin:${({margin})=>{return (margin !== undefined) ? margin : '0'}};
    background:url(${({bgimage})=>{return (bgimage !== undefined) ? bgimage : 'none'}});
    background-size: 100% 100%;
    background-color:${({bgcolor})=>{return (bgcolor !== undefined) ? bgcolor : 'transparent'}};
    border:${({border})=>{return (border !== undefined) ? border : ''}};
    border-bottom:${({borderBottom})=>{return (borderBottom !== undefined) ? borderBottom : ''}};
    border-style:${({borderStyle})=>{return (borderStyle !== undefined) ? borderStyle : ''}};
    border-radius:${({borderRadius})=>{return (borderRadius !== undefined) ? borderRadius : ''}};
    box-shadow:${({boxShadow})=>{return (boxShadow !== undefined) ? boxShadow : ''}};
    overflow-x:${({overflowX})=>{return (overflowX !== undefined) ? overflowX : ''}};
    overflow-y:${({overflowY})=>{return (overflowY !== undefined) ? overflowY : ''}};
    overflow:${({orflow})=>{return (orflow !== undefined) ? orflow : ''}};
    &::-webkit-scrollbar {
        height:0.5rem;
        width:0.5rem;
    }
    &::-webkit-scrollbar-track {
        background-color:#C2C2C2;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #213078;
        border-radius: 10rem;
    }
`

const DefaultContainer = (props) =>{
    const {
        width,
        height,
        flexDirection,
        justifyItems,
        justifyContent,
        alignItems,
        alignContent,
        flexGrow,
        flexWrap,
        children,
        padding,
        margin,
        bgcolor,
        bgimage,
        border,
        borderStyle,
        boxShadow,
        display,
        borderBottom,
        borderRadius,
        overflowX,
        overflowY,
        overflow,
    } = props
    return(
        <Container 
            width={width}
            height={height}
            display={display}
            flexGrow={flexGrow}
            flexWrap={flexWrap}
            flexDirection={flexDirection}
            justifyItems={justifyItems}
            justifyContent={justifyContent}
            alignItems={alignItems}
            alignContent={alignContent}
            padding={padding}
            margin={margin}
            bgcolor={bgcolor}       
            bgimage={bgimage}       
            border={border}       
            borderStyle={borderStyle}       
            boxShadow={boxShadow}
            borderBottom={borderBottom}       
            borderRadius={borderRadius}       
            overflowX={overflowX}       
            overflowY={overflowY}       
            overflow={overflow}       
        >
            {children}
        </Container>
    )
}

export default DefaultContainer;