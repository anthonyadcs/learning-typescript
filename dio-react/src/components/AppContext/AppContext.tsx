import {createContext, useState} from 'react'

// Define a tipagem do contexto da aplicação
interface IAppContext {
  user: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => any;
}

// Cria o contexto da aplicação com sua tipagem definida
export const AppContext = createContext({} as IAppContext)

// Componente que fornece o contexto para a aplicação
export const AppContextProvider = ({children}: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const user = 'anthony';

// Retorna o provedor de contexto com os valores necessários
  return (
    <AppContext.Provider value={{user, isLoggedIn, setIsLoggedIn}}>
      {children}
    </AppContext.Provider>
  )
}