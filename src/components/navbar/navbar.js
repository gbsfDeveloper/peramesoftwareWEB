import React,{useState} from 'react';
import styled from 'styled-components';
import px2vw from "../../utils/px2vw";
import colors from '../../constants/Colors';
import Container from '../container';
import Button from '../button';
import Title from '../title';

const NavBar = ({HandleSection,SectionsState}) =>{
    const buttonsContent = [
        {
            text:"Acerca de",
            section:'About',
            href:"#",
            hrefTarget:"",
            HandleSection:HandleSection,
            SectionsState:SectionsState.About
        },
        {
            text:"Experiencia",
            section:'Experience',
            href:"#",
            hrefTarget:"",
            HandleSection:HandleSection,
            SectionsState:SectionsState.Experience
        },
        {
            text:"Tecnologías",
            section:'Skills',
            href:"#",
            hrefTarget:"",
            HandleSection:HandleSection,
            SectionsState:SectionsState.Skills
        },
        {
            text:"Proyectos",
            section:'Contact',
            href:"#",
            hrefTarget:"",
            HandleSection:HandleSection,
            SectionsState:SectionsState.Contact
        }
    ]
    const buttonsList = buttonsContent.map((button)=>{
        return <Button
            onClick={(e)=>{
                e.preventDefault();
                button.HandleSection(button.section)
            }}
            key={button.text}
            Text={button.text}
            Width={'12.5vw'}
            height={px2vw(100)}
            FontSize={20}
            Href={button.href}
            HrefTarget={button.hrefTarget}
            ButtonWidth={'100%'}
            ButtonHeight={px2vw(100)}
            ButtonPadding={`${px2vw(40)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
            ButtonBorderRadius={'0'}
            ButtonBgColor={button.SectionsState.isActive ? colors.white :colors.darkcolor}
            ButtonFontColor={button.SectionsState.isActive ? colors.darkcolor :colors.white}
            ButtonHoverBgColor={colors.white}
            ButtonHoverFontColor={colors.darkcolor}
        />
    })
    return(
        <Container
            width={'70vw'}
            height={px2vw(100)}
            bgcolor={colors.darkcolor}
            justifyContent={'flex-start'}
        >
            <Container
                width={'20vw'}
                height={px2vw(100)}
                justifyContent={'flex-start'}
            >
                <Title
                    Text={"Informacion General"}
                    Width={'100%'}
                    FontSize={35}
                    FontColor={colors.white}
                />
            </Container>
            {buttonsList}
        </Container>
    )
}

export default NavBar;