import { Box,IconButton,Menu,MenuButton,MenuItem,MenuList,Text } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react'
import {HamburgerIcon,AddIcon,ExternalLinkIcon,RepeatIcon,EditIcon} from "@chakra-ui/icons"

export default function Navbar(){


    return <Box backgroundColor="blue.200" p="4" position={"fixed"} w="100%">
    
       <Flex justifyContent={'space-between'}  >
        <Box w="30%">
            <Text fontSize={{lg:"40",md:"30",sm:"17",base:"15"}}>Vivek Belwal</Text>
        </Box>
        <Flex justifyContent={'space-evenly'} w="60%"
        display={{base:"none", sm:"none", md:"flex", lg:"flex"}}>
            <Text>Home</Text>
          
            <Text>About Me</Text>
           
            <Text>Skills</Text>
            <Text>Project</Text>
            <Text>Contact</Text>
            <Text>Resume</Text>
        </Flex>
        <Menu   >
  <MenuButton
  display={{base:"block", sm:"block", md:"none", lg:"none",xl:"none"}}
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList>
    <MenuItem icon={<AddIcon />} >
    Home
    </MenuItem>
    <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
      About Me
    </MenuItem>
    <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
    Skills
    </MenuItem>
    <MenuItem icon={<EditIcon />} command='⌘O'>
    Project
    </MenuItem>
    <MenuItem icon={<EditIcon />} command='⌘O'>
    Contact
    </MenuItem>
    <MenuItem icon={<EditIcon />} command='⌘O'>
    Resume
    </MenuItem>
  </MenuList>
</Menu>
       </Flex>
    </Box>
        
    
}