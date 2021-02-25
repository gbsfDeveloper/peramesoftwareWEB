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
    justify-content: space-evenly;
    color:${colors.slowlycolor};
    background-color:${({bgColor}) => {return (bgColor !== undefined) ? bgColor: colors.darkcolor}};
`;

const DefaultHeader = () =>{
    return(
        <Header>
            <Image
                Width={'10%'}
                ImgWidth={'100'}
                Src={process.env.PUBLIC_URL + '/imgs/logo.svg'}
            />
            <Title 
                Text={"PeraMe Software"}
                Width={'75%'}
                JustifyContent={'flex-start'}
                FontFamily={'Fredoka One'}
                FontSize={35}
            />
            <SocialContainer
                Width={'10%'}
                Wrap={'nowrap'}
                FontSize={35}
            />
        </Header>
    )
}

export default DefaultHeader;