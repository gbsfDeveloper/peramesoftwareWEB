import React,{useState} from 'react';
import styled from 'styled-components';
import px2vw from "../../utils/px2vw";
import colors from '../../constants/Colors';
import Container from '../container';
import Image from '../image';
import Message from '../message';

const Icon = styled.i.attrs(({Class,FontSize}) => ({
    className:  (Class !== undefined) ? Class : '',
  }))`
    padding-right:${({Class})=>{return (Class !== undefined) ? px2vw(10) : '0'}};
    font-size:${({FontSize})=>{return (FontSize !== undefined) ? px2vw(FontSize) : px2vw(70)}};
    color:${colors.white};
`;

const Card = () =>{
    
    return(
        <Container
            width={'95%'}
            height={px2vw(450)}
            flexDirection={'row'}
            justifyContent={'center'}
            flexWrap={'nowrap'}
            bgcolor={colors.white}
        >
            <Image
                Width={'25%'}
                Height={'90%'}
                BgImage={'/imgs/user.png'}
            />
            <Container
                width={'70%'}
                height={'90%'}
                flexDirection={'column'}
                flexWrap={'wrap'}
                alignItems={'flex-start'}
                justifyContent={'center'}
                bgcolor={colors.darkcolor}
                padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(20)}`}
            >
                {/* <Container
                    width={'100%'}
                    height={px2vw(70)}
                    flexDirection={'row'}
                    alignItems={'center'}
                >
                    <Container
                        width={'5%'}
                    >
                        <Icon 
                            Class={'fas fa-user'}  
                            FontSize={40}
                        />
                    </Container>
                    <Message
                        Text={"Gelacio Santos Fernandez"}
                        Width={'90%'}
                        JustifyContent={'flex-start'}
                        FontSize={50}
                        FontColor={colors.white}
                    />
                </Container> */}
                <Container
                    width={'100%'}
                    height={px2vw(80)}
                    flexDirection={'row'}
                    alignItems={'center'}
                >
                    <Container
                        width={'5%'}
                    >
                        <Icon 
                            Class={'fas fa-map-marker-alt'}  
                            FontSize={40}
                        />
                    </Container>
                    <Message
                        Text={"Ciudad de Mexico"}
                        Width={'90%'}
                        JustifyContent={'flex-start'}
                        FontSize={50}
                        FontColor={colors.white}
                    />
                </Container>
                <Container
                    width={'100%'}
                    height={px2vw(80)}
                    flexDirection={'row'}
                    alignItems={'center'}
                >
                    <Container
                        width={'5%'}
                    >
                        <Icon 
                            Class={'fas fa-mobile-alt'}
                            FontSize={40}
                        />
                    </Container>
                    <Message
                        Text={"914 114 18 95"}
                        Width={'90%'}
                        JustifyContent={'flex-start'}
                        FontSize={50}
                        FontColor={colors.white}
                    />
                </Container>
                <Container
                    width={'100%'}
                    height={px2vw(80)}
                    flexDirection={'row'}
                    alignItems={'center'}
                >
                    <Container
                        width={'5%'}
                    >
                        <Icon 
                            Class={'fas fa-envelope-open-text'}
                            FontSize={40}
                        />
                    </Container>
                    <Message
                        Text={"gbsf.software.dev@gmail.com"}
                        Width={'90%'}
                        JustifyContent={'flex-start'}
                        FontSize={50}
                        FontColor={colors.white}
                    />
                </Container>
            </Container>
            
        </Container>
    )
}

export default Card;