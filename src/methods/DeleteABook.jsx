
export default async function DeleteABook(id, token) {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/ancient-temple-61124.herokuapp.com/api/book/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': token
        }
      })
      
      const json = await response.json();

      const data = json.data;

      console.log(data)
    }
    

