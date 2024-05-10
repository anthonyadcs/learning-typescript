import {createContext, useState} from 'react'

interface IAppContext {
  user: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => any;
}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({children}: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const user = 'anthony';

  
  return (
    <AppContext.Provider value={{user, isLoggedIn, setIsLoggedIn}}>
      {children}
    </AppContext.Provider>
  )
}