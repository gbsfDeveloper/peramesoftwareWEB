import React,{useState} from 'react';
import useViewport from '../../hooks/useViewport';
import styled from 'styled-components';
import colors from '../../constants/Colors';
import px2vw from "../../utils/px2vw";
import Container from '../container';
import NavBar from '../navbar';
import Card from '../card';
import AboutMe from '../aboutme';
import Title from '../title';
import Message from '../message';
import Button from '../button';


const Input = styled.input.attrs(({PlaceHolder,Type,Id}) => ({
    placeholder: (PlaceHolder !== undefined) ? PlaceHolder : '',
    type:(Type !== undefined) ? Type : '',
    id:(Id !== undefined) ? Id : ''
  }))`
    width:100%;
    height:100%;
    padding: 3% 3%;
`;

const TextArea = styled.textarea.attrs(({PlaceHolder,Type,Id,Rows}) => ({
    placeholder: (PlaceHolder !== undefined) ? PlaceHolder : '',
    type:(Type !== undefined) ? Type : '',
    id:(Id !== undefined) ? Id : '',
    rows:(Rows !== undefined) ? Rows : ''
  }))`
    width:100%;
    height:80%;
    min-width:100%;
    min-height:100%;
    max-width:100%;
    max-height:100%;
    padding: 2% 2%;
`;

const DefaultEmailSender = ({bgColor}) =>{
    let {Width} = useViewport();
    return(
        <Container
            width={'50%'}
            height={px2vw(200)}
            flexDirection={'column'}
            justifyContent={'center'}
            bgcolor={colors.darkcolor}
        >
                <Title
                    Text={"Contactame"}
                    Width={'100%'}
                    JustifyContent={'center'}
                    FontSize={30}
                    FontColor={colors.white}
                />
                <Container
                    width={'100%'}
                    height={px2vw(30)}
                    flexDirection={'row'}
                    justifyContent={'center'}
                >
                    <Container
                        width={'40%'}
                        height={px2vw(30)}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        bgcolor={'yellow'}
                        margin={`${px2vw(10)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                    >
                        <Input 
                            Id={'inputEmail'}
                            PlaceHolder={'Correo Electronico'}
                            Type={'email'}
                        />
                    </Container>
                    <Container
                        width={'40%'}
                        height={px2vw(30)}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        bgcolor={'yellow'}
                        margin={`${px2vw(10)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                    >
                        <Input 
                            Id={'inputName'}
                            PlaceHolder={'Tu Nombre'}
                            Type={'text'}
                        />
                    </Container>
                </Container>
                <Container
                    width={'80%'}
                    height={px2vw(70)}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    bgcolor={'yellow'}
                    margin={`${px2vw(10)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                >
                    <TextArea 
                        Id={'inputMessage'}
                        PlaceHolder={'Mensaje'}
                        // Rows={'3'}
                    />
                </Container>
                <Button
                    Text={"Enviar"}
                    Width={'20%'}
                    FontSize={17}
                    Padding={`${px2vw(5)} 0vw 0vw 0vw`}
                    IconClassFA={'fas fa-paper-plane'}
                    ButtonPadding={px2vw(5)}
                    ButtonBorderRadius={'0'}
                    ButtonBgColor={colors.primary}
                    ButtonFontColor={colors.white}
                    ButtonHoverFontColor={colors.white}
                />
        </Container>            
    )
}

export default DefaultEmailSender;