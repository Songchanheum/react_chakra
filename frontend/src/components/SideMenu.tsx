import React from 'react'
import {useColorMode} from "@chakra-ui/color-mode";
import {useMediaQuery} from '@chakra-ui/media-query';
import NextLink from 'next/link';
import { Button } from '@chakra-ui/react';

function SideMenu() {
    
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
        <>
            <NextLink href="/" passHref>
                <Button
                as="a"
                variant="ghost"
                aria-label="About"
                my={5}
                w="100%">
                    소개
                </Button>
            </NextLink>
            <NextLink href="/" passHref>
                <Button
                as="a"
                variant="ghost"
                aria-label="About"
                my={5}
                w="100%">
                    경력
                </Button>
            </NextLink>
            <NextLink href="/" passHref>
                <Button
                as="a"
                variant="ghost"
                aria-label="About"
                my={5}
                w="100%">
                    
                </Button>
            </NextLink>
            <NextLink href="/" passHref>
                <Button
                as="a"
                variant="ghost"
                aria-label="About"
                my={5}
                w="100%">
                    ABOUT
                </Button>
            </NextLink>
        </>
    ) 
}

export default SideMenu
