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
                    // TextBold={"Desarrollador - Typescript / PHP"}
                    TextBold={"Back & Front Developer - Typescript / PHP"}
                    JustifyContent={'flex-start'}
                    FontSize={20}
                />
                <Message
                    Width={'100%'}
                    // TextBold={"Junio 2022 - Actualmente"}
                    TextBold={"June 2022 - Actually"}
                    JustifyContent={'flex-start'}
                    FontSize={16}
                />
                <Message
                    Width={'100%'}
                    // TextBold={"Actividades: "}
                    TextBold={"Activities: "}
                    // Text={"Desarrollo backend de RESTful APIs con Typescript / PHP para consumo de la aplicacion pacomax, uso de inteligencia artificial para desarrollo agil y testeo de funcionalidades del backend, implementacion de codigo reutilizable y facilmente escalable, implementacion de seguridad y proteccion de datos, conexion e integracion de Typescript y PHP con Mongodb, Integracion de IA (chatgpt 3.5) en el proyecto PacoMax. "}
                    Text={"Backend development of RESTful APIs with Typescript / PHP for consumption of the pacomax application, use of artificial intelligence for agile development and testing of backend functionalities, implementation of reusable and easily scalable code, implementation of security and data protection, connection and integration of Typescript and PHP with Mongodb, AI integration (chatgpt 3.5) in the PacoMax project."}
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
                    // TextBold={"Desarrollador Jr - PHP"}
                    TextBold={"Developer Jr - PHP"}
                    JustifyContent={'flex-start'}
                    FontSize={20}
                />
                <Message
                    Width={'100%'}
                    // TextBold={"Febrero 2020 - Junio 2022"}
                    TextBold={"February 2020 - June 2022"}
                    JustifyContent={'flex-start'}
                    FontSize={16}
                />
                <Message
                    Width={'100%'}
                    // TextBold={"Actividades: "}
                    TextBold={"Activities: "}
                    Text={"Development of REST APIs with the PHP language intended to provide information to Android and IOS applications created with React Native, use of SQL SERVER and MySQL databases. Development of web applications (backend and frontend) with the Yii2 framework."}
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
                    TextBold={"Developer Jr - Python"}
                    JustifyContent={'flex-start'}
                    FontSize={20}
                />
                <Message
                    Width={'100%'}
                    TextBold={"August 2018 - September 2019"}
                    JustifyContent={'flex-start'}
                    FontSize={16}
                />
                <Message
                    Width={'100%'}
                    TextBold={"Actividades: "}
                    // Text={"Desarrollo de software en lenguaje Python para solución de problemas específicos, uso y Gestión de bases de datos con MONGODB, uso de ambientes y servidores virtuales LINUX (UBUNTU, CentOS) y AWS, Frameworks para diseño de aplicaciones web :FLASK (medio)."}
                    Text={"Software development in Python language for solving specific problems, use and management of databases with MONGODB, use of LINUX environments and virtual servers (UBUNTU, CentOS) and AWS, Frameworks for web application design: FLASK."}
                    FontSize={15}
                    TextAlign={'justify'}
                    Padding={`${px2vw(15)} ${px2vw(0)}`}
                />
            </Container>
        </Container>
    )
}

export default ProfileExperience;