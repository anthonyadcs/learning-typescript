import {ChakraProvider, Text} from '@chakra-ui/react'

export const Header = () => {
  return (
    <ChakraProvider>
      <Text
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
      fontSize="4xl"
      fontWeight="extrabold"
      >DIO.bank</Text>
    </ChakraProvider>
  )
}