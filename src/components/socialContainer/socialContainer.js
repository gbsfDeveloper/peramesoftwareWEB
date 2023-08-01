import React from 'react';
import Container from '../container';
import SocialButton from '../socialbutton';

const SocialContainer = ({Width,Wrap,FontSize}) =>{
    return(
        <Container flexWrap={Wrap} width={Width}>
            
            {/* <SocialButton 
                href={'https://www.facebook.com/gelaciobenyair.santosfernandez.3'}
                Class={'fab fa-facebook-square'}
                FontSize={FontSize}
                /> */}
            <SocialButton 
                href={'https://www.linkedin.com/in/gelacio-ben-yair-santos-fernandez-97b597117/'}
                Class={'fab fa-linkedin'}
                FontSize={FontSize}
                />
            <SocialButton 
                href={'https://github.com/gbsfDeveloper'}
                Class={'fab fa-github'}
                FontSize={FontSize + 10}
            />
            {/* <SocialButton 
                href={'https://twitter.com/PeramGames'}
                Class={'fab fa-twitter-square'}
                FontSize={FontSize}
                /> */}
        </Container>
    )
}

export default SocialContainer;

