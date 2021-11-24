import React from 'react'
import { Link } from 'react-router-dom'

function HeaderComponent() {
    return (
        <div>
            <header className="navbar navbar-expand-md navbar-dark bg-dark">
                <div>
                    <Link to="/" className="navbar-brand">DBS Employees</Link>
                </div>
            </header>
        </div>
    )
}

export default HeaderComponent
