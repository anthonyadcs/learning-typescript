import {Header} from './components/Header'
import { 
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Box,
  Flex,
  Button
} from '@chakra-ui/react'
import {login} from './services/login'

function App() {
  return (
    <ChakraProvider>
      <Box bgColor="#1E192C" minH="100vh" padding="35px" color="#fff">
        <Flex minW="max-content" alignItems="center" flexDirection="column" bgColor="#d868a0" padding="25px 50px" borderRadius="10px">
          <Header/>
          <h1>Faça login</h1>

          <FormControl>
            <FormLabel fontWeight="bold">Email</FormLabel>
            <Input 
            size="md" 
            placeholder="Digite seu email"
            _placeholder={{color: '#fff'}}
            type="email" 
            isRequired/>
          </FormControl>

          <FormControl>
            <FormLabel fontWeight="bold">Senha</FormLabel>
            <Input 
            size="md" 
            placeholder="Digite sua senha"
            _placeholder={{color: '#fff'}}
            type="password"
            isRequired/>
          </FormControl>

          <Button 
          mt="25px" 
          w="100%" 
          onClick={login}>
            Entrar
          </Button>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
