import React from 'react'
import {useColorMode} from "@chakra-ui/color-mode";
import {useMediaQuery} from '@chakra-ui/media-query';
import NextLink from 'next/link';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, HStack, ListItem, Tag, Text, VStack } from '@chakra-ui/react';
import { Link } from "react-scroll";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
function DevNote(props:any) {
    
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isSmallScreen] = useMediaQuery('(min-width:750px)');

    return (
        <>
        <Box mt={30} p ={30}>
          <Text fontSize="3xl" fontWeight="bold">
            Dev Note
          </Text>
        </Box>
        
        <Box w="80%">
        <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
                <Tab>(주)카피앤패이스트</Tab>
                <Tab>(주)에코플래그</Tab>
                <Tab>개인프로젝트</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                <Accordion allowMultiple defaultIndex={[0]} allowToggle mb={2}>
                    <AccordionItem>
                        <h2>
                        <AccordionButton backgroundColor={isDark? "gray.600" : "gray.100"} _expanded={{ bg: isDark? "gray.500" : "gray.200", color: isDark ? "white" : "gray.700" }}>
                            {isSmallScreen ? 
                            <HStack spacing={1} flex="1" textAlign="left">
                                <Box>
                                EPC Cloud IoT Portal 구축 프로젝트 - 케이티 
                                </Box>
                                <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="gray">
                                 AngularJS
                                </Tag>
                                <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="blue">
                                 Javascript
                                </Tag>
                                <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="red">
                                 JAVA
                                </Tag>
                                <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="pink">
                                 Spring Framework
                                </Tag>
                            </HStack>
                            :
                            <Box flex="1" textAlign="left">
                            EPC Cloud IoT Portal 구축 프로젝트 
                            </Box>
                            
                            }
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel>
                        {isSmallScreen ? 
                        '':
                        <HStack spacing={1}>
                            <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="gray">
                            AngularJS
                            </Tag>
                            <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="blue">
                            Javascript
                            </Tag>
                            <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="red">
                            JAVA
                            </Tag>
                            <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="pink">
                            Spring Framework
                            </Tag>
                        </HStack>
                        }
                        <Text fontSize="xl" mb={3}>
                            2020.09 ~ 2020.11
                        </Text>
                        <ListItem>
                            애자일 방법론 프로젝트
                        </ListItem>
                        <ListItem>
                            CI/CD 방식의 DevOps 진행 - SonarQube, Nexus, Docker, Jenkins, GitHub
                        </ListItem>
                        <ListItem>
                            Slack, Trello 이용하여 업무 소통 및 협력
                        </ListItem>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                    <h2>
                    <AccordionButton backgroundColor={isDark? "gray.600" : "gray.100"} _expanded={{ bg: isDark? "gray.500" : "gray.200", color: isDark ? "white" : "gray.700" }}>
                    {isSmallScreen ? 
                        <HStack spacing={1} flex="1" textAlign="left">
                                <Box>
                                    TV Coupon 서비스 고도화  - 케이티하이텔
                                </Box>
                                <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="blue">
                                 Javascript
                                </Tag>
                                <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="red">
                                 JAVA
                                </Tag>
                                <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="pink">
                                 Spring Framework
                                </Tag>
                            </HStack>
                            :
                            <Box flex="1" textAlign="left">
                                TV Coupon 서비스 고도화
                            </Box>
                    }

                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel>
                    {isSmallScreen ? 
                    '': 
                    <HStack spacing={1}>
                        <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="blue">
                        Javascript
                        </Tag>
                        <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="red">
                        JAVA
                        </Tag>
                        <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="pink">
                        Spring Framework
                        </Tag>
                    </HStack>
                    }
                        <Text fontSize="xl" mb={3}>
                            2020.07 ~ 2020.09
                        </Text>
                        <ListItem>
                            서비스 연동방식 변경으로 인한 Proxy API Gateway 구축
                        </ListItem>
                        <ListItem>
                            간편결제 시스템 구축
                        </ListItem>
                        <ListItem>
                            신규 쿠폰 발급 서비스 구축
                        </ListItem>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                    <AccordionButton backgroundColor={isDark? "gray.600" : "gray.100"} _expanded={{ bg: isDark? "gray.500" : "gray.200", color: isDark ? "white" : "gray.700" }}>
                    {isSmallScreen ? 
                        <HStack spacing={1} flex="1" textAlign="left">
                                <Box >
                                    마이크로템플릿 WEBAPP Service 고도화 - 케이티하이텔
                                </Box>
                                <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="blue">
                                 Javascript
                                </Tag>
                            </HStack>
                            :
                            <Box flex="1" textAlign="left">
                                마이크로템플릿 WEBAPP Service 고도화
                            </Box>
                    }

                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel>
                    {isSmallScreen ? 
                    '': 
                    <HStack spacing={1}>
                        <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="blue">
                        Javascript
                        </Tag>
                    </HStack>
                    }
                        <Text fontSize="xl" mb={3}>
                            2020.06 ~ 2020.09
                        </Text>
                        <ListItem>
                            상용 서비스중인 STB APP 마케팅 수신동의 정책 변경으로 인한 고도화
                        </ListItem>
                        <ListItem>
                            UI 및 STB KeyEvent 수정
                        </ListItem>
                        <ListItem>
                            신규 API 연동 개발
                        </ListItem>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                    <AccordionButton backgroundColor={isDark? "gray.600" : "gray.100"} _expanded={{ bg: isDark? "gray.500" : "gray.200", color: isDark ? "white" : "gray.700" }}>
                    {isSmallScreen ? 
                        <HStack spacing={1} textAlign="left" flex="1" >
                                <Box >
                                    Oauth2 / Vue.js 이용한 사내 로그인 서비스 솔루션 구축 - 내부과제
                                </Box>
                                <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="blue">
                                 Javascript
                                </Tag>
                                <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="cyan">
                                 VueJs
                                </Tag>
                            </HStack>
                            :
                            <Box flex="1" textAlign="left">
                                Oauth2 / Vue.js 이용한 사내 로그인 서비스 솔루션 구축
                            </Box>
                    }

                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel>
                    {isSmallScreen ? 
                    '': 
                    <HStack spacing={1}>
                        <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="blue">
                            Javascript
                        </Tag>
                        <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="cyan">
                            VueJs
                        </Tag>
                    </HStack>
                    }
                        <Text fontSize="xl" mb={3}>
                            2020.03 ~ 2020.05
                        </Text>
                        <ListItem>
                            로그인 서버 개발로 인한 Oauth2방식 로그인 서비스 구축
                        </ListItem>
                        <ListItem>
                            로그인이 필요한 프로젝트에 구축할 수 있도록 솔루션 개발
                        </ListItem>
                        <ListItem>
                            인증토큰 발급 및 Page redirect
                        </ListItem>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                    <AccordionButton backgroundColor={isDark? "gray.600" : "gray.100"} _expanded={{ bg: isDark? "gray.500" : "gray.200", color: isDark ? "white" : "gray.700" }}>
                    {isSmallScreen ? 
                        <HStack spacing={1} textAlign="left" flex="1" >
                                <Box>
                                    GolfZone Matrixview 서비스 개발 - 골프존
                                </Box>
                                <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="teal">
                                 Android
                                </Tag>
                                <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="telegram">
                                 C
                                </Tag>
                                <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="telegram">
                                 NDK
                                </Tag>
                            </HStack>
                            :
                            <Box flex="1" textAlign="left">
                                GolfZone Matrixview 서비스 개발
                            </Box>
                    }

                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel>
                    {isSmallScreen ? 
                    '': 
                    <HStack spacing={1}>
                        <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="teal">
                            Android
                        </Tag>
                        <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="telegram">
                            C
                        </Tag>
                        <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="telegram">
                            NDK
                        </Tag>
                    </HStack>
                    }
                        <Text fontSize="xl" mb={3}>
                        2019.6 ~ 2019.11
                        </Text>
                        <ListItem>
                        기존 타임슬라이스 기능을 전체 수정. 스트리머 제거, 카메라 인코더 개수 단축 및 영상편집툴
변경, 파일규격 변경
                        </ListItem>
                        <ListItem>
                        수정된 내용에 따른 Android APP Streaming Service 구축
                        </ListItem>
                        <ListItem>
                        Android Stream Library 개발 참여 NDK를 이용한 C언어 파일 스트리밍 Library 개발
                        </ListItem>
                        
                        <ListItem>
                            현재 ‘GolfZon 안성’에서 서비스 진행중
                        </ListItem>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                    <AccordionButton backgroundColor={isDark? "gray.600" : "gray.100"} _expanded={{ bg: isDark? "gray.500" : "gray.200", color: isDark ? "white" : "gray.700" }}>
                    {isSmallScreen ? 
                        <HStack spacing={1} textAlign="left" flex="1" >
                                <Box>
                                    Freeview 서비스 개발 - 케이티
                                </Box>
                                <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="red">
                                 JAVA
                                </Tag>
                                <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="pink">
                                 Spring Framework
                                </Tag>
                                <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="purple">
                                 Netty
                                </Tag>
                            </HStack>
                            :
                            <Box flex="1" textAlign="left">
                                Freeview 서비스 개발
                            </Box>
                    }

                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel>
                    {isSmallScreen ? 
                    '': 
                    <HStack spacing={1}>
                        <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="red">
                            JAVA
                        </Tag>
                        <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="pink">
                            Spring Framework
                        </Tag>
                        <Tag size={'sm'} key={'sm'} variant="solid" colorScheme="purple">
                            Netty
                        </Tag>
                    </HStack>
                    }
                        <Text fontSize="xl" mb={3}>
                        2018.12 ~ 2019.03
                        </Text>
                        <ListItem>
                        KT WIZ 야구단 야구경기 멀티 뷰 촬영 상용화를 위한 Streaming Service 안정화 및 API 서버 개발
                        </ListItem>
                        <ListItem>
                        Shell Script를 이용한 CMS 연동 Streaming Server 안정화 장치 개발
                        </ListItem>
                        <ListItem>
                        CMS 간소화 및 Wizzap 연동으로 인한 API 재구성 및 개발
                        </ListItem>
                        <ListItem>
                        2019년 3월 29일 ~ 현재까지 상용 후 촬영 일 기준 일당 400 ~ 500회 접속
                        </ListItem>
                    </AccordionPanel>
                </AccordionItem>
                </Accordion>
                </TabPanel>
                <TabPanel>
                <p>two!</p>
                </TabPanel>
                <TabPanel>
                <p>two!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
        </Box>

        </>
    ) 
}

export default DevNote
