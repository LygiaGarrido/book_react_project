import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { UserContext } from '../../contexts/UserContext';

function LoginPage() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await fetch(
            'https://ancient-temple-61124.herokuapp.com/api/auth/login',
            {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: e.target.username.value,
                    password: e.target.password.value,
                }),
            }
        );

        const text = await response.text();
        const obj = JSON.parse(text);
        if (obj.status) {
            setUser(obj.data);
            navigate(`/profile/${obj.data.id}`);
        }
    }

    return (
        <>
            <Header />
            <div id='login'>
                <form
                    id='card'
                    onSubmit={handleSubmit}
                >
                    <div className='card-header'>
                        <h1>Login</h1>
                    </div>
                    <div className='card-content'>
                        <div className='card-content-area'>
                            <label> E-mail:</label>
                            <input
                                type='text'
                                name='username'
                                required
                            />
                        </div>
                        <div className='card-content-area'>
                            <label> Password:</label>
                            <input
                                type='password'
                                name='password'
                                required
                            />
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button type='submit'>login</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}

export { LoginPage };
