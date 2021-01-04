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
    background-color:${({bgColor}) => {return (bgColor != undefined) ? bgColor: colors.seconddarkcolor}};
`;

const DefaultHeader = () =>{
    let {Width} = useViewport();
    console.log(Width);
    return(
        <Header>
            <Image
                Width={ (Width>768) ? '10vw' : '15vw'}
            />
            <Title 
                text={"PeraMe Software"}
                Width={ (Width>768) ? '80vw' : '70vw'}
                justifyContent={'flex-start'}
                padding={`0vw 0vw 0vw ${px2vw(15)}`}
            />
            <SocialContainer
                Width={ (Width>768) ? '10vw' : '15vw'}
            />
        </Header>
    )
}

export default DefaultHeader;