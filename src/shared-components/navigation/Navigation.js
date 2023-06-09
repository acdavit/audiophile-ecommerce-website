import { Link } from "react-router-dom";
import './assets/navigation.css'

export default function Navigation(){
    return (<nav>
        <Link to='/'>HOME</Link>
        <Link to='/headphones'>HEADPHONES</Link>
        <Link to='/speakers'>SPEAKERS</Link>
        <Link to='/earphones'>EARPHONES</Link>
    </nav>)
}