import { useEffect } from 'react';
import styled from 'styled-components';

const Highlight_book = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 20%;
    margin-right: 20%;
    font-size: 30px;
    color: #343434;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    margin-top: 15px;
`;

const Book_description = styled.div`
    margin-top: 43px;
    margin-bottom: 20px;
    margin-right: 58px;
    margin-left: 103px;
`;

const Book_cover = styled.div`
    margin-top: 15px;
    margin-bottom: 7px;
    margin-right: 58px;
    margin-left: 27px;
    flex-wrap: wrap;
`;

function BookSlider(props) {
    let currentBook = 0;

    useEffect(() => {
        setInterval(() => {
            currentBook < 4 ? currentBook++ : (currentBook = 0);
            props.setCurrent(currentBook);
        }, 5000);
    }, [currentBook]);

    function handleClick() {
        //TODO (insert link to bookpage)
        console.log(props.bookID);
    }

    return (
        <>
            <Highlight_book onClick={handleClick}>
                <Book_cover>
                    <img
                        height='199px'
                        width='auto'
                        src={props.bookCover}
                        alt={props.bookTitle}
                    />
                </Book_cover>
                <Book_description>
                    <p>{props.bookDescription}</p>
                </Book_description>
            </Highlight_book>
        </>
    );
}

export { BookSlider };
