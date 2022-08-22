import { useState } from 'react'
import {Box} from '@chakra-ui/layout'
import Logo from './logo'
import MenuToggle from './menuToggle'
import MenuLinks from './menuLinks'

const MainLayout = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <Box width='100vw' height='100vh'>
            <Box backgroundColor={'red'}>
                <Logo/>
                <MenuLinks isOpen={isOpen}/>
                <MenuToggle toggle={toggle} isOpen={isOpen}/>
            </Box>
            
            {children}
        </Box>
    )
}

export default MainLayout