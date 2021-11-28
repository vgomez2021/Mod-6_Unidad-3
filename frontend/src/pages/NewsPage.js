import React, {useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/components/pages/NewsPage.css';
import NovedadItem from '../components/novedades/NovedadItem';

const NewsPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect (() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);

    return (
        <body>

            <div className="section">
                <h2>Novedades</h2>
                               <div className="section container">

                               {loading ? (
                                   <p>Cargando... </p>
                    
    ) : (
        
        novedades.map(item => <NovedadItem key={item.id} title={item.titulo} subtitle={item.subtitulo} imagen={item.imagen} body={item.descripcion} date={item.fecha} location={item.lugar} hour={item.hora}/>)
            )}
     
                </div>
            </div>
        </body>




    );
}

export default NewsPage;