// import React from 'react'
import { useState } from "react"
import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {

    const [activeTab, setAcriveTAb] = useState("Home")

    return (
        <>
            <div className="header">
                <p className="logo">
                    React Redux
                </p>
                <div className="header-right">
                    <Link to="/">
                        <p className={`${activeTab === "Home" ? "active" : ""}`}
                            onClick={() => setAcriveTAb("Home")}>Home</p>
                    </Link>
                    <Link to="/add">
                        <p className={`${activeTab === "AddUser" ? "active" : ""}`}
                            onClick={() => setAcriveTAb("AddUser")}>Add User</p>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default Header
