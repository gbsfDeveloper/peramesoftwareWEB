import React,{useState} from 'react';
import useViewport from '../../hooks/useViewport';
import styled from 'styled-components';
import colors from '../../constants/Colors';
import px2vw from "../../utils/px2vw";
import Container from '../container';
import Image from '../image';
import Title from '../title';
import Message from '../message';
import Button from '../button';

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
                height={px2vw(350)}
                padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(50)}`}
                flexDirection={'row'}
                justifyContent={'space-between'}
                flexWrap={'nowrap'}
                bgcolor={'#FFFFFF'}
            >
                <Container
                    width={'30vw'}
                    height={'100%'}
                    flexDirection={'column'}
                    flexWrap={'wrap'}
                    alignItems={'flex-start'}
                    justifyContent={'center'}
                >
                    <Title
                        Text={"Gelacio Ben Yair"}
                        Width={ (Width>768) ? '100%' : '100%'}
                        JustifyContent={'flex-start'}
                        FontSize={50}
                    />
                    <Message
                        Text={"Backend & Frontend Developer"}
                        Width={ (Width>768) ? '100%' : '100%'}
                        JustifyContent={'flex-start'}
                        FontSize={35}
                    />
                    <Message
                        Text={"La disciplina hace al exito"}
                        Width={ (Width>768) ? '100%' : '100%'}
                        JustifyContent={'flex-start'}
                        FontSize={22}
                    />
                    <Button
                        Text={"Portafolio"}
                        Width={'40%'}
                        ButtonPadding={px2vw(10)}
                        ButtonBorderRadius={'0'}
                        FontSize={25}
                        Padding={`${px2vw(25)} 0vw 0vw 0vw`}
                        Href={'https://github.com/gbsfDeveloper'}
                        IconClassFA={'fas fa-folder-open'}
                    />
                </Container>
                <Image
                    Width={'20vw'}
                    Height={'100%'}
                    border={`${px2vw(2)} solid ${colors.slowlycolor2}`}
                    borderStyle={'none none none solid'}
                    ImgWidth={'250'}
                    Src={'/imgs/foto.jpg'}
                    BorderRadius={'150'}
                />
            </Container>
        </Profile>
    )
}

export default DefaultProfile;