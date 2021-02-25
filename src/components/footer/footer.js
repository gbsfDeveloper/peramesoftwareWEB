import React,{useState} from 'react';
import Container from '../container';
import styled from 'styled-components';
import colors from '../../constants/Colors';
import px2vw from "../../utils/px2vw";
import EmailSender from '../email-sender';
import OtherWorks from '../other-work';

const Footer = styled.div`
    width:100%;
    padding :${px2vw(10)};
    display:flex;
    flex-direction:row;
    color:${colors.slowlycolor};
    background-color:${({bgColor}) => {return (bgColor !== undefined) ? bgColor: colors.darkcolor}};
`;

const DefaultFooter = () =>{
    // 0=start 1=OK 2=ERROR
    const inputErrorState = {
        Email: 0,
        Name: 0,
        Message: 0
    }

    const [InputsErrorState, setInputsErrorState] = useState(inputErrorState); 
    const [InputEmail, setInputMail] = useState(''); 
    const [InputName, setInputName] = useState(''); 
    const [InputMessage, setInputMessage] = useState('');
    
    const sendForm = (emailValue,nameValue,messageValue) =>{
        if(isValidForm(emailValue,nameValue,messageValue)){
            console.log("El formulario esta OK");
        }
        else{
            console.log("Existe algun error en el form");
        }
    }
    
    const isValidForm = (emailValue,nameValue,messageValue) =>{
        let isValidName = false;
        let isValidMail = false;
        let isValidMessage = false;
        let newState = {
            Email: 0,
            Name: 0,
            Message: 0
        };

        if (nameValue != "" && nameValue != undefined) {
            isValidName = true;
        }
        else{
            newState = {
                ...newState,
                Name:2
            }
        }
        let regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        let emailValidate = regex.test(emailValue);
        if (emailValue != "" && emailValue != undefined && emailValidate) {
            isValidMail = true;
        }
        else{
            newState = {
                ...newState,
                Email:2
            }
        }
        if (messageValue != "" && messageValue != undefined) {
            isValidMessage = true;
        }
        else{
            newState = {
                ...newState,
                Message:2
            }
        }
        // Asignar el nuevo estado
        setInputsErrorState({
            ...InputsErrorState,
            ...newState
        });
        if(isValidName && isValidMail && isValidMessage){
            return true;
        }
        else{
            return false;
        }
    }

    return(
        <Footer>
            <Container
                width={'100%'}
                height={'100%'}
                padding={`${px2vw(5)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                flexDirection={'row'}
            >
                <OtherWorks/>
                <EmailSender
                     InputEmailValue={InputEmail}
                     HandleEmailValue={setInputMail}
                     InputNameValue={InputName}
                     HandleNameValue={setInputName}
                     InputMessageValue={InputMessage}
                     HandleMessageValue={setInputMessage}
                     HandleButtonActions={sendForm}
                     ErrorsState={InputsErrorState}
                     HandleErrorsState={setInputsErrorState}
                />
            </Container>
        </Footer>
    )
}

export default DefaultFooter;