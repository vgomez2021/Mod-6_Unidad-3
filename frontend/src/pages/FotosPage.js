import React from 'react';
import '../styles/components/pages/FotosPage.css';

const FotosPage = (props) => {

    return (

        <body>
            <div className="section">
                <h2>Fotos</h2>
                <table cellspacing="auto" cellpadding="0">
                    <tr>
                        <td></td>
                        <div className="img"><img src="/images/fer01.jpg" alt="fer01" width="400" /></div>
                        <td></td>
                        <div className="img"> <img src="/images/fer03.jpg" alt="fer03" width="400" /></div>
                        <td></td>
                        <div className="img"> <img src="/images/fer05.jpg" alt="fer05" width="400" /></div>
                    </tr>
                </table>
                <table cellspacing="auto" cellpadding="0">
                    <tr>
                        <td></td>
                        <div className="img"> <img src="/images/fer04.jpg" alt="fer04" width="400" /></div>
                        <td></td>
                        <div className="img"> <img src="/images/fer02.jpg" alt="fer02" width="400" /></div>
                        <td></td>
                        <div className="img"> <img src="/images/fer07.jpg" alt="fer07" width="400" /></div>
                    </tr>
                </table>
            </div>
        </body >
    );
}

export default FotosPage;