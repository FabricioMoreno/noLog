import '../../styles/log_box/item-noLog.css'

const ItemNoLog = (props) => {
    const {content} = props
    return (
        <div className='itemNoLogs'>
            <p>{content}</p>
        </div>
    )
}

export default ItemNoLog