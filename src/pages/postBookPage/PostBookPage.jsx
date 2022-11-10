import React, { useEffect, useState } from 'react';
import PostABook from "../../methods/PostABook";
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

function PostBookPage() {
   
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    if (user === null) {
        navigate('/login');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const title = event.target.bookTitle.value;
        const year = event.target.bookYear.value;
        const description = event.target.description.value;
        const bookCover = event.target.bookCover.value;

        const id = await PostABook(title, description, year, bookCover);
        navigate(`/book/${id}`);

        event.target.bookTitle.value = '';
        event.target.bookYear.value = '';
        event.target.description.value = '';
        event.target.bookCover.value = '';
    };

    return (
        <>
       
             <Header />
            <div className='bookPage'>
                    <div className='editBook'>
                        <div id='updateForm'>
                            <form onSubmit={handleSubmit}>
                                <label>Title</label>
                                <br />
                                <input
                                    type='text'
                                    placeholder='Title'
                                    name='bookTitle'
                                    required
                                />
                                <br />
                                <label>Year</label>
                                <br />
                                <input
                                    type='number'
                                    placeholder='Year'
                                    name='bookYear'
                                    required
                                />
                                <br />
                                <label>Description</label>
                                <br />
                                <input
                                    type='text'
                                    placeholder='Description'
                                    name='description'
                                    required
                                />
                                <br />
                                <label>Book Cover</label>
                                <br />
                                <input
                                    type='text'
                                    placeholder='Book Cover'
                                    name='bookCover'
                                    required
                                />
                                <br />
                                <br />
                                <button className="editBt2" type='submit'> New book </button>
                            </form>
                        </div>
                    </div>
            </div>
                            
            <Footer /> 
             
        </>
    );
}

export { PostBookPage };
