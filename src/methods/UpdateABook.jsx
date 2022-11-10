export default async function UpdateABook(
    id,
    title,
    description,
    year,
    book_cover,
    token
) {
    const response = await fetch(
        `https://cors-anywhere.herokuapp.com/ancient-temple-61124.herokuapp.com/api/book/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                Authorization: token,
            },
            body: JSON.stringify({
                title: title,
                year: Number(year),
                description: description,
                book_cover: book_cover,
            }),
        }
    );

    const json = await response.json();

    return json.data.id;
}
