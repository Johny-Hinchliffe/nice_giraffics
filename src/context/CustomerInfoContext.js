import React, {createContext, useContext, useState} from 'react'

const Context = createContext([])

export const CustomerInfoStore = ({children}) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
  
  return (
    <Context.Provider value={{email, setEmail, name, setName}}>
        {children}
    </Context.Provider>
  )
}

export default Context