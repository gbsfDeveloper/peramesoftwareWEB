import React from 'react';
import styled from 'styled-components';
import Container from '../container';
import SocialButton from '../socialbutton';

const SocialContainer = ({Width,Wrap}) =>{
    return(
        <Container flexWrap={Wrap} width={Width}>
            <SocialButton 
                href={'https://www.facebook.com/gelaciobenyair.santosfernandez.3'}
                Class={'fab fa-facebook-square'}
                />
            <SocialButton 
                href={'https://www.linkedin.com/in/gelacio-ben-yair-santos-fernandez-97b597117/'}
                Class={'fab fa-linkedin'}
                />
            <SocialButton 
                href={'https://twitter.com/PeramGames'}
                Class={'fab fa-twitter-square'}
                />
        </Container>
    )
}

export default SocialContainer;

