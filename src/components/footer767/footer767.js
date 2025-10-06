import "../../../node_modules/alertifyjs/build/css/alertify.css";
import "../../../node_modules/alertifyjs/build/css/themes/semantic.css";
import Container from '../container';
import styled from 'styled-components';
import colors from '../../constants/Colors';
import px2vw from "../../utils/px2vw";
import OtherWorks from '../other-work767';

const Footer = styled.div`
    width:100%;
    padding :${px2vw(10)};
    display:flex;
    flex-direction:row;
    color:${colors.slowlycolor};
    background-color:${({bgColor}) => {return (bgColor !== undefined) ? bgColor: colors.darkcolor}};
`;

const DefaultFooter = () =>{
    return(
        <Footer>
            <Container
                    width={'100%'}
                    height={'100%'}
                    padding={`${px2vw(20)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                    flexDirection={'column'}
            >
                <OtherWorks/>
            </Container>
        </Footer>
    )
}

export default DefaultFooter;