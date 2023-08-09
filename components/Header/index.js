import {Link} from "react-router-dom"
import "./index.css"
const Header=()=>(
    <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/login"><li>Login</li></Link> 
    </ul>
)
export default Header