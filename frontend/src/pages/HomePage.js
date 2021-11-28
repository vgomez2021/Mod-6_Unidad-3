import React from 'react';
import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {

    return (
        <body>

            <div className="section">
                <h2>Links</h2>
                <div align="left">< a href="https://open.spotify.com/artist/5BXAzBnBIa66n1Nz3NoWaK?si=wLz-_U_zQH-SvjCVLd4-oQ&nd=1" target="_blank"><img src="/images/spotify.png" alt="spotify" width="50" /></a> &nbsp;
                    &nbsp;<a href="https://www.youtube.com/fernandoblanco" target="_blank"><img src="images/youtube.png" alt="youtube" width="50" /></a> &nbsp;
                    &nbsp;<a href="http://www.facebook.com/ferjblanco" target="_blank"><img src="images/facebook.png" alt="facebook" width="50" /></a> &nbsp;
                    &nbsp; <a href="https://www.instagram.com/fernandojblanco/" target="_blank"><img src="images/instagram.png" alt="instagram" width="50" /></a>
                </div>
            </div>
        </body>




    );
}

export default HomePage;