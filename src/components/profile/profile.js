import React,{useState} from 'react';
import useViewport from '../../hooks/useViewport';
import styled from 'styled-components';
import colors from '../../constants/Colors';
import px2vw from "../../utils/px2vw";
import Container from '../container';
import NavBar from '../navbar';
import Card from '../card';


const Profile = styled.div`
    width:100%;
    height: ${px2vw(500)};
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
                flexDirection={'column'}
            >
                {(Width>768) ? <NavBar/> : undefined}
                <Card/>   
                
            </Container>
            
        </Profile>
    )
}

export default DefaultProfile;