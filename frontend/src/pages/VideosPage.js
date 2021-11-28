import React from 'react';
import '../styles/components/pages/VideosPage.css';

const VideosPage = (props) => {

    return (
        <body>

            <div className="section">
                <h2>Videos</h2>
                <div align="center">
                    <div className="multiple">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/tHDUCfC90fM"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                        <p>"Los Lobos" del disco "Blanco Móvil", año 2005.</p>
                        <br></br>
                        <br></br>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/QMBeSTu87X4"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                        <p>"A Través De Las Nubes" del disco "Luces Y Sombras", año 2017.</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/qjjfj4Yo4fA"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                        <p>"Amanecer" del disco "Mares Lejanos", año 2009.</p>
                        <br></br>
                        <br></br>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/_cDaIwcSLDQ"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                        <p>"Abrigo" del disco "Luces Y Sombras", año 2017.</p>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default VideosPage;