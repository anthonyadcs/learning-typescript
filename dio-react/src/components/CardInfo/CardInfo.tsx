import {Box, Text} from '@chakra-ui/react'

interface ICardInfo {
  mainContent: string;
  content: string;
}

export const CardInfo = ({mainContent, content}: ICardInfo) => {
  return (
    <Box bgColor="#e9e9e9" minW="120px" padding={8} borderRadius='10px' display="flex" justifyContent="center" flexDirection="column" textAlign="center" alignItems="center">
      <Text fontWeight="bold" mb = "15px">
        {mainContent}
      </Text>
      <Text>
        {content}
      </Text>
    </Box>
  )
}