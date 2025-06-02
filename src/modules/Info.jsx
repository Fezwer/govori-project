import { BrowserRouter} from 'react-router-dom';
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function Info() {
    return (
        <>
            <Header />
            <main className='main-info'>
                <span>
                    <h2>ООО "ЛОГ ЦЕНТР ГОВОРИ"</h2>
                    <p>10-я линия Васильевского острова, 49, Санкт-Петербург, 199178</p>
                    <p>< i className='bx  bx-envelope-alt'></i>govori@yandex.ru</p>
                    <p>< i className='bx  bx-phone'></i>+7(981)234-56-78</p>
                </span>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af1c42ea58fe5449721590f88e75826deb491573430d07b9d03db6cc9234a0310&amp;source=constructor" frameborder="0"></iframe>
            </main>
            <Footer />
        </>
    )
}

export default Info
