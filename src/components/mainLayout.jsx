import {Box} from '@chakra-ui/layout'
import Logo from './logo'

const MainLayout = ({children}) => {
    return (
        <Box width='100vw' height='100vh'>
            <Logo/>
            {children}
        </Box>
    )
}

export default MainLayout