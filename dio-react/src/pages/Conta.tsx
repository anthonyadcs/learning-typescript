import {Center, SimpleGrid, Spinner} from '@chakra-ui/react'
import {useState, useEffect, useContext} from 'react'
import {api} from '../services/api'
import {CardInfo} from '../components/CardInfo/CardInfo'
import {useParams, useNavigate} from 'react-router-dom'
import {AppContext} from '../components/AppContext/AppContext'
import {ButtonSub} from '../components/ButtonSub/ButtonSub'


interface UserData {
  email: string,
  password: string,
  name: string,
  balance: number,
  ID:string
}


export const Conta = () => {
  const [userData, setUserData] = useState<null | UserData>()
  const { id } = useParams()
  const {isLoggedIn, setIsLoggedIn} = useContext(AppContext)
  const navigate = useNavigate()
  const actualData = new Date()
  const formattedDate = actualData.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '/')
  const formattedTime = actualData.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
  const formattedDateTime = `${formattedDate}\n${formattedTime}`

  const logout = () => {
    setIsLoggedIn(false)
    navigate('/')
  }

  
  useEffect(() => {
    const getData = async () =>{
      const data: any | UserData = await api
      setUserData(data)
    }

    getData()
  }, [])


  console.log(userData)
  if((userData && id !== userData.ID) || (!isLoggedIn)){
    navigate('/')
  }
  return(
    <>
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
                <CardInfo mainContent={`Bem vindo, ${userData?.name}`} content={formattedDateTime}/>

                <CardInfo mainContent='Saldo:' content={`R$ ${userData.balance}`}/>              
              </>
            )
          }
        </SimpleGrid>
      </Center>
      <ButtonSub event={() => logout()} text="Sair"/>
    </>
  )
}