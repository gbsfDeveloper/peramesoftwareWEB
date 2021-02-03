import React,{useState} from 'react';
import useViewport from '../../hooks/useViewport';
import styled from 'styled-components';
import colors from '../../constants/Colors';
import px2vw from "../../utils/px2vw";
import Container from '../container';
import NavBar from '../navbar';
import Card from '../card';
import AboutMe from '../aboutme';
import Title from '../title';
import Message from '../message';


const Profile = styled.div`
    width:100%;
    height: ${px2vw(810)};
    padding :${px2vw(25)};
    display:flex;
    flex-direction:row;
    justify-items:center;
    justify-content:center;
    align-items:center;
    align-content:center;
    color:${colors.primary};
    background-color:${({bgColor}) => {return (bgColor != undefined) ? bgColor: colors.slowlycolor2}};
`;

const DefaultProfile = ({bgColor}) =>{
    let {Width} = useViewport();
    return(
        <Profile bgColor={bgColor}>
            <Container
                width={'60vw'}
                height={'100%'}
                flexDirection={'column'}
                justifyContent={'flex-start'}
            >
                {(Width>768) ? <NavBar/> : undefined}
                <Container
                     width={'60vw'}
                     flexDirection={'row'}
                     justifyContent={'space-between'}
                >
                    <Card/>
                    <Container
                     width={'40vw'}
                     flexDirection={'column'}
                     justifyContent={'flex-start'}
                    >
                        <Container
                            width={'40vw'}
                            height={px2vw(50)}
                            flexDirection={'column'}
                            bgcolor={'#213078'}
                            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(80)}`}
                        >
                            <Title
                                Text={"Gelacio Santos Fernández"}
                                Width={'100%'}
                                JustifyContent={'flex-start'}
                                FontSize={50}
                                FontColor={'#FFFFFF'}
                            />
                        </Container>
                        <Container
                            width={'40vw'}
                            height={px2vw(50)}
                            flexDirection={'column'}
                            bgcolor={'#213078'}
                            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(80)}`}
                        >
                            <Message
                                Text={"Frontend & Banckend Developer"}
                                Width={'100%'}
                                JustifyContent={'flex-start'}
                                FontSize={30}
                                FontColor={'#FFFFFF'}
                            />
                        </Container>
                        <AboutMe/>
                    </Container>
                </Container>
            </Container>
            
        </Profile>
    )
}

export default DefaultProfile;