import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { HeroSection } from './HeroSection';

function Header() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    let isLoggedIn = false;
    if (user !== null) {
        isLoggedIn = true;
    }
    return (
        <>
            <header className='header'>
                <h2 className='logo'>THE BOOK</h2>
                <ol className='nav'>
                    <li className='nav-elem'>
                        <a
                            href=''
                            className='nav-link'
                        >
                            About
                        </a>
                    </li>
                    <li className='nav-elem'>
                        <a
                            href='#'
                            className='nav-link'
                            onClick={() => navigate('/')}
                        >
                            Home
                        </a>
                    </li>
                    <li className='nav-elem'>
                        <a
                            href='#'
                            className='nav-link'
                            onClick={() => navigate('/mybooks')}
                            hidden={!isLoggedIn}
                        >
                            My books
                        </a>
                    </li>
                    <li className='nav-elem'>
                        <button
                            className='nav-btn login-btn'
                            hidden={isLoggedIn}
                        >
                            <a
                                href=''
                                className='nav-link'
                                onClick={() => navigate('/login')}
                            >
                                Log in
                            </a>
                        </button>
                    </li>
                    <li className='nav-elem'>
                        <button
                            className='nav-btn signup-btn'
                            hidden={isLoggedIn}
                        >
                            <Link
                                to='/sign-up'
                                className='nav-link signup-btn'
                            >
                                Sign up
                            </Link>
                        </button>
                    </li>
                </ol>
            </header>
            <div className='division'></div>
        </>
    );
}

export { Header };
