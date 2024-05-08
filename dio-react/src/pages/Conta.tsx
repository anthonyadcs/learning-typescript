import {Center, SimpleGrid, Spinner} from '@chakra-ui/react'
import {useState, useEffect} from 'react'
import {api} from '../services/api'
import {CardInfo} from '../components/CardInfo/CardInfo'
import {useParams, useNavigate} from 'react-router-dom'

interface UserData {
  email: string,
  password: string,
  name: string,
  balance: number,
  id:string
}

export const Conta = () => {
  const [userData, setUserData] = useState<null | UserData>()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () =>{
      const data: any | UserData = await api
      setUserData(data)
    }

    getData()
  }, [])

  const actualData = new Date()

  console.log(userData)
  if(userData && id !== userData.id){
    navigate('/')
  }
  return(
    <Center>
      <SimpleGrid columns={2} spacing={10}>
        {
          userData === undefined || userData === null ? (
            <Center>
              <Spinner thickness="2px" speed="0.5s" emptyColor="#3794D0" color="#E94D5F"/>
            </Center>
          ) :
          (
            <>
              <CardInfo mainContent={`Bem vindo, ${userData?.name}`} content={`
            ${actualData.getDay() < 10 ? `0${actualData.getDay()}/` : `${actualData.getDay()}/`}${actualData.getMonth() < 10 ? `0${actualData.getMonth()}/` : `${actualData.getMonth()}/`}${actualData.getFullYear()}
            ${actualData.getHours()}:${actualData.getMinutes()}
                `
              }/>

              <CardInfo mainContent='Saldo:' content={`R$ ${userData.balance}`}/>              
            </>
          )
        }
        
      </SimpleGrid>
    </Center>
  )
}