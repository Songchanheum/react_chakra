import React from 'react';
import { Flex, VStack} from '@chakra-ui/layout';

import Menu from '../components/menu';
import Introduce from '../components/introduce';
import SideMenu from '../components/SideMenu';
import { Divider } from '@chakra-ui/react';

function Home() {
  return (
    <VStack>
      <Menu />
      <Introduce></Introduce>
      <Divider w="85%" center/>
    </VStack>
  ) 
}

export default Home; 
