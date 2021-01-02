import React,{useState} from 'react';
import styled from 'styled-components';
import colors from '../../constants/Colors';
import Image from '../image';
import Title from '../title';
import SocialContainer from '../socialContainer';

const Header = styled.div`
    width:100%;
    height: 6rem;
    padding :1rem;
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