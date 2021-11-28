import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/components/layout/Nav.css';

const Nav = (props) => {
    return (
        <nav>
           
            <div className="nav" aling="center">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/BioPage">Bio</NavLink></li>
                <li><NavLink to="/DiscoPage">Discografía</NavLink></li>
                <li><NavLink to="/LibrosPage">Libros</NavLink></li>
                <li><NavLink to="/VideosPage">Videos</NavLink></li>
                <li><NavLink to="/FotosPage">Fotos</NavLink></li>
                <li><NavLink to="/NewsPage">Novedades</NavLink></li>
                <li><NavLink to="/ContactPage">Contacto</NavLink></li>
            </ul>
        
            </div>
        </nav>
    );
}

export default Nav;