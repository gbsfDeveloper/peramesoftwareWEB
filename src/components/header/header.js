import React,{useState} from 'react';
import styled from 'styled-components';

const Header = styled.div`

`;

const DefaultHeader = (props) =>{
    const [busqueda,setBusqueda] = useState('');
    return(
        <Header>
        </Header>
    )
}

export default DefaultHeader;