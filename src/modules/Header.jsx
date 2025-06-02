import userProfile from '../assets/user-Profile.svg'
import logo from '../assets/site-logo.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <header>
                <span><Link to='/'><img className='logo' src={logo}></img></Link></span>
                <span><Link to='/login'><button>Профиль</button></Link></span>
            </header>
        </>
    )
}

export default Header