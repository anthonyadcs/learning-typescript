import {AppContextProvider} from './components/AppContext/AppContext'
import { Home } from './pages/Home';
import { Conta } from './pages/Conta';
import { Layout } from './components/Layout/Layout';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ChakraProvider} from '@chakra-ui/react'

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <Routes>
              <Route path='/' element={
                <Home/>
              }/>
              <Route path='/conta/:id' element={
                <Conta/>
              }/>
            </Routes>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;