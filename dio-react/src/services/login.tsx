import {api} from './api'

// Função assíncrona que simula o processo de login
export const login = async (email:string):Promise<boolean> => {
  // Aguarda a resposta da chamada à API para obter os dados da conta
  const data:any = await api

  // Verifica se o email fornecido é diferente do email retornado pela API
  if(email !== data.email) {
    return false
  }

  return true
};