import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from "react-router-dom";
import { InicioComponent } from '../components/InicioComponent';
import { ArticuloComponent } from '../components/ArticuloComponent';
import { ContactoComponent } from '../components/ContactoComponent';
import { ErrorComponent } from '../components/ErrorComponent';
import { PersonaComponent } from '../components/PersonaComponent';
import { GestionComponent } from '../components/GestionComponent';
import { GestionExternaComponent } from '../components/gestion/GestionExternaComponent';
import { GestionInternaComponent } from '../components/gestion/GestionInternaComponent';

export const RouterPrincipal = () => {
  return (    
    <BrowserRouter>
        <h1>Cabecera</h1>
        <nav>
            <ul className='menu'>
                <li>
                    <NavLink to="/inicio" className={({isActive}) => isActive ? 'activo' : ''} >
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/articulo" className={({isActive}) => isActive ? 'activo' : ''} >
                        Articulo
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contacto" className={({isActive}) => isActive ? 'activo' : ''} >
                        Contacto
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/redirigir" className={({isActive}) => isActive ? 'activo' : ''} >
                        Redirigir a Persona
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/gestion" className={({isActive}) => isActive ? 'activo' : ''} >
                        Gestion
                    </NavLink>
                </li>
            </ul>

        </nav>
        <hr />

        <section className='contenido-principal'>
            {/* Si se combina el componente de rutas con HTML la seccion en la que se define 
            las rutas es la que renderizara los componentes ligados a los paths,
            si se usa unicamente el BroowserRouter, los componentes se renderizaran en pagina completa */}
            <Routes>
                {/* Rutas */}
                <Route path="/" element={<InicioComponent />} />
                <Route path="/inicio" element={<InicioComponent />} />
                <Route path="/articulo" element={<ArticuloComponent />} />
                <Route path="/contacto" element={<ContactoComponent />} />
                <Route path="/persona/:nombre" element={<PersonaComponent />} />
                <Route path="/persona/:nombre/:apellido" element={<PersonaComponent />} />
                <Route path="/redirigir" element={<Navigate to="/persona/Lucas/Tadeo" />} />
                <Route path="/gestion/*" element={<GestionComponent />} >
                    {/* Ruta /* con Subrutas sin barra inicial */}
                    <Route path="interna" element={<GestionInternaComponent />} />
                    <Route path="externa" element={<GestionExternaComponent />} />
                </Route>

                {/* 
                    Asi:
                            <Route path="*" element={
                                <div>
                                    <h1> Error 404 </h1>
                                    <strong>Pagina no existe</strong>
                                </div>
                            />} />
                    o como se puede ver a continuacion
                 */}
                <Route path="*" element={<ErrorComponent />} />
                 
            </Routes>
        </section>
        <hr/>
        <footer>
            <h5>@2023 Fernando Valenzuela</h5>
        </footer>
    </BrowserRouter>


  )
}
