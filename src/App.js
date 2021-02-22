import React from 'react';
import Header from './components/header';
import Header767 from './components/header767';
import Profile from './components/profile';
import Footer from './components/footer';
import Global from "./styles/global";
import styled from 'styled-components';


const Main = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const App = () => {
    return (
        <Main>
            <Global/>
            <Header767/>
            <Profile/>
            <Footer/>
        </Main>
    )
}

export default App;