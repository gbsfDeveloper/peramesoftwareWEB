import React,{useState} from 'react';
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
    background-color:${({bgColor}) => {return (bgColor != undefined) ? bgColor: colors.seconddarkcolor}};
`;

const DefaultHeader = () =>{
    return(
        <Header>
            <Image></Image>
            <Title text={"PeraMe Software"}></Title>
            <SocialContainer/>
        </Header>
    )
}

export default DefaultHeader;