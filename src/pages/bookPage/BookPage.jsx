import React, { useEffect, useState } from "react";
import UpdateABook from "../../methods/UpdateABook";
import DeleteABook from "../../methods/DeleteABook";
import "./bookPage.css"
import { useContext} from "react"
import { UserContext } from "../../contexts/UserContext"
import { useNavigate, useParams } from "react-router-dom"

function BookPage() {
    const { id } = useParams();
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [book, setBook] = useState([]);
    const [show, setShow] = useState(false);

    if(user === null){
      navigate("/login")
      return;
    }

    useEffect(() => {
    async function fetchBookById(){
           
            const response = await fetch(`https://ancient-temple-61124.herokuapp.com/api/book/${id}`)
            const json = await response.json();
            const data = json.data;
            setBook(data)
            console.log(data);
        }
    
    fetchBookById()
    }, [])

    const handleClick = () => {
     
      setShow(!show)
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      
      const title = event.target.bookTitle.value;
      const year = event.target.bookYear.value;
      const description = event.target.description.value;
      const bookCover = event.target.bookCover.value;
 
      UpdateABook(id, title, description, year, bookCover, user.token);
      event.target.bookTitle.value="";
      event.target.bookYear.value="";
      event.target.description.value="";
      event.target.bookCover.value="";
    }

    const handleDelete = () => {
      DeleteABook(id, user.token);
    }

      return(
        <>
        <header></header>
      <div className="bookPage">
        { show ===false && 
        <div className="bookInfo">
        <div id="bookCover">
        <img src={book.book_cover}></img>
        </div>
        <div id="bookDetails">
        <p><strong>Title:</strong> {book.title}</p>
        <p><strong>Year:</strong> {book.year}</p>
        <p><strong>Summary:</strong> {book.description}</p>
        </div> 
        <div id="editButton">
        <button onClick={handleClick}>Edit</button>
        </div>
        </div>}
        
          { show &&
          <div className="editBook">
            
            <div id="updateForm">
              <form onSubmit={handleSubmit}>
              <label>Title</label><br/>
              <input type="text" placeholder="Title" name="bookTitle" required/><br/>
              <label>Year</label><br/>
              <input type="number" placeholder="Year" name="bookYear" required/><br/>
              <label>Description</label><br/>
              <input type="text" placeholder="Description" name="description" required/><br/>
              <label>Book Cover</label><br/>
              <input type="text" placeholder="Book Cover" name="bookCover" required/><br/><br/>
              <button type="submit"> Update book </button>
              </form>
            </div>
            <div className="editButtons">
            <div id="discardButton">
            <button onClick={handleClick}>Discard changes</button>
            </div>
            <div id="deleteButton">
            <button onClick={handleDelete}>Delete book</button>
            </div>
            </div>
          </div>
          }
     
       
      </div>
      <footer></footer>
      </>
      )

    }

export {BookPage};