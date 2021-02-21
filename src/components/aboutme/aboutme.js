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

const AboutMe = ({Display}) =>{
    return(
        <Container
            width={'100%'}
            height={px2vw(450)}
            display={Display}
            padding={`${px2vw(0)} ${px2vw(40)}`}
            bgcolor={colors.white}
            flexDirection={'column'}
            justifyContent={'flex-start'}
            alignItems={'flex-start'}
        >
            <Container
                width={'100%'}
                height={px2vw(130)}
                flexDirection={'column'}
                borderBottom={`1px solid ${colors.slowlycolor}`}
                bgcolor={colors.white}
                padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
            >
                <Title
                    Text={"Gelacio Santos Fernández"}
                    Width={'100%'}
                    JustifyContent={'flex-start'}
                    FontSize={50}
                    FontColor={colors.darkcolor}
                />
                <Message
                    Text={"Desarrollador Backend"}
                    Width={'100%'}
                    JustifyContent={'flex-start'}
                    FontSize={30}
                    FontColor={colors.darkcolor}
                />
            </Container>
            <Container
                width={'100%'}
                height={px2vw(10)}
                flexDirection={'row'}
                alignItems={'center'}
            >
            </Container>
            <Message
                Width={'100%'}
                Height={px2vw(80)}
                Text={"Mi meta más grande siempre fue desempeñarme como un profesional del desarrollo de software y aunque este mundo está en constante cambio, cada dia que pasa busco la forma de seguir aprendiendo y de mejorar continuamente, aprovechando al máximo todas las ventajas de las tendencias tecnológicas."}
                FontSize={22}
                TextAlign={'justify'}
            />
            <Message
                Width={'100%'}
                Height={px2vw(80)}
                TextBold={"Tecnologias que utilizo:"}
                FontSize={22}
                JustifyContent={'flex-start'}
                TextAlign={'left'}
            />
            <Container
                width={'100%'}
                height={px2vw(100)}
                flexDirection={'row'}
                alignItems={'center'}
            >
                {/* PHP */}
                <Container
                    // width={'10%'}
                    height={px2vw(100)}
                    flexDirection={'column'}
                >
                    <SkillCircle
                        FillValue={1}
                        TextColor={'#213078'}
                        Width={50}
                        Height={50}
                        TrackColor={'#F2F2F2'}
                        ProgressColor={'#213078'}
                        ProgressWidth={10}
                        TrackWidth={10}
                        LogoDY={'1rem'}
                        LogoFontSize={'2.5rem'}
                        LogoClass={''}
                        PercentageDY={'1.5rem'}
                        PercentageFontSize={'1rem'}
                        PercentageText={''}
                    />
                    <Title
                        Text={"PHP"}
                        Width={'100%'}
                        Padding={`${px2vw(10)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                        JustifyContent={'center'}
                        FontSize={20}
                    />
                </Container>
                 {/* PYTHON */}
                 <Container
                    // width={'10%'}
                    height={px2vw(100)}
                    flexDirection={'column'}
                >
                    <SkillCircle
                        FillValue={1}
                        TextColor={'#FFDB4E'}
                        Width={50}
                        Height={50}
                        TrackColor={'#F2F2F2'}
                        ProgressColor={'#FFDB4E'}
                        ProgressWidth={10}
                        TrackWidth={10}
                        LogoDY={'1rem'}
                        LogoFontSize={'2.5rem'}
                        LogoClass={''}
                        PercentageDY={'1.5rem'}
                        PercentageFontSize={'1rem'}
                        PercentageText={''}
                    />
                    <Title
                        Text={"Python"}
                        Width={'100%'}
                        Padding={`${px2vw(10)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                        JustifyContent={'center'}
                        FontSize={20}
                    />
                </Container>
                {/* NODE JS */}
                <Container
                    // width={'10%'}
                    height={px2vw(100)}
                    flexDirection={'column'}
                >
                    <SkillCircle
                        FillValue={1}
                        TextColor={'#168130'}
                        Width={50}
                        Height={50}
                        TrackColor={'#F2F2F2'}
                        ProgressColor={'#168130'}
                        ProgressWidth={10}
                        TrackWidth={10}
                        LogoDY={'1rem'}
                        LogoFontSize={'2.5rem'}
                        LogoClass={''}
                        PercentageDY={'1.5rem'}
                        PercentageFontSize={'1rem'}
                        PercentageText={''}
                    />
                    <Title
                        Text={"Node JS"}
                        Width={'100%'}
                        Padding={`${px2vw(10)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                        JustifyContent={'center'}
                        FontSize={20}
                    />
                </Container>
                {/* LINUX */}
                <Container
                    // width={'10%'}
                    height={px2vw(100)}
                    flexDirection={'column'}
                >
                    <SkillCircle
                        FillValue={1}
                        TextColor={'#E33434'}
                        Width={50}
                        Height={50}
                        TrackColor={'#F2F2F2'}
                        ProgressColor={'#E33434'}
                        ProgressWidth={10}
                        TrackWidth={10}
                        LogoDY={'1rem'}
                        LogoFontSize={'2.5rem'}
                        LogoClass={''}
                        PercentageDY={'1.5rem'}
                        PercentageFontSize={'1rem'}
                        PercentageText={''}
                    />
                    <Title
                        Text={"Linux"}
                        Width={'100%'}
                        Padding={`${px2vw(10)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                        JustifyContent={'center'}
                        FontSize={20}
                    />
                </Container>
                {/* DataBase */}
                <Container
                    // width={'10%'}
                    height={px2vw(100)}
                    flexDirection={'column'}
                >
                    <SkillCircle
                        FillValue={1}
                        TextColor={'#2677C7'}
                        Width={50}
                        Height={50}
                        TrackColor={'#F2F2F2'}
                        ProgressColor={'#2677C7'}
                        ProgressWidth={10}
                        TrackWidth={10}
                        LogoDY={'1rem'}
                        LogoFontSize={'2.5rem'}
                        LogoClass={''}
                        PercentageDY={'1.5rem'}
                        PercentageFontSize={'1rem'}
                        PercentageText={''}
                    />
                    <Title
                        Text={"SQL y MongoDB"}
                        Width={'100%'}
                        Padding={`${px2vw(10)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                        JustifyContent={'center'}
                        FontSize={20}
                    />
                </Container>
            </Container>
        </Container>
    )
}

export default AboutMe;