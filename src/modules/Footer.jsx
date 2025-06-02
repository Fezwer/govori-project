import logo from '../assets/site-logo.png'
import { Link } from 'react-router-dom'


function Footer() {
    const date = new Date();
    return (
        <div className='footer-container'>
            <footer>
                <div className='main-footer'>
                    <Link to='/'><img className='logo' src={logo}></img></Link>
                    <span>
                        <h3>Контакты</h3>
                        <ul> 
                            <li>< i className='bx  bx-location'></i> Санкт-Петербург, Садовая ул., 26Б</li>
                            <li>< i className='bx  bx-phone'></i> +7(981)234-56-78</li>
                            <li>< i className='bx  bx-envelope-alt'></i> govori@yandex.ru</li>
                        </ul>
                    </span>
                </div>
                <div className='rights'>&copy; {`${date.getFullYear()}`} Все права защищены</div>
            </footer>
        </div>
    )
}

export default Footer