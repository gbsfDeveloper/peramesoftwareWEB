import React,{useState,useEffect} from 'react';
import useViewport from '../../hooks/useViewport';
import styled from 'styled-components';
import colors from '../../constants/Colors';
import px2vw from "../../utils/px2vw";
import Container from '../container';
import NavBar from '../navbar';
import Card from '../card';
import ProfileSkils from '../profile-skills';
import AboutMe from '../aboutme';
import EmailSender from '../email-sender';
import OtherWorks from '../other-work';
import Title from '../title';
import Message from '../message';
import Icon from '../icon';


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
    const Sections = {
        About: {name:'About',isActive:true},
        Skills: {name:'Skills',isActive:false},
        Experience: {name:'Experience',isActive:false},
        Contact: {name:'Contact',isActive:false}
    }

    let {Width} = useViewport();
    const [ActiveSection,setActiveSection] = useState(Sections.About.name);
    const [SectionsState,setSectionsState] = useState(Sections);
    
    useEffect(() => { 
        return SectionsState;
    },[]);

    const handleSection = (name) =>{
        switch (name) {
            case 'About':
                setSectionsState({
                    ...SectionsState,
                    About:{name:'About',isActive:true},
                    Skills:{name:'Skills',isActive:false},
                    Experience:{name:'Experience',isActive:false},
                    Contact:{name:'Contact',isActive:false}
                });
                break;
            case 'Skills':
                setSectionsState({
                    ...SectionsState,
                    About:{name:'About',isActive:false},
                    Skills:{name:'Skills',isActive:true},
                    Experience:{name:'Experience',isActive:false},
                    Contact:{name:'Contact',isActive:false}
                });
                break;
            case 'Experience':
                setSectionsState({
                    ...SectionsState,
                    About:{name:'About',isActive:false},
                    Skills:{name:'Skills',isActive:false},
                    Experience:{name:'Experience',isActive:true},
                    Contact:{name:'Contact',isActive:false}
                });
                break;
            case 'Contact':
                setSectionsState({
                    ...SectionsState,
                    About:{name:'About',isActive:false},
                    Skills:{name:'Skills',isActive:false},
                    Experience:{name:'Experience',isActive:false},
                    Contact:{name:'Contact',isActive:true}
                });
                break;
        }
    }

    return(
        <Profile bgColor={bgColor}>
            <Container
                width={'70vw'}
                height={'100%'}
                flexDirection={'column'}
                justifyContent={'flex-start'}
                boxShadow={'0 3px 10px 0 rgba(0,0,0,.1)'}
            >
                {(Width>768) ? <NavBar HandleSection={handleSection}/> : undefined}
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
                        <AboutMe 
                            Display={SectionsState.About.isActive ? 'flex' : 'none'}
                        />
                        <ProfileSkils
                            Display={SectionsState.Skills.isActive ? 'flex' : 'none'}
                        />
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