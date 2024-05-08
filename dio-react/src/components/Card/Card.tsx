import {Text, Input, FormControl, FormLabel} from '@chakra-ui/react'
import { login } from '../../services/login'
import { ButtonSub } from '../ButtonSub/ButtonSub'
import {useState, } from 'react'

export const Card = () => {
  const [email, setEmail] = useState('')

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

      <ButtonSub event={() => login(email)}/>
  </>
  )
}