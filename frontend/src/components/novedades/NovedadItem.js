import React from 'react';

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body, date, location, hour } = props;

    return (
        <div align="center">
            <div className="section">
                <div align="left"> <h1>{title} - {subtitle}</h1></div>
                <img src={imagen} />
                <p> <div dangerouslySetInnerHTML={{ __html: body }} /></p>
                <p>Fecha: {date}</p>
                <p>Horario: {hour} hs.</p>
                <p>Ubicación: {location}</p>
                <hr /></div>
        </div>
    );
}

export default NovedadItem;