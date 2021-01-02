import React,{useState} from 'react';
import styled from 'styled-components';
import colors from '../../constants/Colors';

const SocialButton = styled.a.attrs(({href}) => ({
    href: (href != undefined) ? href : 'https://www.facebook.com/gelaciobenyair.santosfernandez.3',
    target: (href != undefined) ? '_blank' : '',
  }))`
    align-self:'center';
    justify-self:'center';
	font-size: 1.5em;
    padding-left: 0.8em;
	/* display: inline-block; */
    transition: all 0.3s;
    &:hover{
        color:${colors.primary};
        font-size: 2em;
        padding-left: 0.4em;
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