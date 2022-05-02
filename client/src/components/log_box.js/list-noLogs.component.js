import { useContext } from "react";
import { LogBarContext } from "../../contexts/log-bar.context";
import ItemNoLog from "./item-nolog.component";
import '../../styles/log_box/main.css'

const ListNoLogs = () =>{
    const {nologItems} = useContext(LogBarContext)
    return(
        <div className="listNoLogs">  
            {
                nologItems.map(obj => 
                    <ItemNoLog content = {obj.content} key= {obj.id.toString()}/>
                )
            }
        </div>
       
    )
}

export default ListNoLogs