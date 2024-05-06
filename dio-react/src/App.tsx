import { 
  ChakraProvider,
  Flex,
  Box,
} from '@chakra-ui/react'
import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';
;

function App() {
  return (
    <ChakraProvider>
      <Flex minHeight='100vh' backgroundColor='#9413dc' flexDirection="column" alignItems="center" justifyContent='center'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px 50px' maxW="lg">
          <Header/>
          <Card/>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;