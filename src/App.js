import React from 'react';
import LoginContainer from './components/loginContainer';
import Header from './components/header';
import Global from "./styles/global";
import styled from 'styled-components';

const Main = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const App = () => {
    return (
        <Main>
            <Global/>
            <Header/>
        </Main>
    )
}

export default App;