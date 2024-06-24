import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Theme } from './Theme'


function Navbar() {

    const { theme, toggleTheme } = useContext(Theme)


    return (
        <div style={{
            display: "flex",
            justifyContent: 'space-between'

        }}>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>about</Link>
            <Link to={"/setting"}>setting</Link>
            <button onClick={toggleTheme}>{theme}</button>



        </div>
    )
}

export default Navbar