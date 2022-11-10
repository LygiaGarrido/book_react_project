
export default async function PostBook(title, description, year, book_cover) {
    
        const response = await fetch('https://cors-anywhere.herokuapp.com/ancient-temple-61124.herokuapp.com/api/book/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNTM0IiwiZXhwIjoxNjk5MzcwMTMyLCJpYXQiOjE2Njc4MzQxMzIsImlzcyI6Imlzc3Vlcl9kZXNpZ25hdGlvbiJ9.gjRdtSztMFOk4BqxUKlzlqRapHDKdaLVQJqtLUTALRM'
        },
        body: JSON.stringify({
            "title": title,
            "description": description,
            "year": Number(year),
            "book_cover": book_cover
        })
      })
      
      const json = await response.json();

      

      return json.data.id;


    }


