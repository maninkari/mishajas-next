import { useState } from 'react'
import { Box } from '@chakra-ui/layout'
import Logo from './logo'
import MenuToggle from './menuToggle'
import MenuLinks from './menuLinks'

const MainLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Box width="100vw" height="100vh">
      <Box
        backgroundColor={'#1470a6'}
        p="1em"
        backgroundImage="url('http://www.mishaja.org/imgs/plumas2.png')"
        backgroundRepeat="no-repeat"
        backgroundPosition="right"
      >
        {/* <Logo/> */}
        <MenuLinks isOpen={isOpen} />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
      </Box>
      <Box p="1em">{children}</Box>
    </Box>
  )
}

export default MainLayout
