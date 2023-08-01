import {Routes, Route, Link} from "react-router-dom"

const Links = () =>{
    return(
        <div id="navbar">
            <Link to ="/">home</Link>
            <Link to="/blue">blue</Link>
            <Link to="/red">red</Link>
            
        </div>

    )
}

export default Links