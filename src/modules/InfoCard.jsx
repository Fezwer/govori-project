import { Link } from 'react-router-dom'

export default function InfoCard({ position, img, text, buttonName, linkTo }) {
    return (
        <div className='info-card'>
            {position === 'left' && <img src={img} alt='Изображение карточки' />}
            <span>{text}
                <div><Link to={linkTo}><button>{buttonName}</button></Link></div>
            </span>
            {position === 'right' && <img src={img} alt='Изображение карточки' />}
        </div>
    )
}