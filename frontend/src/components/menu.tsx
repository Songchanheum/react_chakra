import React from 'react'
import { Heading, Spacer } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/react';
import {useColorMode} from "@chakra-ui/color-mode";
import { FaSun, FaMoon, FaInstagram, FaGithub } from 'react-icons/fa';

function menu() {
    const { colorMode, toggleColorMode} = useColorMode();
    const isDark = colorMode === "dark";

    let round:boolean = true;
    return (
        <>
        <Heading ml="8" size="md" fontWeight='semibold' color="pink.800"> Song Chanheum</Heading>
        <Spacer />
        <IconButton icon={<FaInstagram />} isRound={round} onClick={toggleColorMode} aria-label="instagram"></IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound={round} onClick={toggleColorMode} aria-label="github"></IconButton>
        <IconButton ml={8} icon={ isDark ? <FaSun /> : <FaMoon />} isRound={round} onClick={toggleColorMode} aria-label="dark"></IconButton>
        </>
    )
}

export default menu
