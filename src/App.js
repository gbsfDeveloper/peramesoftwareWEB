import React from 'react';
import useViewport from './hooks/useViewport';
import Header767 from './components/header767';
import Footer767 from './components/footer767';
import Profile767 from './components/profile767';
import Header from './components/header';
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
    let {Width} = useViewport();
    const reponsiveDesign = () => {
        if(Width<767){
            return <>
                <Header767/>
                <Profile767/>
                <Footer767/>
            </>
        }
        else if(Width>768 && Width<1024){
            return <>
                <Header767/>
                <Profile767/>
                <Footer767/>
            </>
        }
        else if(Width>1025){
            return <>
                <Header/>
                <Profile/>
                <Footer/>
            </>
        }
    }

    return (
        <Main>
            <Global/>
            {reponsiveDesign()}
        </Main>
    )
}

export default App;