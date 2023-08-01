import React from 'react';
import styled from 'styled-components';
import px2vw from "../../utils/px2vw";
import colors from '../../constants/Colors';
import Container from '../container';
import Message from '../message';

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
                // TextBold={"Lenguajes de programacion: "}
                TextBold={"Programming Languages: "}
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
                TextBold={"General Purpose Languages: "}
                // TextBold={"Lenguajes de proposito general: "}
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
                // TextBold={"Lenguajes Web: "}
                TextBold={"Web Languages: "}
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
                // TextBold={"Tecnologias Web: "}
                TextBold={"Web Technologies: "}
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
                TextBold={"Frameworks & Libraries: "}
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
                // TextBold={"Bases de Datos: "}
                TextBold={"Data Bases: "}
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
                // TextBold={"Relacionales: "}
                TextBold={"Relational: "}
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
                // TextBold={"No Relacionales: "}
                TextBold={"No Relational: "}
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
                // TextBold={"Servidores: "}
                TextBold={"Servers: "}
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
                // TextBold={"Tecnologias Google: "}
                TextBold={"Google Technologies: "}
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
                // TextBold={"Desarrollo de Videojuegos: "}
                TextBold={"Videogame Development: "}
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
                Text={"Unity, Phaser, Godot"}
                Width={'90%'}
                JustifyContent={'flex-start'}
                FontSize={skillText}
            />
        </Container>
        
    </Container>
    )
}

export default ProfileSkils;