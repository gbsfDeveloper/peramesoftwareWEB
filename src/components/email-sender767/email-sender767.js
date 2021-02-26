import React,{useState} from 'react';
import useViewport from '../../hooks/useViewport';
import styled from 'styled-components';
import colors from '../../constants/Colors';
import px2vw from "../../utils/px2vw";
import Container from '../container';
import Title from '../title';
import Button from '../button';

const HandleDefault = () =>{
    console.log("Default Action");
}

const Input = styled.input.attrs(({PlaceHolder,Type,Id,Value,HandleInput}) => ({
    value:Value,
    id:(Id !== undefined) ? Id : '',
    onChange:(HandleInput !== undefined) ? (e)=>{HandleInput(e.target.value)} : HandleDefault,
    placeholder: (PlaceHolder !== undefined) ? PlaceHolder : '',
    type:(Type !== undefined) ? Type : ''
  }))`
    width:100%;
    height:100%;
    padding: 3% 3%;
    font-size:${({FontSize})=>{return (FontSize !== undefined) ? px2vw(FontSize) : px2vw(70)}};
    background-color:${({ErrorState})=>{
        let color = 'white';
        switch (ErrorState) {
            case 0:
                color = 'white'
                break;
            case 1:
                color = 'green'
                break;
            case 2:
                color = 'red'
                break;
        }
        return color;
    }};
    color:${({ErrorState})=>{
        let color = 'white';
        switch (ErrorState) {
            case 0:
                color = 'black'
                break;
            case 1:
                color = 'white'
                break;
            case 2:
                color = 'white'
                break;
        }
        return color;
    }};
    &::placeholder{
        color:${({ErrorState})=>{
            let color = 'white';
            switch (ErrorState) {
                case 0:
                    color = 'grey'
                    break;
                case 1:
                    color = 'white'
                    break;
                case 2:
                    color = 'white'
                    break;
            }
            return color;
        }};
    }
`;

const TextArea = styled.textarea.attrs(({PlaceHolder,Type,Id,Rows,Value,HandleInput}) => ({
    value:Value,
    id:(Id !== undefined) ? Id : '',
    onChange:(HandleInput !== undefined) ? (e)=>{HandleInput(e.target.value)} : HandleDefault,
    placeholder: (PlaceHolder !== undefined) ? PlaceHolder : '',
    rows:(Rows !== undefined) ? Rows : '',
    type:(Type !== undefined) ? Type : '',
  }))`
    width:100%;
    height:80%;
    min-width:100%;
    min-height:100%;
    max-width:100%;
    max-height:100%;
    padding: 2% 2%;
    font-size:${({FontSize})=>{return (FontSize !== undefined) ? px2vw(FontSize) : px2vw(70)}};
    background-color:${({ErrorState})=>{
        let color = 'white';
        switch (ErrorState) {
            case 0:
                color = 'white'
                break;
            case 1:
                color = 'green'
                break;
            case 2:
                color = 'red'
                break;
        }
        return color;
    }};
    color:${({ErrorState})=>{
        let color = 'white';
        switch (ErrorState) {
            case 0:
                color = 'black'
                break;
            case 1:
                color = 'white'
                break;
            case 2:
                color = 'white'
                break;
        }
        return color;
    }};
    &::placeholder{
        color:${({ErrorState})=>{
            let color = 'white';
            switch (ErrorState) {
                case 0:
                    color = 'grey'
                    break;
                case 1:
                    color = 'white'
                    break;
                case 2:
                    color = 'white'
                    break;
            }
            return color;
        }};
    }
`;

const DefaultEmailSender = ({
    InputEmailValue,
    HandleEmailValue,
    InputNameValue,
    HandleNameValue,
    InputMessageValue,
    HandleMessageValue,
    HandleButtonActions,
    ErrorsState,
    IsSendingMail,
    HandleIsSendingMail
}) =>{
    
    const ManageSendingButton = (IsSendingMail) =>{
        if(!IsSendingMail){
            return <Button
                    OnClick={(e)=>{
                        e.preventDefault();
                        HandleButtonActions(InputEmailValue,InputNameValue,InputMessageValue);
                    }}
                    Text={"Enviar"}
                    Width={'100%'}
                    FontSize={60}
                    Padding={`${px2vw(30)} 0vw 0vw 0vw`}
                    IconClassFA={'fas fa-paper-plane'}
                    ButtonPadding={`${px2vw(30)} ${px2vw(0)} ${px2vw(30)} ${px2vw(0)}`}
                    ButtonBorderRadius={'0'}
                    ButtonBgColor={colors.primary}
                    ButtonFontColor={colors.white}
                    ButtonHoverFontColor={colors.white}
                />
        }
        else{
            return <Button
                OnClick={(e)=>{
                    e.preventDefault();
                }}
                Text={"Enviar"}
                Width={'100%'}
                FontSize={60}
                Padding={`${px2vw(30)} 0vw 0vw 0vw`}
                IconClassFA={'fas fa-paper-plane'}
                ButtonPadding={`${px2vw(30)} ${px2vw(0)} ${px2vw(30)} ${px2vw(0)}`}
                ButtonBorderRadius={'0'}
                ButtonBgColor={colors.primary}
                ButtonFontColor={colors.white}
                ButtonHoverFontColor={colors.white}
            />
        }
    }

    return(
        <Container
            width={'95%'}
            height={px2vw(1200)}
            flexDirection={'column'}
            justifyContent={'center'}
            bgcolor={colors.darkcolor}
        >
                <Title
                    Text={"Contactame"}
                    Width={'100%'}
                    JustifyContent={'center'}
                    FontSize={70}
                    FontColor={colors.white}
                />
                <Container
                    width={'100%'}
                    height={px2vw(150)}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    margin={`${px2vw(50)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                >
                    <Input 
                        Id={'inputEmail'}
                        PlaceHolder={'Correo Electronico'}
                        Type={'email'}
                        Value={InputEmailValue}
                        HandleInput={HandleEmailValue}
                        ErrorState={ErrorsState.Email}
                    />
                </Container>
                <Container
                    width={'100%'}
                    height={px2vw(150)}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    margin={`${px2vw(20)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                >
                    <Input 
                        Id={'inputName'}
                        PlaceHolder={'Tu Nombre'}
                        Type={'text'}
                        Value={InputNameValue}
                        HandleInput={HandleNameValue}
                        ErrorState={ErrorsState.Name}
                    />
                </Container>
                <Container
                    width={'100%'}
                    height={px2vw(300)}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    margin={`${px2vw(20)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                >
                    <TextArea 
                        Id={'inputMessage'}
                        PlaceHolder={'Mensaje'}
                        Value={InputMessageValue}
                        HandleInput={HandleMessageValue}
                        ErrorState={ErrorsState.Message}
                        // Rows={'3'}
                    />
                </Container>
                {ManageSendingButton(IsSendingMail)}
        </Container>            
    )
}

export default DefaultEmailSender;