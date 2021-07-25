import { useReducer } from 'react'

export const useToggle = (initialState: boolean) =>
  useReducer((prevState: boolean) => !prevState, initialState)
