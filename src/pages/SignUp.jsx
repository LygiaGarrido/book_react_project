import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { UserContext } from '../contexts/UserContext';

function SignUp() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();

        const response = await fetch(
            'https://ancient-temple-61124.herokuapp.com/api/auth/register',
            {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: e.target.email.value,
                    name: e.target.name.value,
                    password: e.target.password.value,
                    profile_picture: e.target.profile_picture.value,
                }),
            }
        );

        const text = await response.text();
        const obj = JSON.parse(text);
        if (obj.status) {
            setUser(obj.data);
        }

        navigate('/');
    }

    return (
        <>
            <Header />
            <div className='signup-container'>
                <h2 className='signup-title'>
                    Welcome to your new favorite website!
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className='signup-form'
                >
                    <label>Name</label>
                    <input
                        type='text'
                        name='name'
                    />
                    <label>Email</label>
                    <input
                        type='email'
                        name='email'
                    />
                    <label>Password</label>
                    <input
                        type='password'
                        name='password'
                    />
                    <label>Profile Picture</label>
                    <input
                        type='url'
                        name='profile_picture'
                    />
                    <button
                        type='submit'
                        className='signup-form-btn'
                    >
                        Sign up
                    </button>
                </form>
            </div>
        </>
    );
}

export { SignUp };
