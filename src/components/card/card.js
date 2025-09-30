import React from 'react';
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
            width={'20vw'}
            height={px2vw(450)}
            flexDirection={'column'}
            justifyContent={'space-between'}
            flexWrap={'nowrap'}
            bgcolor={colors.white}
        >
            <Image
                Width={'100%'}
                Height={px2vw(300)}
                BgImage={process.env.PUBLIC_URL + '/imgs/user.png'}
            />
            <Container
                width={'20vw'}
                height={px2vw(150)}
                flexDirection={'column'}
                flexWrap={'wrap'}
                alignItems={'flex-start'}
                justifyContent={'center'}
                bgcolor={colors.darkcolor}
                padding={`${px2vw(0)} ${px2vw(0)} ${px2vw(0)} ${px2vw(20)}`}
            >
                <Container
                    width={'100%'}
                    height={px2vw(30)}
                    flexDirection={'row'}
                    alignItems={'center'}
                >
                    <Container
                        width={'5%'}
                    >
                        <Icon 
                            Class={'fas fa-user'}  
                            FontSize={15}
                        />
                    </Container>
                    <Message
                        Text={"Gelacio Santos Fernandez"}
                        Width={'90%'}
                        JustifyContent={'flex-start'}
                        FontSize={15}
                        FontColor={colors.white}
                    />
                </Container>
                <Container
                    width={'100%'}
                    height={px2vw(30)}
                    flexDirection={'row'}
                    alignItems={'center'}
                >
                    <Container
                        width={'5%'}
                    >
                        <Icon 
                            Class={'fas fa-map-marker-alt'}  
                            FontSize={15}
                        />
                    </Container>
                    <Message
                        Text={"Mexico City"}
                        // Text={"Ciudad de Mexico"}
                        Width={'90%'}
                        JustifyContent={'flex-start'}
                        FontSize={15}
                        FontColor={colors.white}
                    />
                </Container>
                <Container
                    width={'100%'}
                    height={px2vw(30)}
                    flexDirection={'row'}
                    alignItems={'center'}
                >
                    <Container
                        width={'5%'}
                    >
                        <Icon 
                            Class={'fas fa-envelope-open-text'}
                            FontSize={15}
                        />
                    </Container>
                    <Message
                        Text={"gbsf.software.dev@gmail.com"}
                        Width={'90%'}
                        JustifyContent={'flex-start'}
                        FontSize={15}
                        FontColor={colors.white}
                    />
                </Container>
            </Container>
            
        </Container>
    )
}

export default Card;