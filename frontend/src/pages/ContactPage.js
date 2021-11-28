import React from 'react';
import '../styles/components/pages/ContactPage.css';

const ContactPage = (props) => {

    return (
        <body>
            <div className="section">
                <h2>Contacto</h2>
                <div className="contact">

                    <div className="info-box">
                        <div align="center">
                            <h3>Correo Electrónico</h3>
                            <p>info@fernandoblanco.com.ar</p>
                        </div>
                    </div>

                </div>
                <div className="contact">
                    <form action="" method="" className="email-form mt-4" ><div align="center">
                        <input id="fname" name="name" type="text" placeholder="Nombre" className="form-control" />
                        <br></br>
                        <br></br>
                        <input id="email" name="email" type="text" placeholder="Correo Electrónico"
                            className="form-control" />
                        <br></br>
                        <br></br>
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto" />
                        <br></br>
                        <br></br>
                        <textarea className="form-control" id="message" name="message" rows="5" placeholder="Mensaje" ></textarea>
                        <br></br>
                        <br></br>
                        <button type="submit" class="btn btn-secondary">Enviar Mensaje</button>
                    </div>
                    </form>
                </div>
            </div>
        </body >

    );
}

export default ContactPage;