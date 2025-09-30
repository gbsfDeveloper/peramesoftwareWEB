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
                BgImage={process.env.PUBLIC_URL + '/imgs/user.png'}
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
                <Container
                    width={'100%'}
                    height={px2vw(80)}
                    flexDirection={'row'}
                    alignItems={'center'}
                >
                    <Container
                        width={'7%'}
                    >
                        <Icon 
                            Class={'fas fa-map-marker-alt'}  
                            FontSize={50}
                        />
                    </Container>
                    <Message
                        // Text={"Ciudad de Mexico"}
                        Text={"Mexico City"}
                        Width={'90%'}
                        JustifyContent={'flex-start'}
                        FontSize={55}
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
                        width={'7%'}
                    >
                        <Icon 
                            Class={'fas fa-envelope-open-text'}
                            FontSize={50}
                        />
                    </Container>
                    <Message
                        Text={"gbsf.software.dev@gmail.com"}
                        Width={'90%'}
                        JustifyContent={'flex-start'}
                        FontSize={55}
                        FontColor={colors.white}
                    />
                </Container>
            </Container>
            
        </Container>
    )
}

export default Card;