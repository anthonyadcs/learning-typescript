import {Box, Text} from '@chakra-ui/react'
import {DIO} from './img/DIO'
export const Header  = () => {
  return(
    <Box display="flex" alignItems="flex-end" gap="10px" paddingLeft="20px" padding="20px">
      <DIO/>
      <Text fontWeight="extrabold" fontSize="2xl"alignSelf="end" bgGradient='linear(to-r, #E94D5F, #54539C, #31A2DB)' bgClip='text'>BANK</Text>
    </Box>
  )
}