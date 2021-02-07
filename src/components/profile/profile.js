import React,{useState} from 'react';
import useViewport from '../../hooks/useViewport';
import styled from 'styled-components';
import colors from '../../constants/Colors';
import px2vw from "../../utils/px2vw";
import Container from '../container';
import NavBar from '../navbar';
import Card from '../card';
import AboutMe from '../aboutme';
import EmailSender from '../email-sender';
import OtherWorks from '../other-work';
import Title from '../title';
import Message from '../message';


const Profile = styled.div`
    width:100%;
    /* height: ${px2vw(800)}; */
    padding :${px2vw(25)};
    display:flex;
    flex-direction:row;
    justify-items:center;
    justify-content:center;
    align-items:center;
    align-content:center;
    color:${colors.darkcolor};
    background-color:${({bgColor}) => {return (bgColor != undefined) ? bgColor: colors.slowlycolor2}};
`;

const DefaultProfile = ({bgColor}) =>{
    let {Width} = useViewport();
    return(
        <Profile bgColor={bgColor}>
            <Container
                width={'70vw'}
                height={'100%'}
                flexDirection={'column'}
                justifyContent={'flex-start'}
                boxShadow={'0 3px 10px 0 rgba(0,0,0,.1)'}
            >
                {(Width>768) ? <NavBar/> : undefined}
                <Container
                     width={'70vw'}
                     flexDirection={'row'}
                     justifyContent={'space-between'}
                >
                    <Card/>
                    <Container
                     width={'50vw'}
                     flexDirection={'column'}
                     justifyContent={'flex-start'}
                    >
                        <Container
                            width={'50vw'}
                            height={px2vw(150)}
                            flexDirection={'column'}
                            bgcolor={colors.white}
                            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(80)}`}
                        >
                            <Title
                                Text={"Gelacio Santos Fernández"}
                                Width={'100%'}
                                JustifyContent={'flex-start'}
                                FontSize={50}
                                FontColor={colors.darkcolor}
                            />
                            <Message
                                Text={"Desarrollador Frontend & Backend"}
                                Width={'100%'}
                                JustifyContent={'flex-start'}
                                FontSize={30}
                                FontColor={colors.darkcolor}
                            />
                        </Container>
                        <AboutMe/>
                    </Container>
                </Container>
                <Container
                     width={'70vw'}
                     padding={`${px2vw(5)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                     flexDirection={'row'}
                >
                    <OtherWorks/>
                    <EmailSender/>
                </Container>
            </Container>
        </Profile>
    )
}

export default DefaultProfile;