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
            height={px2vw(450)}
            display={Display}
            padding={`${px2vw(15)} ${px2vw(40)}`}
            bgcolor={colors.white}
            flexDirection={'column'}
           // justifyContent={'space-around'}
            justifyContent={'flex-start'}
            overflowX={'hidden'}
            overflowY={'scroll'}
        >
            {/* ACTUAL EXPERIENCIA */}
            <Container
                width={'100%'}
                height={'45%'}
                flexDirection={'column'}
                alignItems={'flex-start'}
                justifyContent={'flex-start'}
                borderBottom={`1px solid ${colors.slowlycolor}`}
            >
                <Container
                    width={'100%'}
                    height={px2vw(10)}
                    flexDirection={'row'}
                    alignItems={'flex-start'}
                    justifyContent={'flex-end'}
                >
                    <Image
                        Width={px2vw(150)}
                        Height={px2vw(50)}
                        BgImage={process.env.PUBLIC_URL + '/imgs/paco.png'}
                    />
                </Container>
                <Message
                    Width={'100%'}
                    TextBold={"Desarrollador - Typescript / PHP"}
                    JustifyContent={'flex-start'}
                    FontSize={20}
                />
                <Message
                    Width={'100%'}
                    TextBold={"Junio 2022 - Actualmente"}
                    JustifyContent={'flex-start'}
                    FontSize={16}
                />
                <Message
                    Width={'100%'}
                    TextBold={"Actividades: "}
                    Text={"Desarrollo backend de RESTful APIs con Typescript / PHP para consumo de la aplicacion pacomax, uso de inteligencia artificial para desarrollo agil y testeo de funcionalidades del backend, implementacion de codigo reutilizable y facilmente escalable, implementacion de seguridad y proteccion de datos, conexion e integracion de Typescript y PHP con Mongodb, Integracion de IA (chatgpt 3.5) en el proyecto PacoMax. "}
                    FontSize={14}
                    TextAlign={'justify'}
                    Padding={`${px2vw(5)} ${px2vw(0)}`}
                />
            </Container>

             {/* ANTERIOR EXPERIENCIA */}
            <Container
                width={'100%'}
                height={'45%'}
                flexDirection={'column'}
                alignItems={'flex-start'}
                justifyContent={'flex-start'}
                borderBottom={`1px solid ${colors.slowlycolor}`}
            >
                <Container
                    width={'100%'}
                    height={px2vw(10)}
                    flexDirection={'row'}
                    alignItems={'flex-start'}
                    justifyContent={'flex-end'}
                >
                    <Image
                        Width={px2vw(150)}
                        Height={px2vw(50)}
                        BgImage={process.env.PUBLIC_URL + '/imgs/logo-exitus.png'}
                    />
                </Container>
                <Message
                    Width={'100%'}
                    TextBold={"Desarrollador Jr - PHP"}
                    JustifyContent={'flex-start'}
                    FontSize={20}
                />
                <Message
                    Width={'100%'}
                    TextBold={"Febrero 2020 - Junio 2022"}
                    JustifyContent={'flex-start'}
                    FontSize={16}
                />
                <Message
                    Width={'100%'}
                    TextBold={"Actividades: "}
                    Text={"Desarrollo de APIs REST con el lenguaje PHP destinados a proporcionar información a  aplicaciones Android y IOS creadas con React Native, uso de base de datos SQL SERVER y MySQL. Desarrollo de aplicaciones web (backend y frontend) con el framework Yii2."}
                    FontSize={15}
                    TextAlign={'justify'}
                    Padding={`${px2vw(15)} ${px2vw(0)}`}
                />
            </Container>

            {/* ANTERIOR EXPERIENCIA */}
            <Container
                width={'100%'}
                height={'45%'}
                flexDirection={'column'}
                alignItems={'flex-start'}
                justifyContent={'flex-start'}
            >
                <Container
                    width={'100%'}
                    height={px2vw(10)}
                    flexDirection={'row'}
                    alignItems={'flex-start'}
                    justifyContent={'flex-end'}
                >
                    <Image
                        Width={px2vw(150)}
                        Height={px2vw(50)}
                        BgImage={process.env.PUBLIC_URL + '/imgs/logo-konekt.png'}
                    />
                </Container>
                <Message
                    Width={'100%'}
                    TextBold={"Desarrollador Jr - Python"}
                    JustifyContent={'flex-start'}
                    FontSize={20}
                />
                <Message
                    Width={'100%'}
                    TextBold={"Agosto 2018 - Septiembre 2019"}
                    JustifyContent={'flex-start'}
                    FontSize={16}
                />
                <Message
                    Width={'100%'}
                    TextBold={"Actividades: "}
                    Text={"Desarrollo de software en lenguaje Python para solución de problemas específicos, uso y Gestión de bases de datos con MONGODB, uso de ambientes y servidores virtuales LINUX (UBUNTU, CentOS) y AWS, Frameworks para diseño de aplicaciones web :FLASK (medio)."}
                    FontSize={15}
                    TextAlign={'justify'}
                    Padding={`${px2vw(15)} ${px2vw(0)}`}
                />
            </Container>
        </Container>
    )
}

export default ProfileExperience;