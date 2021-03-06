import React,{useState} from 'react';
import styled from 'styled-components';
import px2vw from "../../utils/px2vw";
import colors from '../../constants/Colors';
import Container from '../container';
import Title from '../title';
import Message from '../message';
import SkillCircle from '../skill-circle';

const Icon = styled.i.attrs(({Class,FontSize}) => ({
    className:  (Class !== undefined) ? Class : '',
  }))`
    padding-right:${({Class})=>{return (Class !== undefined) ? px2vw(10) : '0'}};
    font-size:${({FontSize})=>{return (FontSize !== undefined) ? px2vw(FontSize) : px2vw(70)}};
`;
const skillTitles = 18;
const skillVineta = 20;
const skillText = 15;
const ProfileSkils = ({Display}) =>{
    return(
        <Container
        width={'100%'}
        height={px2vw(450)}
        display={Display}
        flexDirection={'column'}
        bgcolor={colors.white}
        padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(40)}`}
    >
        <Container
            width={'100%'}
            height={px2vw(50)}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(20)}`}
        >
            <Container
                width={'2%'}
            >
                <Icon 
                    Class={'fas fa-caret-right'}
                    FontSize={skillVineta}
                />
            </Container>
            <Message
                TextBold={"Lenguajes de programacion: "}
                Width={'90%'}
                JustifyContent={'flex-start'}
                FontSize={skillTitles}
            />
        </Container>
        <Container
            width={'100%'}
            height={px2vw(20)}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(40)}`}
        >
            <Message
                TextBold={"Lenguajes de proposito general: "}
                Text={"Python, C++"}
                Width={'90%'}
                JustifyContent={'flex-start'}
                FontSize={skillText}
            />
        </Container>
        <Container
            width={'100%'}
            height={px2vw(20)}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(40)}`}
        >
            <Message
                TextBold={"Lenguajes Web: "}
                Text={"PHP, Javascript"}
                Width={'90%'}
                JustifyContent={'flex-start'}
                FontSize={skillText}
            />
        </Container>
        <Container
            width={'100%'}
            height={px2vw(20)}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(40)}`}
        >
            <Message
                TextBold={"Tecnologias Web: "}
                Text={"React JS, CSS, HTML"}
                Width={'90%'}
                JustifyContent={'flex-start'}
                FontSize={skillText}
            />
        </Container>
        <Container
            width={'100%'}
            height={px2vw(20)}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(40)}`}
        >
            <Message
                TextBold={"Frameworks y Librerias: "}
                Text={"Yii2, React JS, Flask, Django"}
                Width={'90%'}
                JustifyContent={'flex-start'}
                FontSize={skillText}
            />
        </Container>
        <Container
            width={'100%'}
            height={px2vw(50)}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(20)}`}
        >
            <Container
                width={'2%'}
            >
                <Icon 
                    Class={'fas fa-caret-right'}
                    FontSize={skillVineta}
                />
            </Container>
            <Message
                TextBold={"Bases de Datos: "}
                Width={'90%'}
                JustifyContent={'flex-start'}
                FontSize={skillTitles}
            />
        </Container>
        <Container
            width={'100%'}
            height={px2vw(20)}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(40)}`}
        >
            <Message
                TextBold={"Relacionales: "}
                Text={"SQL Server, MySql"}
                Width={'90%'}
                JustifyContent={'flex-start'}
                FontSize={skillText}
            />
        </Container>
        <Container
            width={'100%'}
            height={px2vw(20)}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(40)}`}
        >
            <Message
                TextBold={"No Relacionales: "}
                Text={"Mongo DB"}
                Width={'90%'}
                JustifyContent={'flex-start'}
                FontSize={skillText}
            />
        </Container>
        <Container
            width={'100%'}
            height={px2vw(50)}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(20)}`}
        >
            <Container
                width={'2%'}
            >
                <Icon 
                    Class={'fas fa-caret-right'}
                    FontSize={skillVineta}
                />
            </Container>
            <Message
                TextBold={"Servidores: "}
                Width={'90%'}
                JustifyContent={'flex-start'}
                FontSize={skillTitles}
            />
        </Container>
        <Container
            width={'100%'}
            height={px2vw(20)}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(40)}`}
        >
            <Message
                TextBold={"Linux: "}
                Text={"Ubuntu, Cent OS, SUSE"}
                Width={'90%'}
                JustifyContent={'flex-start'}
                FontSize={skillText}
            />
        </Container>
        <Container
            width={'100%'}
            height={px2vw(50)}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(20)}`}
        >
            <Container
                width={'2%'}
            >
                <Icon 
                    Class={'fas fa-caret-right'}
                    FontSize={skillVineta}
                />
            </Container>
            <Message
                TextBold={"Tecnologias Google: "}
                Width={'90%'}
                JustifyContent={'flex-start'}
                FontSize={skillTitles}
            />
        </Container>
        <Container
            width={'100%'}
            height={px2vw(20)}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(40)}`}
        >
            <Message
                TextBold={"Firebase: "}
                Text={"Cloud Messagging, Realtime Database"}
                Width={'90%'}
                JustifyContent={'flex-start'}
                FontSize={skillText}
            />
        </Container>
        <Container
            width={'100%'}
            height={px2vw(50)}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(20)}`}
        >
            <Container
                width={'2%'}
            >
                <Icon 
                    Class={'fas fa-caret-right'}
                    FontSize={skillVineta}
                />
            </Container>
            <Message
                TextBold={"Desarrollo de Videojuegos: "}
                Width={'90%'}
                JustifyContent={'flex-start'}
                FontSize={skillTitles}
            />
        </Container>
        <Container
            width={'100%'}
            height={px2vw(20)}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(40)}`}
        >
            <Message
                TextBold={"Engines: "}
                Text={"Phaser, Godot"}
                Width={'90%'}
                JustifyContent={'flex-start'}
                FontSize={skillText}
            />
        </Container>
        
    </Container>
    )
}

export default ProfileSkils;