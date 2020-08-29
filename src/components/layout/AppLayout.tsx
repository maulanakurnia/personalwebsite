import { ChakraProvider, CSSReset, Box } from '@chakra-ui/core'
import customeTheme from '../../../lib/theme'
import Header from './Header'
import GlobalStyle from 'lib/GlobalStyle'
import Helmet from 'react-helmet'

function AppLayout({ children }:any) {
    return (
        <ChakraProvider theme={customeTheme}>
            <CSSReset />
            <Helmet>
            <link href="http://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" type="text/css"/> 
            </Helmet>
            <GlobalStyle/>
            <Header/>
            <Box as='main' className='main'>
            {children}
            </Box>
        </ChakraProvider>
    )
}

export default AppLayout
