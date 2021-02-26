import React,{useState} from 'react';
import colors from '../../constants/Colors';
import px2vw from "../../utils/px2vw";
import Container from '../container';
import Title from '../title';
import Button from '../button';

const DefaultOtherWorks = ({bgColor}) =>{
    return(
        <Container
            width={'50%'}
            height={px2vw(200)}
            padding={`${px2vw(13)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
            flexDirection={'column'}
            justifyContent={'flex-start'}
            bgcolor={colors.darkcolor}
        >
                <Title
                    Text={"Portafolio"}
                    Width={'100%'}
                    JustifyContent={'center'}
                    FontSize={20}
                    FontColor={colors.white}
                />
                <Container
                    width={'50%'}
                    padding={`${px2vw(25)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                    flexDirection={'row'}
                    justifyContent={'space-around'}
                >
                    <Button
                        Text={""}
                        Href={'https://github.com/gbsfDeveloper'}
                        Width={'8vw'}
                        Height={'7vw'}
                        FontSize={65}
                        IconClassFA={'fab fa-github'}
                        ButtonWidth={'100%'}
                        ButtonHeight={'100%'}
                        ButtonBorderRadius={'0'}
                        ButtonBgColor={colors.primary}
                        ButtonFontColor={colors.white}
                        ButtonHoverFontColor={colors.white}
                    />
                    <Button
                        Text={""}
                        Href={'https://www.hackerrank.com/gbsfgames'}
                        Width={'8vw'}
                        Height={'7vw'}
                        FontSize={65}
                        IconClassFA={'fab fa-hackerrank'}
                        ButtonWidth={'100%'}
                        ButtonHeight={'100%'}
                        ButtonBorderRadius={'0'}
                        ButtonBgColor={colors.primary}
                        ButtonFontColor={colors.white}
                        ButtonHoverFontColor={colors.white}
                    />
                </Container>
        </Container>
            
    )
}

export default DefaultOtherWorks;