import React,{useState} from 'react';
import useViewport from '../../hooks/useViewport';
import styled from 'styled-components';
import colors from '../../constants/Colors';
import px2vw from "../../utils/px2vw";
import Container from '../container';
import Image from '../image';
import Title from '../title';
import Message from '../message';

const Profile = styled.div`
    width:100%;
    height: 100%;
    padding :${px2vw(10)};
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
                padding={px2vw(35)}
                flexDirection={'row'}
                flexWrap={'wrap'}
                bgcolor={'#FFFFFF'}
            >
                <Container
                    width={'30vw'}
                    flexDirection={'column'}
                    flexWrap={'wrap'}
                >
                    <Title
                        Text={"Gelacio Ben Yair"}
                        Width={ (Width>768) ? '100%' : '100%'}
                        JustifyContent={'flex-start'}
                        FontSize={50}
                    />
                    <Message
                        Text={"Backend Developer"}
                        Width={ (Width>768) ? '100%' : '100%'}
                        JustifyContent={'flex-start'}
                        FontSize={35}
                    />
                    <Message
                        Text={"El exito lo hace la disciplina"}
                        Width={ (Width>768) ? '100%' : '100%'}
                        JustifyContent={'flex-start'}
                        FontSize={22}
                    />
                </Container>
                <Image
                    Width={'30vw'}
                    ImgWidth={'300'}
                    Src={'/imgs/foto.jpg'}
                    BorderRadius={'150'}
                />
            </Container>
        </Profile>
    )
}

export default DefaultProfile;