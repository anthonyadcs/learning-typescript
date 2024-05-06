import {Button} from '@chakra-ui/react'

interface ButtonSubmit {
  event: () => {}
}

export const ButtonSub = ({event} :ButtonSubmit) => {
  return (
    <Button 
    onClick={event}
    w='100%'
    fontWeight="bold"
    m="25px 0"
    bgGradient='linear(to-r, #31A2DB, #54539C, #E94D5F)'
    color='#fff'
    _hover={{
      background: "fff",
      transform: "scale(1.05)",
    }}
    >Entrar</Button>
  )
}