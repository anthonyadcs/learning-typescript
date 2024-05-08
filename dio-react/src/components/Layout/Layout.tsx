import {Flex, Box} from '@chakra-ui/react'
import {Header} from '../Header/Header'

export const Layout = ({children}:any) => {
  return (
    <Flex minHeight='100vh' backgroundColor='#9413dc' flexDirection="column" alignItems="center" justifyContent='center'>
      <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='50px 50px' maxW="lg" textAlign="center">
        <Header/>
        { children }
      </Box>
    </Flex>
  )
}