import React, {useState} from 'react'
import { Heading, Spacer } from '@chakra-ui/layout';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Box,  Button,  Flex, HStack, IconButton, Link, Text, useDisclosure } from '@chakra-ui/react';
import {useColorMode} from "@chakra-ui/color-mode";
import {useMediaQuery} from '@chakra-ui/media-query';
import { FaSun, FaMoon, FaInstagram, FaGithub, FaMediumM, FaRegWindowClose, FaWindowClose} from 'react-icons/fa';
import NextLink from 'next/link';
import SideMenu from './SideMenu';

function menu() {
    const { colorMode, toggleColorMode} = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [display , changeDisplay] = useState(false);
    const isDark = colorMode === "dark";
    const btnRef = React.useRef()
    
    const [isSmallScreen] = useMediaQuery('(min-width:750px)');

    let round:boolean = true;
    return (
    <>
    <Flex w="100%" p={2} align="center">
        <Heading ml="8" size="md" fontWeight='semibold' color="pink.800"> Song Chanheum </Heading>
        <Flex w="100vw" bgColor={isDark ?"gray.500" : "gray.50"} zIndex={20} h="100vh" pos="fixed" top="0" left="0" overflow="auto" flexDir="column" display={display? 'flex':'none'}>
            <Flex justify="flex-end">
                <IconButton mt={2} mr={2} aria-label="close" size="lg" icon={isDark? <FaRegWindowClose /> : <FaWindowClose />} onClick={() => changeDisplay(false)}></IconButton>
            </Flex>
            <Flex flexDir="column" align="center">
                <SideMenu />
            </Flex>
        </Flex>
        <IconButton ml={5} display={isSmallScreen ? "none" : "flex"} aria-label="menu" size="lg" mr={2} icon={<GiHamburgerMenu />} onClick={() => changeDisplay(true)}></IconButton>
        <Spacer />
        <Flex display={isSmallScreen ? "flex" : "none"}> 
            <SideMenu />
        </Flex>
        <IconButton icon={<FaInstagram />} isRound={round} onClick={toggleColorMode} aria-label="instagram"></IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound={round} onClick={()=> window.open("https://github.com/Songchanheum", "_blank")} aria-label="github"></IconButton>
        <IconButton ml={2} icon={<FaMediumM />} isRound={round} onClick={()=> window.open("https://bsk9212.medium.com/", "_blank")} aria-label="github"></IconButton>
        <IconButton ml={4} icon={ isDark ? <FaSun /> : <FaMoon />} isRound={round} onClick={toggleColorMode} aria-label="dark"></IconButton>
    </Flex>
    
    </>
    ) 
}
export default menu
