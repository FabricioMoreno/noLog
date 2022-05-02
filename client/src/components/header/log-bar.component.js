import { useState, useEffect, useContext} from "react"
import { LogBarContext } from "../../contexts/log-bar.context"
import { useHotkeys } from 'react-hotkeys-hook';
import '../../styles/header/log-bar.css'

const LogBar =  (props) => {
    const{nolog, setNolog,addNoLog} = useContext(LogBarContext)
    const ref = useHotkeys('enter',()=>addNoLog(),{enableOnTags:['INPUT']})
    return(
        <div className="logBar">
            <textarea type="text" ref={ref} placeholder="Add your nolog here" value={nolog} onChange= {e => setNolog(e.target.value)}/>
            
            <button onClick={async () => await addNoLog()}>
                Add
            </button>
        </div>
    )
}

export default LogBar