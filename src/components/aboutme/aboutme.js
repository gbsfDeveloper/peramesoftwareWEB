import React,{useState} from 'react';
import styled from 'styled-components';
import px2vw from "../../utils/px2vw";
import colors from '../../constants/Colors';
import Container from '../container';
import Title from '../title';
import Message from '../message';

const Icon = styled.i.attrs(({Class,FontSize}) => ({
    className:  (Class !== undefined) ? Class : '',
  }))`
    padding-right:${({Class})=>{return (Class !== undefined) ? px2vw(10) : '0'}};
    font-size:${({FontSize})=>{return (FontSize !== undefined) ? px2vw(FontSize) : px2vw(70)}};
`;

const AboutMe = ({bgColor}) =>{
    return(
        <Container
            width={'40vw'}
            height={px2vw(300)}
            padding={`${px2vw(5)} ${px2vw(40)}`}
            bgcolor={'#FFFFFF'}
            flexDirection={'column'}
            justifyContent={'flex-start'}
        >
            <Container
                width={'100%'}
                height={px2vw(50)}
                flexDirection={'row'}
                alignItems={'center'}
            >
                <Container
                    width={'5%'}
                >
                    <Icon 
                        Class={'fas fa-user'}  
                        FontSize={20}
                    />
                </Container>
                <Title
                    Text={"Acerca de"}
                    Width={'95%'}
                    JustifyContent={'flex-start'}
                    FontSize={30}
                />
            </Container>
            <Message
                Width={'100%'}
                Text={"Mi meta más grande siempre fue desempeñarme como un profesional del desarrollo de software y aunque este mundo está en constante cambio, cada dia que pasa busco la forma de seguir aprendiendo y de mejorar continuamente, aprovechando al máximo todas las ventajas de las tendencias tecnológicas."}
                FontSize={22}
                TextAlign={'justify'}
            />
        </Container>
    )
}

export default AboutMe;