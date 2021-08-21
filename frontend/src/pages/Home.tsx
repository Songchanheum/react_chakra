import React from 'react';
import { Flex, VStack} from '@chakra-ui/layout';

import Menu from '../components/menu';
import Introduce from '../components/introduce';
import SideMenu from '../components/SideMenu';
import { Divider } from '@chakra-ui/react';
import Profile from '../components/Profile';
import DevTimeline from '../components/DevTimeline';

function Home() {
  return (
    <VStack>
      <Menu />
      <Introduce></Introduce>
      <Divider w="85%" center/>
      <Profile></Profile>
      <Divider w="85%" center/>
      <DevTimeline />
      <Divider w="85%" center/>
    </VStack>
  ) 
}

export default Home; 
