import React from 'react';
import styled from 'styled-components';
import colors from '../../constants/Colors';
import px2vw from "../../utils/px2vw";
import Container from '../container';
import Card from '../card767';
import ProfileSkils from '../profile-skills767';
import AboutMe from '../aboutme767';
import Message from '../message';
import ProfileExperience from '../profile-experience767';


const Profile = styled.div`
    width:100%;
    padding :${px2vw(0)};
    display:flex;
    flex-direction:row;
    justify-items:center;
    justify-content:center;
    align-items:center;
    align-content:center;
    color:${colors.darkcolor};
    background-color:${({bgColor}) => {return (bgColor !== undefined) ? bgColor: colors.slowlycolor2}};
`;

const DefaultProfile = ({bgColor}) =>{

    return(
        <Profile bgColor={bgColor}>
            <Container
                width={'100%'}
                height={'100%'}
                flexDirection={'column'}
                justifyContent={'flex-start'}
                boxShadow={'0 3px 10px 0 rgba(0,0,0,.1)'}
            >
                <Container
                     width={'100%'}
                     flexDirection={'column'}
                     margin={`${px2vw(50)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                     justifyContent={'space-between'}
                >

                        <Container
                            width={'95%'}
                            bgcolor={colors.darkcolor}
                            margin={`${px2vw(20)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                            padding={`${px2vw(20)} ${px2vw(0)}`}
                        >
                            <Message
                                Text={"Acerca de mi"}
                                Width={'100%'}
                                JustifyContent={'center'}
                                FontSize={100}
                                FontColor={colors.white}
                            />
                        </Container>
                        <Card/>
                    <Container
                        width={'95%'}
                        flexDirection={'column'}
                        justifyContent={'flex-start'}
                    >
                        <AboutMe 
                            Display={'flex'}
                        />
                        
                        <Container
                            width={'100%'}
                            bgcolor={colors.darkcolor}
                            margin={`${px2vw(20)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                            padding={`${px2vw(20)} ${px2vw(0)}`}
                        >
                            <Message
                                Text={"Experiencia"}
                                Width={'100%'}
                                JustifyContent={'center'}
                                FontSize={100}
                                FontColor={colors.white}
                            />
                        </Container>

                        <ProfileExperience
                            Display={'flex'}
                        />
                        
                        <Container
                            width={'100%'}
                            bgcolor={colors.darkcolor}
                            padding={`${px2vw(20)} ${px2vw(0)}`}
                        >
                            <Message
                                Text={"Tecnologías"}
                                Width={'100%'}
                                JustifyContent={'center'}
                                FontSize={100}
                                FontColor={colors.white}
                            />
                        </Container>

                        <ProfileSkils
                            Display={'flex'}
                        />
                    </Container>
                </Container>
                <Container
                     width={'95%'}
                     height={px2vw(20)}
                     margin={`${px2vw(0)} ${px2vw(0)} ${px2vw(50)} ${px2vw(0)}`}
                     bgcolor={colors.darkcolor}
                >
                </Container>
            </Container>
        </Profile>
    )
}

export default DefaultProfile;