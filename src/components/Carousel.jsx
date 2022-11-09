
import React, { useEffect, useState, useRef } from "react";

import './carousel.css';



export default function Carousel() {

  const [books, setBooks] = useState([]);
   

    useEffect(() => {
        
        async function fetchBooks() {
            const response = await fetch("https://ancient-temple-61124.herokuapp.com/api/book/");
            const json = await response.json();
            const data = json.data;
            setBooks(data);
            
        }

        fetchBooks();
        
    }, []);
   
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!books || !books.length) return null;

  return (
    <div className="container">
      <div className="carousel" ref={carousel}>
        {books.map((item) => {
          const { id, title, year, description, book_cover } = item;
          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={book_cover} alt={title} />
              </div>
              <div className="info">
                <span className="name">{title}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={handleLeftClick}>
          <img src="https://cdn-icons-png.flaticon.com/512/109/109617.png" height="25px" alt="Scroll Left" />
        </button>
        <button onClick={handleRightClick}>
          <img src="https://cdn-icons-png.flaticon.com/512/109/109617.png" height="25px" alt="Scroll Right" />
        </button>
      </div>
    </div>
  );
}
