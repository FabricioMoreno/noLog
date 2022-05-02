import {createContext, useEffect, useState} from 'react'
import Swal from 'sweetalert2'
const LogBarContext = createContext(null)

const LogBarContextProvider = ({children}) => {
    const [nolog, setNolog] = useState('')
    const [nologItems, setNologItems] = useState([])

    useEffect(() => {
        const getAllLogs = async()=>{
            const allLogs = await (await fetch('/api/v1/logs')).json()
            const infoNLogsItems = allLogs.reverse().map(obj => ({id: obj._id, content:obj.content}))
            setNologItems(infoNLogsItems)       
        }

        getAllLogs().catch(err => {
            Swal.fire({
                title: 'Error!',
                text: 'No se pudo cargar el contenido. Recargue la página',
                icon: 'error',
              })
        })
    
    },[])

    const isempty = (str) =>{
        return str === undefined || str === null|| typeof str !== 'string'|| str.match(/^ *$/) !== null
    }
    
    const addNoLog = async() => {

        if (isempty(nolog)){
            Swal.fire({
                title: 'Error!',
                text: 'Ingrese un contenido válido',
                icon: 'error',
              })
        }
        else{
            const response = await fetch('/api/v1/logs',{
                method: 'PATCH',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({content: nolog})
            })
            const {id} = await response.json()

            setNologItems([{id, content:nolog.trim()},...nologItems])
        }
    }
    return (
    <LogBarContext.Provider value={{nolog, setNolog,addNoLog,nologItems,setNologItems}}>
        {children}
    </LogBarContext.Provider>
  )
}

export {LogBarContext, LogBarContextProvider}
