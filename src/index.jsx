import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BookPage } from './pages/bookPage/BookPage';
import { SignUp } from './pages/SignUp';
import { LoginPage } from './pages/loginPage';
import { HomePage } from './pages/HomePage';
import { Profile } from './pages/profile';
import { UserContext } from './contexts/UserContext';
import { MyBooks } from './pages/MyBooks';

const domContainer = document.getElementById('app');
const root = createRoot(domContainer);

function App() {
    const [user, setUser] = useState(null);
    return (
        <BrowserRouter>
            <UserContext.Provider value={{ user, setUser }}>
                <Routes>
                    <Route
                        path='/'
                        element={<HomePage />}
                    />
                    <Route
                        path='sign-up'
                        element={<SignUp />}
                    />
                    <Route
                        path='login'
                        element={<LoginPage />}
                    />
                    <Route
                        path='profile'
                        element={<Profile />}
                    >
                        <Route
                            path={':id'}
                            element={<Profile />}
                        />
                    </Route>
                    <Route
                        path='mybooks'
                        element={<MyBooks />}
                    ></Route>
                    <Route
                    path="book"
                    element={<BookPage/>}>
                        <Route
                            path={':id'}
                            element={<BookPage />}
                        />
                    </Route>
                
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}

root.render(<App />);
