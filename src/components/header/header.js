import React,{useState} from 'react';
import styled from 'styled-components';
import colors from '../../constants/Colors';
import Image from '../image';

const Header = styled.div`
    width:100%;
    height: 6rem;
    color:${colors.slowlycolor};
    background-color:${(props) => {return (props.bgColor != undefined) ? props.bgColor: colors.seconddarkcolor}};
`;

const DefaultHeader = (props) =>{
    return(
        <Header>
            <Image></Image>
        </Header>
    )
}

export default DefaultHeader;