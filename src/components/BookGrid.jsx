import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Book_to_grid = styled.div`
    display: flex;
    margin-top: 15px;
    margin-bottom: 5%;
    margin-right: 58px;
    margin-left: 27px;
    max-height: 214px;
    max-width: 264px;
    justify-content: space-around;
`;

function BookGrid(props) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/book/${props.bookID}`);
    }

    return (
        <>
            <Book_to_grid key={props.bookID}>
                {' '}
                <img
                    src={props.bookCover}
                    alt={props.bookTitle}
                    onClick={handleClick}
                    height='214px'
                    width='auto'
                />
            </Book_to_grid>
        </>
    );
}

export { BookGrid };
