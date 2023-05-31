import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const GestionComponent = () => {
    
    return (
        <>
            <h1> panel de Gestion </h1>

            <nav>
                <ul className='menu'>
                    <li>
                        <NavLink to="/gestion/interna" className={({isActive}) => isActive ? 'activo' : ''} >
                            Gestion Interna
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gestion/externa" className={({isActive}) => isActive ? 'activo' : ''} >
                            Gestion Externa
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gestion" className={({isActive}) => isActive ? 'activo' : ''} >
                            Volver
                        </NavLink>
                    </li>
                </ul>

            </nav>

            <div>
                {/* Aqui cargan los componentes de las subrutas */}
                <Outlet />
            </div>
        
        </>
    )
}
