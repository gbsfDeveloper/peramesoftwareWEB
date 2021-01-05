import React,{useState} from 'react';
import styled from 'styled-components';
import px2vw from "../../utils/px2vw";
import colors from '../../constants/Colors';
import Container from '../container';
import Button from '../button';

const NavBar = () =>{
    return(
        <Container
            width={'60vw'}
            height={px2vw(100)}
            bgcolor={'#FFFFFF'}
        >
            <Button
                    Text={"Sobre mi"}
                    Width={'15%'}
                    Height={'100%'}
                    FontSize={20}
                    Href={'#'}
                    HrefTarget={''}
                    ButtonWidth={'100%'}
                    ButtonPadding={px2vw(10)}
                    ButtonBorderRadius={'0'}
                    ButtonBgColor={'transparent'}
                    ButtonHoverBgColor={colors.primary}
                    ButtonFontColor={colors.primary}
                    ButtonHoverFontColor={colors.white}
                />
            <Button
                    Text={"Habilidades"}
                    Width={'15%'}
                    Height={'100%'}
                    FontSize={20}
                    Href={'#'}
                    HrefTarget={''}
                    ButtonWidth={'100%'}
                    ButtonPadding={px2vw(10)}
                    ButtonBorderRadius={'0'}
                    ButtonBgColor={'transparent'}
                    ButtonHoverBgColor={colors.primary}
                    ButtonFontColor={colors.primary}
                    ButtonHoverFontColor={colors.white}
                />
            <Button
                    Text={"Experiencia"}
                    Width={'15%'}
                    Height={'100%'}
                    FontSize={20}
                    Href={'#'}
                    HrefTarget={''}
                    ButtonWidth={'100%'}
                    ButtonPadding={px2vw(10)}
                    ButtonBorderRadius={'0'}
                    ButtonBgColor={'transparent'}
                    ButtonHoverBgColor={colors.primary}
                    ButtonFontColor={colors.primary}
                    ButtonHoverFontColor={colors.white}
                />
            <Button
                    Text={"Contacto"}
                    Width={'15%'}
                    Height={'100%'}
                    FontSize={20}
                    Href={'#'}
                    HrefTarget={''}
                    ButtonWidth={'100%'}
                    ButtonPadding={px2vw(10)}
                    ButtonBorderRadius={'0'}
                    ButtonBgColor={'transparent'}
                    ButtonHoverBgColor={colors.primary}
                    ButtonFontColor={colors.primary}
                    ButtonHoverFontColor={colors.white}
                />
        </Container>
    )
}

export default NavBar;