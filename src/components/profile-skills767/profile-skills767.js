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

const ProfileSkils = ({Display}) =>{
    const sectionHeight = 2800;
    const titleContainerHeight = 200;
    const titleFontSize = 80;
    return(
        <Container
        width={'100%'}
        height={px2vw(sectionHeight)}
        display={Display}
        flexDirection={'column'}
        justifyContent={'flex-start'}
        bgcolor={colors.white}
        padding={`${px2vw(20)} ${px2vw(0)} ${px2vw(0)} ${px2vw(40)}`}
    >
        <Container
            width={'100%'}
            height={px2vw(titleContainerHeight)}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(30)} ${px2vw(0)}`}
        >
            <Container
                width={'2%'}
            >
                <Icon 
                    Class={'fas fa-caret-right'}
                    FontSize={75}
                />
            </Container>
            <Message
                TextBold={"Programming Languages: "}
                Width={'90%'}
                JustifyContent={'flex-start'}
                FontSize={titleFontSize}
            />
        </Container>
        
        <Container
            width={'100%'}
            height={px2vw(250)}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(50)}`}
        >
            <Message
                TextBold={"General Purpose Languages: "}
                Text={"Python, C++"}
                Width={'90%'}
                JustifyContent={'flex-start'}
                FontSize={70}
            />
        </Container>

        <Container
            width={'100%'}
            height={px2vw(250)}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(50)}`}
        >
            <Message
                TextBold={"Web Languages: "}
                Text={"Typescript / Javascript, PHP"}
                Width={'90%'}
                JustifyContent={'flex-start'}
                FontSize={70}
            />
        </Container>
        <Container
            width={'100%'}
            height={px2vw(250)}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(50)}`}
        >
            <Message
                TextBold={"Web Technologies: "}
                Text={"React JS, CSS, HTML"}
                Width={'90%'}
                JustifyContent={'flex-start'}
                FontSize={70}
            />
        </Container>
        <Container
            width={'100%'}
            height={px2vw(250)}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(50)}`}
        >
            <Message
                TextBold={"Frameworks & Libraries: "}
                Text={"Laravel, Yii2, React JS, Flask"}
                Width={'90%'}
                JustifyContent={'flex-start'}
                FontSize={70}
            />
        </Container>
        <Container
            width={'100%'}
            height={px2vw(titleContainerHeight)}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(10)}`}
        >
            <Container
                width={'2%'}
            >
                <Icon 
                    Class={'fas fa-caret-right'}
                    FontSize={75}
                />
            </Container>
            <Message
                TextBold={"Data Bases: "}
                Width={'90%'}
                JustifyContent={'flex-start'}
                FontSize={titleFontSize}
            />
        </Container>
        <Container
            width={'100%'}
            height={px2vw(150)}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(40)}`}
        >
            <Message
                TextBold={"Relational: "}
                Text={"SQL Server, MySql"}
                Width={'90%'}
                JustifyContent={'flex-start'}
                FontSize={70}
            />
        </Container>
        <Container
            width={'100%'}
            height={px2vw(150)}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(40)}`}
        >
            <Message
                TextBold={"No Relational: "}
                Text={"Mongo DB"}
                Width={'90%'}
                JustifyContent={'flex-start'}
                FontSize={70}
            />
        </Container>
        <Container
            width={'100%'}
            height={px2vw(titleContainerHeight)}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(10)}`}
        >
            <Container
                width={'2%'}
            >
                <Icon 
                    Class={'fas fa-caret-right'}
                    FontSize={75}
                />
            </Container>
            <Message
                TextBold={"Servers: "}
                Width={'90%'}
                JustifyContent={'flex-start'}
                FontSize={titleFontSize}
            />
        </Container>
        <Container
            width={'100%'}
            height={px2vw(150)}
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
                FontSize={70}
            />
        </Container>
        <Container
            width={'100%'}
            height={px2vw(titleContainerHeight)}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(10)}`}
        >
            <Container
                width={'2%'}
            >
                <Icon 
                    Class={'fas fa-caret-right'}
                    FontSize={75}
                />
            </Container>
            <Message
                TextBold={"Google Technologies: "}
                Width={'90%'}
                JustifyContent={'flex-start'}
                FontSize={titleFontSize}
            />
        </Container>
        <Container
            width={'100%'}
            height={px2vw(250)}
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
                FontSize={70}
            />
        </Container>
        <Container
            width={'100%'}
            height={px2vw(titleContainerHeight)}
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
                    FontSize={75}
                />
            </Container>
            <Message
                TextBold={"Videogame Development: "}
                Width={'90%'}
                JustifyContent={'flex-start'}
                FontSize={titleFontSize}
            />
        </Container>
        <Container
            width={'100%'}
            height={px2vw(150)}
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
                FontSize={70}
            />
        </Container>
        
    </Container>
    )
}

export default ProfileSkils;