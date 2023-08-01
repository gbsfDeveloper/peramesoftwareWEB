import React from 'react';
import px2vw from "../../utils/px2vw";
import colors from '../../constants/Colors';
import Container from '../container';
import Title from '../title';
import Message from '../message';
// import SkillCircle from '../skill-circle';
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
            // width={'16.6%'} 
            width={'15rem'} 
            height={px2vw(700)}
            flexDirection={'column'}
            orflow={'scroll'}
            flex={'0 0 auto'}
        >
            <SkillCircle
                ContainerMargin={`${px2vw(0)} ${px2vw(0)}`}
                ContainerWidth={px2vw(100)}
                ContainerHeight={px2vw(100)}
                BorderWith={'0.5rem'}
                BorderColor={skill.Color}
                IconClass={skill.IconClass}
                IconSize={40}
                IconColor={skill.Color}
            />
            <Title
                Text={skill.Text}
                Width={'100%'}
                Padding={`${px2vw(10)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                JustifyContent={'center'}
                FontSize={15}
            />
        </Container>
    })
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
                height={px2vw(120)}
                flexDirection={'column'}
                borderBottom={`1px solid ${colors.slowlycolor}`}
                bgcolor={colors.white}
                padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
            >
                <Title
                    Text={"Gelacio Ben Yair Santos Fernández"}
                    Width={'100%'}
                    JustifyContent={'flex-start'}
                    FontSize={30}
                    FontColor={colors.darkcolor}
                />
                <Message
                    Text={"Backend Developer"}
                    Width={'100%'}
                    JustifyContent={'flex-start'}
                    FontSize={23}
                    FontColor={colors.darkcolor}
                />
            </Container>
            <Message
                Width={'100%'}
                Height={px2vw(120)}
                // Text={"Hoy en día la tecnología es algo muy importante en nuestras vidas y es necesario que nos adaptemos lo mas rápido posible, por esta razón creo en el aprendizaje asi como en la mejora continua, además pienso firmemente que el uso de las diferentes herramientas tecnológicas y su implementación es muy importante para ahorrar tiempo y recursos en la búsqueda de soluciones a problemas tecnológicos reales."}
                // Text={"Creo en el aprendizaje y en la mejora continua, además pienso firmemente que el uso de las diferentes herramientas tecnológicas y su implementación es muy importante para ahorrar tiempo y recursos en la búsqueda de soluciones a problemas tecnológicos reales."}
                Text={"I believe in learning and continuous improvement, I also firmly believe that the use of different technological tools and their implementation is very important to save time and resources in the search for solutions to real technological problems."}
                FontSize={16}
                TextAlign={'justify'}
            />

            <Container
                width={'100%'}
                height={px2vw(20)}
                flexDirection={'row'}
                alignItems={'center'}
            />

            <Message
                Width={'100%'}
                Height={px2vw(20)}
                TextBold={"Technologies:"}
                FontSize={16}
                JustifyContent={'flex-start'}
                TextAlign={'left'}
            />
            
            <Container
                width={'100%'}
                height={px2vw(165)}
                justifyContent={'start'}
                alignItems={'start'}
                overflowX={'scroll'}
                overflowY={'hidden'}
            >
                <Container
                    width={'58rem'}
                    height={px2vw(165)}
                    alignItems={'center'}  
                >
                    {SkillList}
                </Container>
            </Container>
            
            
        </Container>
    )
}

export default AboutMe;