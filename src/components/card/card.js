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
            width={'20vw'}
            height={px2vw(450)}
            // padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(50)}`}
            flexDirection={'column'}
            justifyContent={'space-between'}
            flexWrap={'nowrap'}
            bgcolor={'#FFFFFF'}
        >
            <Image
                Width={'100%'}
                Height={px2vw(300)}
                BgImage={'/imgs/foto.jpg'}
            />
            <Container
                width={'20vw'}
                height={px2vw(150)}
                flexDirection={'column'}
                flexWrap={'wrap'}
                alignItems={'flex-start'}
                justifyContent={'center'}
                bgcolor={'#213078'}
                padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(20)}`}
            >
                <Message
                    Text={"Name: Gelacio Ben Yair"}
                    Width={'100%'}
                    Height={px2vw(30)}
                    JustifyContent={'flex-start'}
                    FontSize={22}
                    FontColor={'#FFFFFF'}
                />
                <Message
                    Text={"Location: Mexico City"}
                    Width={'100%'}
                    Height={px2vw(30)}
                    JustifyContent={'flex-start'}
                    FontSize={22}
                    FontColor={'#FFFFFF'}
                />
                <Message
                    Text={"Date of Birth: 11 Agosto 1993"}
                    Width={'100%'}
                    Height={px2vw(30)}
                    JustifyContent={'flex-start'}
                    FontSize={22}
                    FontColor={'#FFFFFF'}
                />
                {/* <Button
                    Text={"Portafolio"}
                    Width={'40%'}
                    FontSize={12}
                    Href={'https://github.com/gbsfDeveloper'}
                    Padding={`${px2vw(25)} 0vw 0vw 0vw`}
                    IconClassFA={'fas fa-folder-open'}
                    ButtonPadding={px2vw(10)}
                    ButtonBorderRadius={'0'}
                    ButtonBgColor={colors.primary}
                    ButtonFontColor={colors.white}
                    ButtonHoverFontColor={colors.white}
                /> */}
            </Container>
            
        </Container>
    )
}

export default Card;