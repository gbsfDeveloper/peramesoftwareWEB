import React,{useState,useEffect} from 'react';
import useViewport from '../../hooks/useViewport';
import styled from 'styled-components';
import colors from '../../constants/Colors';
import px2vw from "../../utils/px2vw";
import Container from '../container';
import NavBar from '../navbar';
import Card from '../card767';
import ProfileSkils from '../profile-skills767';
import AboutMe from '../aboutme767';
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
    background-color:${({bgColor}) => {return (bgColor != undefined) ? bgColor: colors.slowlycolor2}};
`;



const DefaultProfile = ({bgColor}) =>{
    const Sections = {
        About: {name:'About',isActive:true},
        Skills: {name:'Skills',isActive:false},
        Experience: {name:'Experience',isActive:true},
        Contact: {name:'Contact',isActive:false}
    }

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
                     justifyContent={'space-between'}
                >
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
                            height={px2vw(10)}
                            bgcolor={colors.darkcolor}
                        >
                        </Container>
                        <ProfileExperience
                            Display={'flex'}
                        />
                        <Container
                            width={'100%'}
                            height={px2vw(10)}
                            bgcolor={colors.darkcolor}
                        >
                        </Container>
                        <ProfileSkils
                            Display={'flex'}
                        />
                    </Container>
                </Container>
                <Container
                     width={'95%'}
                     height={px2vw(20)}
                     bgcolor={colors.darkcolor}
                >
                </Container>
            </Container>
        </Profile>
    )
}

export default DefaultProfile;