import { useContext, useEffect, useState } from 'react';
import { BookGrid } from '../components/BookGrid';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { UserContext } from '../contexts/UserContext';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Grid_my_books = styled.div`
    display: grid;
    margin-top: 5%;
    grid-column: 1/ -1;
    grid-template-columns: auto auto auto;
    row-gap: 30px;
    column-gap: 10px;
    justify-content: space-evenly;
`;

function MyBooks() {
    const [books, setBooks] = useState([]);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        async function getAllBooks() {
            const response = await fetch(
                'https://ancient-temple-61124.herokuapp.com/api/book/'
            );
            const json = await response.json();
            setBooks(json.data);
        }

        getAllBooks();
    }, []);

    if (user === null) {
        navigate('/login');
        return;
    }

    const gridBooks = books
        .filter((book) => book.user.id === +user.id)
        .map((book) => {
            return (
                <BookGrid
                    bookTitle={book.title}
                    bookDescription={book.description}
                    bookCover={book.book_cover}
                    bookID={book.id}
                />
            );
        });

    return (
        <>
            <Header />
            <Grid_my_books>{gridBooks}</Grid_my_books>
            <Footer />
        </>
    );
}

export { MyBooks };
