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
import Icon from '../icon';
import SkillCircle from '../skill-circle';

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
                        {/* <Container
                            width={'100%'}
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
                                Text={"Desarrollador de Software"}
                                Width={'100%'}
                                JustifyContent={'flex-start'}
                                FontSize={30}
                                FontColor={colors.darkcolor}
                            />
                        </Container>
                        <AboutMe/> */}

                        <Container
                            width={'100%'}
                            height={px2vw(450)}
                            flexDirection={'column'}
                            bgcolor={colors.white}
                            padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                        >
                            <Container
                                width={'100%'}
                                height={px2vw(50)}
                                flexDirection={'row'}
                                alignItems={'center'}
                            >
                                <Container
                                    width={'5%'}
                                >
                                    <Icon 
                                        Class={'fas fa-server'}  
                                        FontSize={20}
                                    />
                                </Container>
                                <Title
                                    Text={"Desarrollo Backend"}
                                    Width={'90%'}
                                    JustifyContent={'flex-start'}
                                    FontSize={30}
                                />
                            </Container>
                            <Container
                                width={'100%'}
                                height={px2vw(150)}
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
                                        FillValue={0.80}
                                        TextColor={'#213078'}
                                        Width={50}
                                        Height={50}
                                        TrackColor={'#F2F2F2'}
                                        ProgressColor={'#213078'}
                                        ProgressWidth={10}
                                        TrackWidth={10}
                                        LogoDY={'0.4rem'}
                                        LogoFontSize={'2.5rem'}
                                        LogoClass={''}
                                        PercentageDY={'1.5rem'}
                                        PercentageFontSize={'1rem'}
                                        PercentageText={'80%'}
                                    />
                                    <Title
                                        Text={"PHP"}
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
                                        FillValue={0.70}
                                        TextColor={'#168130'}
                                        Width={50}
                                        Height={50}
                                        TrackColor={'#F2F2F2'}
                                        ProgressColor={'#168130'}
                                        ProgressWidth={10}
                                        TrackWidth={10}
                                        LogoDY={'0.4rem'}
                                        LogoFontSize={'2.5rem'}
                                        LogoClass={''}
                                        PercentageDY={'1.5rem'}
                                        PercentageFontSize={'1rem'}
                                        PercentageText={'70%'}
                                    />
                                    <Title
                                        Text={"Node JS"}
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
                                        FillValue={0.80}
                                        TextColor={'#11BF1C'}
                                        Width={50}
                                        Height={50}
                                        TrackColor={'#F2F2F2'}
                                        ProgressColor={'#11BF1C'}
                                        ProgressWidth={10}
                                        TrackWidth={10}
                                        LogoDY={'0.4rem'}
                                        LogoFontSize={'2.5rem'}
                                        LogoClass={''}
                                        PercentageDY={'1.5rem'}
                                        PercentageFontSize={'1rem'}
                                        PercentageText={'80%'}
                                    />
                                    <Title
                                        Text={"Python"}
                                        Width={'100%'}
                                        Padding={`${px2vw(10)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                                        JustifyContent={'center'}
                                        FontSize={20}
                                    />
                                </Container>
                            </Container>
                            {/* <Container
                                width={'100%'}
                                height={px2vw(50)}
                                flexDirection={'row'}
                                alignItems={'center'}
                            >
                                <Container
                                    width={'5%'}
                                >
                                    <Icon 
                                        Class={'fas fa-gamepad'}  
                                        FontSize={20}
                                    />
                                </Container>
                                <Title
                                    Text={"Desarrollo de Videojuegos"}
                                    Width={'95%'}
                                    JustifyContent={'flex-start'}
                                    FontSize={30}
                                />
                            </Container> */}
                            <Container
                                width={'100%'}
                                height={px2vw(50)}
                                flexDirection={'row'}
                                alignItems={'center'}
                            >
                                <Container
                                    width={'5%'}
                                >
                                    <Icon 
                                        Class={'fas fa-globe'}  
                                        FontSize={20}
                                    />
                                </Container>
                                <Title
                                    Text={"Desarrollo Frontend"}
                                    Width={'90%'}
                                    JustifyContent={'flex-start'}
                                    FontSize={30}
                                />
                            </Container>
                            <Container
                                width={'100%'}
                                height={px2vw(150)}
                                padding={`${px2vw(15)} ${px2vw(0)} ${px2vw(15)} ${px2vw(0)}`}
                                flexDirection={'row'}
                                alignItems={'center'}
                            >
                                {/* React */}
                                <Container
                                    // width={'10%'}
                                    height={px2vw(100)}
                                    flexDirection={'column'}
                                >
                                    <SkillCircle
                                        FillValue={0.50}
                                        TextColor={'#89EBFF'}
                                        Width={50}
                                        Height={50}
                                        TrackColor={'#F2F2F2'}
                                        ProgressColor={'#89EBFF'}
                                        ProgressWidth={10}
                                        TrackWidth={10}
                                        LogoDY={'0.4rem'}
                                        LogoFontSize={'2.5rem'}
                                        LogoClass={''}
                                        PercentageDY={'1.5rem'}
                                        PercentageFontSize={'1rem'}
                                        PercentageText={'50%'}
                                    />
                                    <Title
                                        Text={"React JS"}
                                        Width={'100%'}
                                        Padding={`${px2vw(10)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                                        JustifyContent={'center'}
                                        FontSize={20}
                                    />
                                </Container>
                                {/* Javascript */}
                                <Container
                                    // width={'10%'}
                                    height={px2vw(100)}
                                    flexDirection={'column'}
                                >
                                    <SkillCircle
                                        FillValue={0.80}
                                        TextColor={'#D7E433'}
                                        Width={50}
                                        Height={50}
                                        TrackColor={'#F2F2F2'}
                                        ProgressColor={'#D7E433'}
                                        ProgressWidth={10}
                                        TrackWidth={10}
                                        LogoDY={'0.4rem'}
                                        LogoFontSize={'2.5rem'}
                                        LogoClass={''}
                                        PercentageDY={'1.5rem'}
                                        PercentageFontSize={'1rem'}
                                        PercentageText={'80%'}
                                    />
                                    <Title
                                        Text={"Javascript"}
                                        Width={'100%'}
                                        Padding={`${px2vw(10)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                                        JustifyContent={'center'}
                                        FontSize={20}
                                    />
                                </Container>
                                {/* CSS */}
                                <Container
                                    // width={'10%'}
                                    height={px2vw(100)}
                                    flexDirection={'column'}
                                >
                                    <SkillCircle
                                        FillValue={0.80}
                                        TextColor={'#00AEFF'}
                                        Width={50}
                                        Height={50}
                                        TrackColor={'#F2F2F2'}
                                        ProgressColor={'#00AEFF'}
                                        ProgressWidth={10}
                                        TrackWidth={10}
                                        LogoDY={'0.4rem'}
                                        LogoFontSize={'2.5rem'}
                                        LogoClass={''}
                                        PercentageDY={'1.5rem'}
                                        PercentageFontSize={'1rem'}
                                        PercentageText={'80%'}
                                    />
                                    <Title
                                        Text={"CSS"}
                                        Width={'100%'}
                                        Padding={`${px2vw(10)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                                        JustifyContent={'center'}
                                        FontSize={20}
                                    />
                                </Container>
                                {/* HTML */}
                                <Container
                                    // width={'10%'}
                                    height={px2vw(100)}
                                    flexDirection={'column'}
                                >
                                    <SkillCircle
                                        FillValue={0.90}
                                        TextColor={'#E33434'}
                                        Width={50}
                                        Height={50}
                                        TrackColor={'#F2F2F2'}
                                        ProgressColor={'#E33434'}
                                        ProgressWidth={10}
                                        TrackWidth={10}
                                        LogoDY={'0.4rem'}
                                        LogoFontSize={'2.5rem'}
                                        LogoClass={''}
                                        PercentageDY={'1.5rem'}
                                        PercentageFontSize={'1rem'}
                                        PercentageText={'90%'}
                                    />
                                    <Title
                                        Text={"HTML"}
                                        Width={'100%'}
                                        Padding={`${px2vw(10)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                                        JustifyContent={'center'}
                                        FontSize={20}
                                    />
                                </Container>
                            </Container>
                            
                            
                        </Container>
                        
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