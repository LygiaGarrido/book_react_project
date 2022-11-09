import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { Footer } from '../components/Footer';
import { BookSlider } from '../components/bookSlider';

function HomePage() {
    const [books, setBooks] = useState([]);
    const [currentBook, setCurrentBook] = useState(0);

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

    const bookList = books.map((book) => {
        return (
            <BookSlider
                bookTitle={book.title}
                bookDescription={book.description}
                bookCover={book.book_cover}
                bookID={book.id}
                setCurrent={setCurrentBook}
            />
        );
    });

    return (
        <>
            <Header />
            <HeroSection />
            <div className='book-list-div'>
                <h3 className='book-container-title'>The week's best books</h3>
                {bookList[currentBook]}
            </div>
            <Footer />
        </>
    );
}

export { HomePage };
