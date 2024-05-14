interface IDioBank {
  login: boolean;
}

export const getAllLocalStorage = (): string | null => {
  return localStorage.getItem('DIOBank')
}

export const createLocalStorage = (objName: string, objValue: any) :void => {
  return localStorage.setItem(objName, JSON.stringify(objValue))
}

export const changeLocalStorage = (objName: string, newObjValue: IDioBank) => {
  return localStorage.setItem(objName, JSON.stringify(newObjValue))
}