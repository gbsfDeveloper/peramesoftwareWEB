import React from 'react';
import px2vw from "../../utils/px2vw";
import colors from '../../constants/Colors';
import Container from '../container';
import Title from '../title';
import Message from '../message';
import SkillCircle from '../skill-circle-two';

const AboutMe = ({Display}) =>{
    const SkillCirclesData = [
        {
            Text:'TypeScript',
            Color:'#213078',
            IconClass:'fas fa-file-code'
        },
        {
            Text:'IA / Chatgpt',
            Color:'#168130',
            IconClass:'fas fa-microchip'
        },
        {
            Text:'PHP',
            Color:'#213078',
            IconClass:'fab fa-php'
        },
        {
            Text:'Python',
            Color:'#FFDB4E',
            IconClass:'fab fa-python'
        },
        {
            Text:'Node JS',
            Color:'#168130',
            IconClass:'fab fa-node'
        },
        {
            Text:'Linux',
            Color:'#E33434',
            IconClass:'fab fa-linux'
        },
        {
            Text:'SQL/MongoDB',
            Color:'#2677C7',
            IconClass:'fas fa-database'
        }
    ];
    const SkillList = SkillCirclesData.map((skill)=>{
        return <Container
            width={'30%'}
            height={px2vw(500)}
            flexDirection={'column'}
        >
            <SkillCircle
                ContainerMargin={`${px2vw(0)} ${px2vw(0)}`}
                ContainerWidth={px2vw(300)}
                ContainerHeight={px2vw(300)}
                BorderWith={'1rem'}
                BorderColor={skill.Color}
                IconClass={skill.IconClass}
                IconSize={150}
                IconColor={skill.Color}
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
            // height={px2vw(3500)}
            display={Display}
            padding={`${px2vw(0)} ${px2vw(30)}`}
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
                    Text={"Backend & Frontend Developer"}
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
                Height={px2vw(500)}
                // Text={"Creo en el aprendizaje y en la mejora continua, además pienso firmemente que el uso de las diferentes herramientas tecnológicas y su implementación es muy importante para ahorrar tiempo y recursos en la búsqueda de soluciones a problemas tecnológicos reales."}
                Text={"I believe in learning and continuous improvement, I also firmly believe that the use of different technological tools and their implementation is very important to save time and resources in the search for solutions to real technological problems."}
                FontSize={58}
                TextAlign={'justify'}
                Padding={`${px2vw(50)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
            />
            <Message
                Width={'100%'}
                Height={px2vw(300)}
                // TextBold={"Tecnologias que utilizo:"}
                TextBold={"Technologies:"}
                FontSize={60}
                JustifyContent={'flex-start'}
                TextAlign={'left'}
            />
            <Container
                width={'100%'}
                height={px2vw(1500)}
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