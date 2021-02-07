import React,{useState} from 'react';
import useViewport from '../../hooks/useViewport';
import styled from 'styled-components';
import colors from '../../constants/Colors';
import px2vw from "../../utils/px2vw";
import Container from '../container';
import NavBar from '../navbar';
import Card from '../card';
import AboutMe from '../aboutme';
import Title from '../title';
import Message from '../message';

const DefaultOtherWorks = ({bgColor}) =>{
    let {Width} = useViewport();
    return(
        <Container
            width={'50%'}
            height={px2vw(200)}
            flexDirection={'column'}
            justifyContent={'flex-start'}
            bgcolor={'yellow'}
        >
                <h2 class="contactTitle">Otros trabajos</h2>
                <div class="icons-container d-flex align-self-center">
                    <a class="icon-link col-6" href="https://github.com/gbsfgames" target="_blank">
                    <div class="oneIcon d-flex flex-column ">
                        <i class="icon-logo fab fa-github"></i>
                        <span class="icon-title">Github</span>
                        <p class="icon-text">Software Desarrollado</p>
                    </div>
                    </a>
                    <a class="icon-link col-6" href="https://www.hackerrank.com/gbsfgames" target="_blank">
                    <div class="oneIcon d-flex flex-column ">
                        <i class="icon-logo fab fa-hackerrank"></i>
                        <span class="icon-title">Hacker Rank</span>
                        <p class="icon-text">Algunos de mis logros</p>
                    </div>
                    </a>
                </div>
        </Container>
            
    )
}

export default DefaultOtherWorks;