import React,{useState} from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width:${({width})=>{return (width !== undefined) ? width : '10vw'}};
    height:${({height})=>{return (height !== undefined) ? height : ''}};
    padding:${({padding})=>{return (padding !== undefined) ? padding : '0'}};
    background-color:${({bgcolor})=>{return (bgcolor !== undefined) ? bgcolor : '#4298f4'}};
    border-radius:${({BorderRadius})=>{return (BorderRadius != undefined) ? px2vw(BorderRadius) : px2vw(250)}};
    border: none;
    outline: none;
    border-radius:2rem;
    color:white;
    transition: 0.5s;
    &:hover{
        background-color: #2c68a7;
        border: none;
        cursor: pointer;
    }
`;

const DefaultButton = ({Text}) =>{
    return(
        <Button>
            {Text}
        </Button>
    )
}

export default DefaultButton;