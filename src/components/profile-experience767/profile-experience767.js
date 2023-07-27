import React from 'react';
import px2vw from "../../utils/px2vw";
import colors from '../../constants/Colors';
import Container from '../container';
import Image from '../image';
import Message from '../message';

const ProfileExperience = ({Display}) =>{
    return(
        <Container
            width={'100%'}
            height={px2vw(3000)}
            display={Display}
            padding={`${px2vw(60)} ${px2vw(40)}`}
            bgcolor={colors.white}
            flexDirection={'column'}
            justifyContent={'flex-start'}
        >
            {/* ACTUAL EXPERIENCIA */}
            <Container
                width={'100%'}
                // height={'35%'}
                flexDirection={'column'}
                alignItems={'flex-start'}
                justifyContent={'flex-start'}
            >
                <Container
                    width={'100%'}
                    height={px2vw(60)}
                    flexDirection={'row'}
                    alignItems={'flex-start'}
                    justifyContent={'flex-end'}
                >
                    <Image
                        Width={px2vw(400)}
                        Height={px2vw(130)}
                        BgImage={process.env.PUBLIC_URL + '/imgs/paco.png'}
                    />
                </Container>
                <Message
                    Width={'100%'}
                    TextBold={"Desarrollador - Typescript / PHP"}
                    JustifyContent={'flex-start'}
                    FontSize={70}
                    Padding={`${px2vw(80)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                />
                <Message
                    Width={'100%'}
                    TextBold={"Junio 2022 - Actualmente"}
                    JustifyContent={'flex-start'}
                    FontSize={60}
                />
                <Message
                    Width={'100%'}
                    TextBold={"Actividades: "}
                    Text={"Desarrollo backend de RESTful APIs con Typescript / PHP para consumo de la aplicacion pacomax, uso de inteligencia artificial para desarrollo agil y testeo de funcionalidades del backend, implementacion de codigo reutilizable y facilmente escalable, implementacion de seguridad y proteccion de datos, conexion e integracion de Typescript y PHP con Mongodb, Integracion de IA (chatgpt 3.5) en el proyecto PacoMax. "}
                    FontSize={60}
                    TextAlign={'justify'}
                    Padding={`${px2vw(15)} ${px2vw(0)}`}
                />
            </Container>

            {/* ESPACIO */}
            <Container
                width={'100%'}
                height={`${px2vw(5)}`}
                borderBottom={`1px solid ${colors.slowlycolor}`}
            ></Container>

            {/* ANTERIOR EXPERIENCIA */}
            <Container
                width={'100%'}
                // height={'30%'}
                flexDirection={'column'}
                alignItems={'flex-start'}
                justifyContent={'flex-start'}
                borderBottom={`1px solid ${colors.slowlycolor}`}
            >
                <Container
                    width={'100%'}
                    height={px2vw(50)}
                    flexDirection={'row'}
                    alignItems={'flex-start'}
                    justifyContent={'flex-end'}
                >
                    <Image
                        Width={px2vw(400)}
                        Height={px2vw(130)}
                        BgImage={process.env.PUBLIC_URL + '/imgs/logo-exitus.png'}
                    />
                </Container>
                <Message
                    Width={'100%'}
                    TextBold={"Desarrollador Jr - PHP"}
                    JustifyContent={'flex-start'}
                    FontSize={70}
                />
                <Message
                    Width={'100%'}
                    TextBold={"Febrero 2020 - Junio 2022"}
                    JustifyContent={'flex-start'}
                    FontSize={60}
                />
                <Message
                    Width={'100%'}
                    TextBold={"Actividades: "}
                    Text={"Desarrollo de APIs REST con el lenguaje PHP destinados a proporcionar información a  aplicaciones Android y IOS creadas con React Native, uso de base de datos SQL SERVER y MySQL. Desarrollo de aplicaciones web (backend y frontend) con el framework Yii2."}
                    FontSize={60}
                    TextAlign={'justify'}
                    Padding={`${px2vw(15)} ${px2vw(0)}`}
                />
            </Container>
            
            {/* ESPACIO */}
            <Container
                width={'100%'}
                height={`${px2vw(5)}`}
                borderBottom={`1px solid ${colors.slowlycolor}`}
            ></Container>
            
            {/* ANTERIOR EXPERIENCIA */}
            <Container
                width={'100%'}
                // height={'30%'}
                flexDirection={'column'}
                alignItems={'flex-start'}
                justifyContent={'flex-start'}
            >
                <Container
                    width={'100%'}
                    height={px2vw(50)}
                    flexDirection={'row'}
                    alignItems={'flex-start'}
                    justifyContent={'flex-end'}
                >
                    <Image
                        Width={px2vw(400)}
                        Height={px2vw(130)}
                        BgImage={process.env.PUBLIC_URL + '/imgs/logo-konekt.png'}
                    />
                </Container>
                <Message
                    Width={'100%'}
                    TextBold={"Desarrollador Jr - Python"}
                    JustifyContent={'flex-start'}
                    FontSize={70}
                />
                <Message
                    Width={'100%'}
                    TextBold={"Agosto 2018 - Septiembre 2019"}
                    JustifyContent={'flex-start'}
                    FontSize={60}
                />
                <Message
                    Width={'100%'}
                    TextBold={"Actividades: "}
                    Text={"Desarrollo de software en lenguaje Python para solución de problemas específicos, uso y Gestión de bases de datos con MONGODB, uso de ambientes y servidores virtuales LINUX (UBUNTU, CentOS) y AWS, Frameworks para diseño de aplicaciones web :FLASK (medio)."}
                    FontSize={55}
                    TextAlign={'justify'}
                    Padding={`${px2vw(15)} ${px2vw(0)}`}
                />
            </Container>
        </Container>
    )
}

export default ProfileExperience;