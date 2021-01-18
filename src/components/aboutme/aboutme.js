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
            width={'60vw'}
            height={px2vw(300)}
            padding={`${px2vw(5)} ${px2vw(40)}`}
            bgcolor={'#FFFFFF'}
            flexDirection={'column'}
        >
            <Container
                width={'100%'}
                height={'30%'}
                flexDirection={'row'}
                alignItems={'center'}
            >
                <Container
                    width={'5%'}
                >
                    <Icon 
                        Class={'fas fa-user'}  
                        FontSize={30}
                    />
                </Container>
                <Title
                    Text={"Sobre mi"}
                    Width={'95%'}
                    JustifyContent={'flex-start'}
                    FontSize={50}
                />
            </Container>
            <Message
                Width={'100%'}
                Height={'30%'}
                Text={"Mi meta más grande siempre fue desempeñarme como desarrollador de software profesional y aunque este mundo está en constante cambio, cada dia que pasa busco la forma de seguir aprendiendo y de mejorar continuamente para aprovechar al máximo todas las ventajas de las tendencias tecnológicas."}
                FontSize={25}
                TextAlign={'justify'}
            />
        </Container>
    )
}

export default AboutMe;