import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import colors from '../../constants/Colors';
import px2vw from "../../utils/px2vw";
import Container from '../container';
import Button from '../button';
import Message from '../message';

const Modal = styled.div.attrs(({IsModalVisible, HandleIsModalVisible}) => ({
    onClick:()=>{HandleIsModalVisible(false)}
  }))`
    width:100vw;
    height:100vh;
    display:${({IsModalVisible}) =>(IsModalVisible ? 'flex' : 'none')};
    position:fixed;
    margin:auto;
    top:0;
    right:0;
    bottom: 0;
    left: 0;
`
// modal component
const PortalModal = ({children,IsModalVisible,HandleIsModalVisible}) =>{
    return(
        ReactDOM.createPortal((
            <Modal
                IsModalVisible={IsModalVisible}
                HandleIsModalVisible={HandleIsModalVisible}
            >
                <Container
                    width={'100%'}
                    height={'100%'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    justifyItems={'center'}
                    alignItems={'center'}
                    alignContent={'center'}
                    bgcolor={'rgba(0,0,0,0.4)'}
                >
                    <Container
                        width={'45%'}
                        flexDirection={'column'}
                        alignItems={'flex-end'}
                        bgcolor={colors.darkcolor}
                    >   
                        <Button
                            OnClick={(e)=>{ e.preventDefault()}}
                            Text={""}
                            Width={'5%'}
                            FontSize={17}
                            IconClassFA={'fas fa-times'}
                            ButtonPadding={px2vw(5)}
                            ButtonBorderRadius={'0'}
                            ButtonBgColor={'transparent'}
                            ButtonFontColor={colors.primary}
                            ButtonHoverFontColor={colors.white}
                            JustifyContent={'flex-end'}
                        />
                    </Container>
                    <Container
                        width={'45%'}
                        bgcolor={colors.white}
                        flexDirection={'column'}
                        padding={`${px2vw(20)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                    > 
                        <Message 
                            TextBold={"¡Gracias por contactarme!"}
                            FontSize={25}
                            Width={'50%'}
                            Height={px2vw(17)}
                            TextAlign={'left'}
                        /> 
                        <Message 
                            Text={"En cuanto vea tu mensaje te enviare una respuesta"}
                            FontSize={17}
                            Width={'100%'}
                            Height={px2vw(150)}
                        /> 
                    </Container>
                </Container>
            </Modal>
        ),document.getElementById('modal-root'))
    )
}
export default PortalModal;