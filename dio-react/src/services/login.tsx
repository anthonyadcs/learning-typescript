import {api} from './api'

export const login = async (email:string):Promise<void> => {
  const data:any = await api

  email !== data.email ? alert('Email inválido') : alert(`Bem vindo, ${email}`)
};