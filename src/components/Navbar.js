import { useState, useEffect } from "react"
import "./navbar.css"

export function Navbar() {
    return <nav className="nav">
        <a href="/" className="log-out">Log Out</a>
        <a className="page-title">CreateOrder</a>
        <ul>
        <p>user email</p>
            <li>
                <a href="/orders">New Order</a>
            </li>
            <li>
            <a href="/completed-orders">Completed Orders</a>
            </li>
        </ul>
    </nav>
}