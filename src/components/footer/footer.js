import React,{useState} from 'react';
import ReactDOM from 'react-dom'
import alertify from "alertifyjs";
import "../../../node_modules/alertifyjs/build/css/alertify.css";
import "../../../node_modules/alertifyjs/build/css/themes/semantic.css";
import Container from '../container';
import styled from 'styled-components';
import colors from '../../constants/Colors';
import px2vw from "../../utils/px2vw";
import EmailSender from '../email-sender';
import OtherWorks from '../other-work';
import Modal from '../modal';

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
    const [ShowMailModal, setShowMailModal] = useState(false);
    const [LoadingStatus, setLoadingStatus] = useState(false);
    
    const sendForm = (emailValue,nameValue,messageValue) =>{
        if(isValidForm(emailValue,nameValue,messageValue)){
            // console.log("El formulario esta OK");
            fetch('https://www.peramegames.com/games/apis/recieveMessage.php?name=' + nameValue + '&email=' + emailValue + '&message=' + messageValue)
                .then(res => res.json())
                .then(
                    (result) => {
                        // console.log(result);
                        setInputMail('');
                        setInputName('');
                        setInputMessage('');
                        setShowMailModal(true);
                    },
                    (error) => {
                        alertify.error('Por el momento no es posible enviar tu mensaje');
                        // console.log(error);
                    }
                );
        }
        else{
            if(!emailValue){
                alertify.error('El Correo electronico es requerido');
            }
            if(!nameValue){
                alertify.error('El Nombre es requerido');
            }
            if(!messageValue){
                alertify.error('Porfavor agrega un mensaje');
            }
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
            if(!emailValidate){
                alertify.error('El formato de tu correo electronico es incorrecto');
            }
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
                     IsSendingMail={LoadingStatus}
                     HandlesSendingMail={setLoadingStatus}
                />
            </Container>
            <Modal
                IsModalVisible={ShowMailModal}
                HandleIsModalVisible={setShowMailModal}
            />
        </Footer>
    )
}

export default DefaultFooter;