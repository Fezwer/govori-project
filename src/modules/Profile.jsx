import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/site-logo.png';
import Footer from './Footer.jsx';

export default function Profile() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Проверка входа: если нет — редирект
        const saved = localStorage.getItem('user');
        if (saved) setUser(JSON.parse(saved));
        else navigate('/login');
    }, [navigate]);

    // UI функции для меню (оставлены без изменений)
    const openSideMenu = () => {
        const aside = document.querySelector('aside');
        if (aside) {
            aside.classList.add('open-aside');
            aside.classList.remove('close-aside');
        }
    };
    const closeSideMenu = () => {
        const aside = document.querySelector('aside');
        if (aside) {
            aside.classList.add('close-aside');
            aside.classList.remove('open-aside');
        }
    };

    function formateDate(arrayDate) {
        const addLeadingZero = (num) => (num < 10 ? '0' + num : num.toString());
        const year = arrayDate[0];
        const month = addLeadingZero(arrayDate[1]);
        const day = addLeadingZero(arrayDate[2]);
        const hours = addLeadingZero(arrayDate[3]);
        const minutes = addLeadingZero(arrayDate[4]);
        return `${year}-${month}-${day} ${hours}:${minutes}`;
    }

    // Заглушка: показываем "Загрузка" пока профиль не подгружен
    if (!user) return <div>Загрузка...</div>;

    // Пример: user[0] — если backend возвращает массив данных расписания
    const schedule = Array.isArray(user) ? user : [];
    console.log(schedule[0].LessonDate);

    return (
        <>
            <header className='header-profile'>
                <span><Link to='/'><img className='logo' src={logo} alt='Logo' /></Link></span>
                <button onClick={openSideMenu}>Изменить данные</button>
                <button onClick={() => {
                    localStorage.removeItem('user');
                    navigate('/login');
                }}>Выйти</button>
            </header>
            <aside className='close-aside'>
                <div>
                    <i onClick={closeSideMenu} className='bx  bx-arrow-to-left-stroke'></i>
                    <Link to='/'><img className='logo' src={logo} alt='Logo' /></Link>
                    <span>Центр  <br />"Говори"</span>
                </div>
                {/* Форма изменения данных профиля, можно доработать при появлении ручек */}
                <form>
                    <label>ФИО<span>*</span></label>
                    <input type='text' placeholder='ФИО*' defaultValue={user[0]?.ParentName || ''} />
                    <label>Телефон</label>
                    <input type='tel' placeholder='Ваш телефон' />
                    <label>Новый пароль</label>
                    <input type='password' placeholder='Новый пароль' />
                    <label>Подтвердите пароль<span>*</span></label>
                    <input type='password' placeholder='Подтвердите пароль*' />
                    <div className='button-container'><button type='submit'>Подвердить изменения</button></div>
                </form>
            </aside>
            <main className='main-profile'>
                <h1>Ваше расписание</h1>
                <table className="no-border-table">
                    <thead>
                        <tr>
                            <th id='first-th'>Ребенок</th>
                            <th id='second-th'>Дата и время</th>
                            <th id='third-th'>Тип занятия</th>
                            <th id='fourth-th'>Логопед</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedule.map((lesson, i) => (
                            <tr key={i}>
                                <td>{lesson.StudentName}</td>
                                <td>{formateDate(lesson.LessonDate)}</td>
                                <td>{lesson.LessonType}</td>
                                <td>{lesson.TeacherName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
            <Footer />
        </>
    );
}