import React,{useState} from 'react';
import useViewport from '../../hooks/useViewport';
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
    let {Width} = useViewport();
    const SkillCirclesData = [
        {
            Text:'PHP',
            Color:'#213078',
            LogoClass:''
        },
        {
            Text:'Python',
            Color:'#FFDB4E',
            LogoClass:''
        },
        {
            Text:'Node JS',
            Color:'#168130',
            LogoClass:''
        },
        {
            Text:'Linux',
            Color:'#E33434',
            LogoClass:''
        },
        {
            Text:'SQL y MongoDB',
            Color:'#2677C7',
            LogoClass:''
        }
    ];
    const SkillList = SkillCirclesData.map((skill)=>{
        return <Container
                width={'45%'}
                height={px2vw(550)}
                flexDirection={'column'}
            >
                <SkillCircle
                    FillValue={1}
                    TextColor={skill.Color}
                    Width={50}
                    Height={50}
                    TrackColor={'#F2F2F2'}
                    ProgressColor={skill.Color}
                    ProgressWidth={10}
                    TrackWidth={5}
                    LogoDY={'18px'}
                    LogoFontSize={'8rem'}
                    LogoClass={skill.LogoClass}
                    PercentageDY={'1.5rem'}
                    PercentageFontSize={'1rem'}
                    PercentageText={''}
                />
                <Title
                    Text={skill.Text}
                    Width={'100%'}
                    Padding={`${px2vw(10)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                    JustifyContent={'center'}
                    FontSize={60}
                />
            </Container>
    })
    return(
        <Container
            width={'100%'}
            height={px2vw(3000)}
            display={Display}
            padding={`${px2vw(0)} ${px2vw(40)}`}
            bgcolor={colors.white}
            flexDirection={'column'}
            justifyContent={'flex-start'}
            alignItems={'flex-start'}
        >
            <Container
                width={'100%'}
                height={px2vw(350)}
                flexDirection={'column'}
                borderBottom={`1px solid ${colors.slowlycolor}`}
                bgcolor={colors.white}
                padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
            >
                <Title
                    Text={"Gelacio Santos Fernández"}
                    Width={'100%'}
                    JustifyContent={'flex-start'}
                    FontSize={90}
                    FontColor={colors.darkcolor}
                />
                <Message
                    Text={"Desarrollador Backend"}
                    Width={'100%'}
                    JustifyContent={'flex-start'}
                    FontSize={70}
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
                Height={px2vw(800)}
                Text={"Mi meta más grande siempre fue desempeñarme como un profesional del desarrollo de software y aunque este mundo está en constante cambio, cada dia que pasa busco la forma de seguir aprendiendo y de mejorar continuamente, aprovechando al máximo todas las ventajas de las tendencias tecnológicas."}
                FontSize={60}
                TextAlign={'justify'}
            />
            <Message
                Width={'100%'}
                Height={px2vw(80)}
                TextBold={"Tecnologias que utilizo:"}
                FontSize={60}
                JustifyContent={'flex-start'}
                TextAlign={'left'}
                Padding={`${px2vw(100)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
            />
            <Container
                width={'100%'}
                height={px2vw(2500)}
                flexDirection={'row'}
                alignItems={'center'}
                flexWrap={'wrap'}
            >
                {SkillList}
            </Container>
        </Container>
    )
}

export default AboutMe;