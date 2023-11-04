import './Footer.css'
import {
    RiTwitterXLine, 
    RiInstagramLine, 
    RiFacebookCircleFill, 
    RiTiktokFill
} from 'react-icons/ri';

const Footer = () => {
  return (
    <>
        <footer className='footer'>
            <div className='principal-links'>
                <div className='footer-principal'>
                    <h2>¡Contactanos!</h2>
                    <ul>
                        <li className="footer-principal-links"><a href='#'>Calle Falsa 123, Palermo, CABA</a></li>
                        <li className="footer-principal-links"><a href='#'>Florida 1508, Microcentro</a></li>
                        <li className="footer-principal-links"><a href='#'>WhatsApp: +54 11 1234-5678</a></li>
                        <li className="footer-principal-links"><a href='#'>contacto@gruporeact.com.ar</a></li>
                    </ul>
                </div>
                <div className='footer-principal'>
                    <h2>Nuestros horarios</h2>
                    <ul>
                        <li className="footer-principal-links">Palermo Lun a Vier. 9:00 AM - 18:00 PM Sab 10:00 AM - 14:30 PM.</li>
                        <li className="footer-principal-links">Microcentro Lun a vier. 10:00 AM - 19:00 PM Sab 10:00 AM - 14:30 PM</li>
                    </ul>
                </div>
                <div className='footer-principal'>
                    <h2>Ayuda</h2>
                    <ul>
                        <li className="footer-principal-links">FAQ</li>
                        <li className="footer-principal-links">Trámite garantía</li>
                        <li className="footer-principal-links">Boton de arrepentimiento</li>
                        <li className="footer-principal-links">¡Trabajo con nosotros!</li>
                    </ul>
                </div>
            </div>
            <div className='socials'>
                <h2>Seguinos en nuestras redes:</h2>
                <ul className='socials-container'>
                    <li className="socials-links"><RiInstagramLine /></li>
                    <li className="socials-links"><RiTwitterXLine /></li>
                    <li className="socials-links"><RiFacebookCircleFill /></li>
                    <li className="socials-links"><RiTiktokFill /></li>
                </ul>
            </div>
            <span className='footer-label'>Proyecto React | Academia Numen | 2023</span>
        </footer>
    </>
  )
}

export default Footer