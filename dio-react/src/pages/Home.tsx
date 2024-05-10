import {Text, FormControl, FormLabel, Input} from '@chakra-ui/react'
import {ButtonSub} from '../components/ButtonSub/ButtonSub'
import {useState, useContext } from 'react'
import { login } from '../services/login'
import {useNavigate} from 'react-router-dom'
import {AppContext} from '../components/AppContext/AppContext'

export const Home = () => {
  const [email, setEmail] = useState('')
  const {setIsLoggedIn} = useContext(AppContext)
  const navigate = useNavigate()

  const validadeUser = async (email:string) => {
    const loggedIn= await login(email)

    if(!loggedIn){
      navigate('/')
    } else {
      setIsLoggedIn(true)
      navigate('/conta/1')
    }
  }

  return (
    <>
      <Text 
        fontSize="2xl" 
        textAlign="center"
        bgGradient='linear(to-r, #E94D5F, #3893CF)' 
        bgClip='text'
        fontWeight="semibold"
        textTransform = 'uppercase'
        >
          Faça login
      </Text>
      <FormControl>
      <FormLabel 
          fontWeight="bold">
            <Text 
            bgGradient='linear(to-r, #E94D5F, #3893CF)' 
            bgClip='text'
            textTransform = 'uppercase'
            marginTop='10px'
            >
              Email
            </Text>
        </FormLabel>
        <Input 
        placeholder="EMAIL" 
        type="email"
        onChange = {(e) => {setEmail(e.target.value)}}
        />
      </FormControl>

      <FormControl>
        <FormLabel 
          fontWeight="bold">
            <Text 
            bgGradient='linear(to-r, #E94D5F, #3893CF)' 
            bgClip='text'
            textTransform = 'uppercase'
            fontSize="sm"
            marginTop='10px'
            >
              Senha
            </Text>
        </FormLabel>
        <Input placeholder="SENHA" type="password"/>
      </FormControl>

      <ButtonSub event={() => validadeUser(email)} text="Entrar"/>
  </>
  )
}