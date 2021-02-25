import React,{useState} from 'react';
import Container from '../container';
import useViewport from '../../hooks/useViewport';
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
    
    if (nameValue != "" && nameValue != undefined) {
        isValidName = true;
    }
    let regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let emailValidate = regex.test(emailValue);
    if (emailValue != "" && emailValue != undefined && emailValidate) {
        isValidMail = true;
    }
    if (messageValue != "" && messageValue != undefined) {
        isValidMessage = true;
    }
    if(isValidName && isValidMail && isValidMessage){
        return true;
    }
    else{
        return false;
    }
}

const DefaultFooter = () =>{
    let {Width} = useViewport();
    const [InputEmail, setInputMail] = useState(''); 
    const [InputName, setInputName] = useState(''); 
    const [InputMessage, setInputMessage] = useState('');
    
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
                />
            </Container>
        </Footer>
    )
}

export default DefaultFooter;