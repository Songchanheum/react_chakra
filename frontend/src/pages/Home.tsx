import React from 'react';
import { Flex, VStack} from '@chakra-ui/layout';

import Menu from '../components/menu';

function Home() {
  return (
    <VStack>
      <Flex w="100%" p={2}>
        <Menu />
      </Flex>
    </VStack>
  ) 
}

export default Home; 
