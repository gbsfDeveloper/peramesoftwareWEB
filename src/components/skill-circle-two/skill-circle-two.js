import React from 'react';
import styled from 'styled-components';
import px2vw from "../../utils/px2vw";
import Container from '../container';
import colors from '../../constants/Colors';

const Icon = styled.i.attrs(({Class,FontSize}) => ({
    className:  (Class !== undefined) ? Class : '',
  }))`
    padding-right:${({Class})=>{return (Class !== undefined) ? px2vw(10) : '0'}};
    font-size:${({FontSize})=>{return (FontSize !== undefined) ? px2vw(FontSize) : px2vw(70)}};
    color:${({Color})=>{return (Color !== undefined) ? Color : ''}};
`;

const SkillCircleTwo = ({
    ContainerWidth,
    ContainerHeight,
    BorderWith,
    BorderColor,
    IconClass,
    IconSize,
    IconColor
}) =>{
    return(
        <Container 
            width={ContainerWidth}
            height={ContainerHeight}
            margin={`${px2vw(30)} ${px2vw(30)}`}
            flexDirection={'row'}
            border= {`${BorderWith} solid ${BorderColor}`}
            borderRadius={'50%'}
        >
              <Icon 
                    Class={IconClass}  
                    FontSize={IconSize}
                    Color={IconColor}
                />                    
        </Container>
    )
}

export default SkillCircleTwo;