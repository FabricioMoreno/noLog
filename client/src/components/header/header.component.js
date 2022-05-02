import LogBar from "./log-bar.component"
import '../../styles/header/header.css'

const Header = (props) => {
    return (
        <header className="header">
            <h1>NoLog</h1>
            <LogBar/>
        </header>
    )
}

export default Header