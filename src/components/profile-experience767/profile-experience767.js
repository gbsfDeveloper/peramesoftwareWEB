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
            height={px2vw(3200)}
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
                    TextBold={"Back/Front Developer - Typescript / PHP"}
                    JustifyContent={'flex-start'}
                    FontSize={70}
                    Padding={`${px2vw(80)} ${px2vw(0)} ${px2vw(0)} ${px2vw(0)}`}
                />
                <Message
                    Width={'100%'}
                    TextBold={"June 2022 - Actually"}
                    JustifyContent={'flex-start'}
                    FontSize={60}
                />
                <Message
                    Width={'100%'}
                    TextBold={"Actividades: "}
                    Text={"Backend development of RESTful APIs with Typescript / PHP for consumption of the pacomax application, use of artificial intelligence for agile development and testing of backend functionalities, implementation of reusable and easily scalable code, implementation of security and data protection, connection and integration of Typescript and PHP with Mongodb, AI integration (chatgpt 3.5) in the PacoMax project."}
                    FontSize={60}
                    TextAlign={'justify'}
                    Padding={`${px2vw(15)} ${px2vw(0)}`}
                />
            </Container>

            {/* ESPACIO */}
            <Container
                width={'95%'}
                height={px2vw(1)}
                margin={`${px2vw(50)} ${px2vw(0)} ${px2vw(50)} ${px2vw(0)}`}
                bgcolor={colors.darkcolor}
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
                    TextBold={"Developer Jr - PHP"}
                    JustifyContent={'flex-start'}
                    FontSize={70}
                />
                <Message
                    Width={'100%'}
                    TextBold={"February 2020 - June 2022"}
                    JustifyContent={'flex-start'}
                    FontSize={60}
                />
                <Message
                    Width={'100%'}
                    TextBold={"Activities: "}
                    Text={"Development of REST APIs with the PHP language intended to provide information to Android and IOS applications created with React Native, use of SQL SERVER and MySQL databases. Development of web applications (backend and frontend) with the Yii2 framework."}
                    FontSize={60}
                    TextAlign={'justify'}
                    Padding={`${px2vw(15)} ${px2vw(0)}`}
                />
            </Container>
            
            {/* ESPACIO */}
            <Container
                width={'95%'}
                height={px2vw(1)}
                margin={`${px2vw(50)} ${px2vw(0)} ${px2vw(50)} ${px2vw(0)}`}
                bgcolor={colors.darkcolor}
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
                    TextBold={"Developer Jr - Python"}
                    JustifyContent={'flex-start'}
                    FontSize={70}
                />
                <Message
                    Width={'100%'}
                    TextBold={"August 2018 - September 2019"}
                    JustifyContent={'flex-start'}
                    FontSize={60}
                />
                <Message
                    Width={'100%'}
                    TextBold={"Activities: "}
                    Text={"Software development in Python language for solving specific problems, use and management of databases with MONGODB, use of LINUX environments and virtual servers (UBUNTU, CentOS) and AWS, Frameworks for web application design: FLASK."}
                    FontSize={55}
                    TextAlign={'justify'}
                    Padding={`${px2vw(15)} ${px2vw(0)}`}
                />
            </Container>
        </Container>
    )
}

export default ProfileExperience;