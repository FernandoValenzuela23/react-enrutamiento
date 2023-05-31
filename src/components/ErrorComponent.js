import React from 'react'
import { NavLink } from 'react-router-dom'

export const ErrorComponent = () => {
    return (
        <>
            <h1> Error 404 </h1>
            <strong>Pagina no existe</strong>
            <br/>
            <NavLink to="/">Ir al inicio</NavLink>
        </>
    )
}
