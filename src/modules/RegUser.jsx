import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Footer from './Footer.jsx';

export default function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');
        if (password !== password2) {
            setError('Пароли не совпадают');
            return;
        }
        try {
            const response = await fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Name: name, Login: email, PasswordHash: password })
            });
            if (response.ok) {
                navigate('/login');
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
                    <h1>Регистрация</h1>
                    <input
                        type='text'
                        placeholder='ФИО'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    <input
                        type='email'
                        placeholder='Почта'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type='password'
                        placeholder='Пароль'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type='password'
                        placeholder='Подтвердите пароль'
                        value={password2}
                        onChange={e => setPassword2(e.target.value)}
                        required
                    />
                    <button type='submit'>Зарегистрироваться</button>
                    <Link to='/login'>Уже есть аккаунт?</Link>
                    {error && <div className="error-message">{error}</div>}
                </form>
            </main>
            <Footer />
        </>
    );
}
