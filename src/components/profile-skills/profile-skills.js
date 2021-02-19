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

const ProfileSkils = ({Display}) =>{
    return(
        <Container
        width={'100%'}
        height={px2vw(450)}
        display={Display}
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
    )
}

export default ProfileSkils;