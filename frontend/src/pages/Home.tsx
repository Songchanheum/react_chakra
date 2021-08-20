import React from 'react';
import styled from 'styled-components';
import { Box, SimpleGrid } from "@chakra-ui/react"

const Container = styled.div`
  background-color: pink;
  width: 100%;
  height: 100vh;
`;

function Home() {
  return <Container>
    <SimpleGrid minChildWidth="250px" spacing="40px">
      <Box bg="tomato" height="220px"></Box>
      <Box bg="tomato" height="100px"></Box>
      <Box bg="tomato" height="100px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
    </SimpleGrid>
  </Container>; 
}

export default Home; 
