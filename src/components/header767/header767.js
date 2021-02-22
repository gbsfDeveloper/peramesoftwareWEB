import React,{useState} from 'react';
import useViewport from '../../hooks/useViewport';
import styled from 'styled-components';
import colors from '../../constants/Colors';
import Image from '../image';
import Title from '../title';
import SocialContainer from '../socialContainer';
import px2vw from "../../utils/px2vw";

const Header = styled.div`
    width:100%;
    height: 100%;
    padding :${px2vw(10)};
    display:flex;
    flex-direction:row;
    color:${colors.slowlycolor};
    background-color:${({bgColor}) => {return (bgColor !== undefined) ? bgColor: colors.darkcolor}};
`;

const DefaultHeader = () =>{
    let {Width} = useViewport();
    return(
        <Header>
            <Image
                Width={'10vw'}
                ImgWidth={'150'}
                Src={'/imgs/logo.svg'}
            />
            <Title 
                Text={"PeraMe Software"}
                Width={'70vw'}
                Padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(20)}`}
                JustifyContent={'flex-start'}
                FontFamily={'Fredoka One'}
                FontSize={85}
            />
            <SocialContainer
                Width={'10vw'}
                Wrap={'nowrap'}
                FontSize={120}
            />
        </Header>
    )
}

export default DefaultHeader;