import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Footer from './Footer.jsx';

export default function Login() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');
        try {
            const response = await fetch('http://localhost:8080/processData', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Login: login, PasswordHash: password })
            });

            if (response.ok) {
                const userData = await response.json();
                localStorage.setItem('user', JSON.stringify(userData));
                localStorage.setItem('login', login); // если нужно сохранить отдельно логин
                navigate('/profile');
            } else {
                const errText = await response.text();
                setError(errText);
            }
        } catch (err) {
            setError('Ошибка сети');
        }
    }

    return (
        <>
            <main className='main-log-reg'>
                <div className="black-overlay"></div>
                <form onSubmit={handleSubmit}>
                    <h1>Вход</h1>
                    <div>
                        <input
                            type='text'
                            placeholder='Логин'
                            value={login}
                            onChange={e => setLogin(e.target.value)}
                            required
                        />
                        <input
                            type='password'
                            placeholder='Пароль'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                        <button type='submit'>Войти</button>
                        <Link to='/registration'>Создать аккаунт?</Link>
                        {error && <div className="error-message">{error}</div>}
                    </div>
                </form>
            </main>
            <Footer />
        </>
    );
}