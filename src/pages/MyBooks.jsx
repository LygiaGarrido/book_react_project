import { useContext, useEffect, useState } from 'react';
import { BookGrid } from '../components/BookGrid';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { UserContext } from '../contexts/UserContext';

function MyBooks() {
    const [books, setBooks] = useState([]);
    const { user } = useContext(UserContext);

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
            {gridBooks}
            <Footer />
        </>
    );
}

export { MyBooks };
