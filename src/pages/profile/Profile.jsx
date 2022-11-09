import { Link, useParams } from 'react-router-dom';
import { useEffect, useState, useRef, useContext } from 'react';
import logo from './profile.jpg';
import { UserContext } from '../../contexts/UserContext';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

function Profile() {
    const { user } = useContext(UserContext);

    const { id } = useParams();

    if (user === null || +id !== +user.id) {
        return <h1>{`Please do the login`}</h1>;
    }

    return ProfilePage();
}
function ProfilePage() {
    return (
        <>
            <Header />
            <Link to='/mybooks'> Mybooks</Link>
            <UpperPage />
            <EditProfile />
            <Footer />
        </>
    );
}
function UpperPage() {
    const { user, setUser } = useContext(UserContext);
    return (
        <>
            <div className='profile'>
                <img
                    id='logo'
                    src={logo}
                />
                <h2> {user.name} </h2>
            </div>
        </>
    );
}
function EditProfile(props) {
    const [text, setText] = useState('');
    const [items, setItems] = useState([]);
    const { onClick } = props;
    const [showElement, setShowElement] = useState(false);
    const showOrHide = () => setShowElement(true);
    const showOrHide2 = () => setShowElement(false);

    return (
        <>
            <div className='button'>
                <button
                    className='edit-profile-btn'
                    onClick={showOrHide}
                >
                    Edit Profile
                </button>
                {showElement ? edit() : null}
            </div>
        </>
    );

    function edit() {
        function handleChange(event) {
            event.preventDefault();
            let username = event.target.username.value;
            setText(username);
        }

        function addItem(event) {
            showOrHide2();
            event.preventDefault();
            setItems([...items, text]);
        }
        return (
            <>
                <div className='Edit'>
                    <scan>
                        <h3>
                            Name:
                            <input
                                onChange={handleChange}
                                type='text'
                                name='username'
                            />
                        </h3>
                        <h3>
                            Email:
                            <input
                                onChange={handleChange}
                                type='text'
                                name='email'
                            />
                        </h3>
                        <h3>
                            Password:
                            <input
                                onChange={handleChange}
                                type='text'
                                name='password'
                            />
                        </h3>
                        <h3>
                            Profile Picture:
                            <input type='file' />
                        </h3>
                    </scan>
                </div>
                <div className='editButton'>
                    <button
                        className='edit-profile-btn'
                        onClick={addItem}
                    >
                        Save
                    </button>
                </div>
            </>
        );
    }
}

export { Profile };
