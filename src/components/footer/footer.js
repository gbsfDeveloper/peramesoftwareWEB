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
    /* height: 100%; */
    padding :${px2vw(10)};
    display:flex;
    flex-direction:row;
    color:${colors.slowlycolor};
    background-color:${({bgColor}) => {return (bgColor !== undefined) ? bgColor: colors.darkcolor}};
`;

const DefaultFooter = () =>{
    let {Width} = useViewport();
    const [InputEmail, setInputMail] = useState('222'); 
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
                />
            </Container>
        </Footer>
    )
}

export default DefaultFooter;