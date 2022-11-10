export default async function PostBook(
    title,
    description,
    year,
    book_cover,
    token
) {
    const response = await fetch(
        'https://cors-anywhere.herokuapp.com/ancient-temple-61124.herokuapp.com/api/book/',
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                Authorization: token,
            },
            body: JSON.stringify({
                title: title,
                description: description,
                year: Number(year),
                book_cover: book_cover,
            }),
        }
    );

    const json = await response.json();

    return json.data.id;
}
