import { createContext, useReducer } from 'react'
import { PymeResponseResponse } from '../interfaces/pymeResponse'
import { pymeReducer, PymeState } from './pymeReducer'

type PymeContextProps = {
  loading: boolean
  allPymes: PymeResponseResponse[]
  onePyme: PymeResponseResponse | null
  notFound: boolean
}

const AuthInitialState: PymeState = {
  allPymes: [],
  onePyme: null,
  loading: true,
  notFound: false,
}

const PymeContext = createContext({} as PymeContextProps)

const PymeProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(pymeReducer, AuthInitialState)

  return (
    <PymeContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </PymeContext.Provider>
  )
}

export { PymeProvider, PymeContext }
