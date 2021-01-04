import React,{useState} from 'react';
import styled from 'styled-components';
import colors from '../../constants/Colors';
import px2vw from "../../utils/px2vw";

const SocialButton = styled.a.attrs(({href}) => ({
    href: (href != undefined) ? href : 'https://www.facebook.com/gelaciobenyair.santosfernandez.3',
    target: (href != undefined) ? '_blank' : '',
  }))`
    align-self:'center';
    justify-self:'center';
	font-size: ${px2vw(70)};
    padding-left: 0.8rem;
    transition: all 0.3s;
    &:visited{
        color:${colors.slowlycolor};
    }
    &:hover{
        font-size: ${px2vw(75)};
    }

    @media (min-width: 768px) {
        font-size: ${px2vw(50)};
        &:hover{
            font-size: ${px2vw(55)};
        }
    }

    @media (min-width: 1024px) {
        font-size: ${px2vw(40)};
        &:hover{
            font-size: ${px2vw(45)};
        }
    }
`;

const SocialIcon = styled.i.attrs(({Class}) => ({
    className:  (Class != undefined) ? Class : 'fab fa-facebook-square',
  }))`

`;

const SocButton = ({href,Class}) =>{
    return(
        <SocialButton href={href}>
            <SocialIcon Class={Class}/>
        </SocialButton>
    )
}

export default SocButton;