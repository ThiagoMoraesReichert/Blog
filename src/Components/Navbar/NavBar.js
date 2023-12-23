import { Link } from "react-router-dom"
import { NavbarDiv } from "./Style"


function NavBar(){
    return(
        <NavbarDiv>
            <h2>
                Blog
            </h2>

            <ul>
                <li>
                    <Link to={`/`}>Home</Link>
                </li>
                <li>
                    <Link to={`/new`} className="new-btn">Create Post</Link>
                </li>
            </ul>
        </NavbarDiv>
        
    )
}

export default NavBar