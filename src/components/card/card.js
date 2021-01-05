import React,{useState} from 'react';
import styled from 'styled-components';
import px2vw from "../../utils/px2vw";
import colors from '../../constants/Colors';
import Container from '../container';
import Image from '../image';
import Title from '../title';
import Message from '../message';
import Button from '../button';

const Card = () =>{
    
    return(
        <Container
            width={'60vw'}
            height={px2vw(350)}
            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(50)}`}
            flexDirection={'row'}
            justifyContent={'space-between'}
            flexWrap={'nowrap'}
            bgcolor={'#FFFFFF'}
        >
            <Container
                width={'30vw'}
                height={'100%'}
                flexDirection={'column'}
                flexWrap={'wrap'}
                alignItems={'flex-start'}
                justifyContent={'center'}
            >
                <Title
                    Text={"Gelacio Ben Yair"}
                    Width={'100%'}
                    JustifyContent={'flex-start'}
                    FontSize={50}
                />
                <Message
                    Text={"Backend & Frontend Developer"}
                    Width={'100%'}
                    JustifyContent={'flex-start'}
                    FontSize={35}
                />
                <Message
                    Text={"La disciplina hace al exito"}
                    Width={'100%'}
                    JustifyContent={'flex-start'}
                    FontSize={22}
                />
                <Button
                    Text={"Portafolio"}
                    Width={'40%'}
                    FontSize={25}
                    Href={'https://github.com/gbsfDeveloper'}
                    Padding={`${px2vw(25)} 0vw 0vw 0vw`}
                    IconClassFA={'fas fa-folder-open'}
                    ButtonPadding={px2vw(10)}
                    ButtonBorderRadius={'0'}
                    ButtonBgColor={colors.primary}
                    ButtonFontColor={colors.white}
                    ButtonHoverFontColor={colors.white}
                />
            </Container>
            <Image
                Width={'20vw'}
                Height={'100%'}
                border={`${px2vw(2)} solid ${colors.slowlycolor2}`}
                borderStyle={'none none none solid'}
                ImgWidth={'250'}
                Src={'/imgs/foto.jpg'}
                BorderRadius={'150'}
            />
        </Container>
    )
}

export default Card;