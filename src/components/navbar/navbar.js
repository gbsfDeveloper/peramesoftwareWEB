import React,{useState} from 'react';
import styled from 'styled-components';
import px2vw from "../../utils/px2vw";
import colors from '../../constants/Colors';
import Container from '../container';
import Button from '../button';

const NavBar = () =>{
    const buttonsContent = [
        {
            text:"Sobre mi",
            href:"#",
            hrefTarget:""
        },
        {
            text:"Habilidades",
            href:"#",
            hrefTarget:""
        },
        {
            text:"Experiencia",
            href:"#",
            hrefTarget:""
        },
        {
            text:"Contacto",
            href:"#",
            hrefTarget:""
        }
    ]
    const buttonsList = buttonsContent.map((button)=>{
        return <Button
            Text={button.text}
            Width={'15%'}
            Height={'100%'}
            FontSize={20}
            Href={button.href}
            HrefTarget={button.hrefTarget}
            ButtonWidth={'100%'}
            ButtonPadding={px2vw(10)}
            ButtonBorderRadius={'0'}
            ButtonBgColor={'transparent'}
            ButtonHoverBgColor={colors.primary}
            ButtonFontColor={colors.primary}
            ButtonHoverFontColor={colors.white}
        />
    })
    return(
        <Container
            width={'60vw'}
            height={px2vw(100)}
            bgcolor={'#FFFFFF'}
        >
            {buttonsList}
        </Container>
    )
}

export default NavBar;