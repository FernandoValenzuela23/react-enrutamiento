import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const PersonaComponent = () => {
    const params = useParams();
    const navegar = useNavigate();
    console.log(params)

    const navegarHandler = e => {
        e.preventDefault();

        const form = e.target;     
        
           
        navegar(`/persona/${form.nombre.value}/${form.apellido.value}`);
    }

    return (
        <>
            <h1> Persona </h1>
            <strong>La persona enviada es: {params.nombre ? params.nombre : ''} {params.apellido ? params.apellido : ''}</strong>
        
            <br/>
            <form onSubmit={navegarHandler}>
                <input type='text' name='nombre' placeholder='Nombre' />
                <input type='text' name='apellido' placeholder='Apellido' />
                <button type='submit'>Enviar</button>
            </form>

        </>
    )
}
