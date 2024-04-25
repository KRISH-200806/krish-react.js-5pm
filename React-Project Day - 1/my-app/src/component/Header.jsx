import { SiFacebook } from "react-icons/si";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Header()
{
    return(
        <div className="header" >
            <a href="/" style={{paddingTop:"0px"}}>logo</a>
            <ul className="header">
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <ul className="icon">
                <li><SiFacebook /></li>
                <li><FaTwitterSquare /></li>
                <li><FaInstagram /></li>
            </ul>
        </div>
    )
}
export default Header;