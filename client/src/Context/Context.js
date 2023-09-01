import React from 'react'

const Context = React.createContext()


const ContextState = (props) => {

    const [leadsAvalible, setLeadsAvalible] = React.useState(false)
    const [useAuth,setUseAuth] = React.useState(null)
    const [admin,setAdmin] = React.useState(false)

  return (
    <Context.Provider value={{leadsAvalible,setLeadsAvalible,useAuth,setUseAuth,setAdmin,admin}}>
        {props.children}
    </Context.Provider>
  )
}

export {Context,ContextState}