import {Routes, Route, Link} from "react-router-dom"

const Links = () =>{
    return(
        <div id="navbar">
            <Link id="homeLink" to="/">Home</Link>
            <Link id="blueLink" to="/blue">Daily Life</Link>
            <Link id="redLink" to="/red">Not Done YET!!!!!</Link>
            <Link id="greenLink" to ="/green">Not Dont YET!!!</Link>
        </div>

    )
}

export default Links