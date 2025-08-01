const BASE_URL = "https://api.rawg.io/api"
const API_KEY = process.env.RAWG_API_KEY || "";


export async function fetchPlatforms(page:number) {
    const url = `${BASE_URL}/platforms?key=${
        API_KEY
      }&page=${page}&page_size=${20}`;
      const options = {
        method: "GET",
        next: { revalidate: 86400 },
      };
      const response = await fetch(url, options);
    
      const data = await response.json();
      return data
}


export async function fetchPublishers(page:number) {
    const url = `${BASE_URL}/publishers?key=${
        API_KEY
      }&page=${page}&page_size=${20}`;
      const options = {
        method: "GET",
        next: { revalidate: 86400 },
      };
    
      const response = await fetch(url, options);
      const data = await response.json();
      return data
}


export async function fetchGenres(page:number) {
    const url = `${BASE_URL}/genres?key=${
        API_KEY
      }&page=${page}`;
      const options = {
        method: "GET",
        next: { revalidate: 86400 },
      };
    
      const response = await fetch(url, options);
      const data = await response.json();
      return data
}


export async function fetchGames(queryString:string) {
    
    
      const response = await fetch(`/api/games?${queryString}`);
      const data = await response.json();
      return data
}

export async function fetchAGenre(page:number,id:number) {
    const url = `${BASE_URL}/genres/${id}?key=${
        API_KEY
      }`;
    const gameUrl = `${BASE_URL}/games?genres=${id}&key=${
        API_KEY
      }&page=${page}`;
      const options = {
        method: "GET",
        next: { revalidate: 86400 },
      };
    const[response,response2]= await Promise.all(
        [
            fetch(url, options),
            fetch(gameUrl,options)
        ]
    )
    const [data, games] = await Promise.all([response.json(), response2.json()]);

    return { data, games };
}


export async function fetchAPlatform(page:number,id:number) {
    const url = `${BASE_URL}/platforms/${id}?key=${
        API_KEY
      }`;
    const gameUrl = `${BASE_URL}/games?platforms=${id}&key=${
        API_KEY
      }&page=${page}`;
      const options = {
        method: "GET",
        next: { revalidate: 86400 },
      };
    const[response,response2]= await Promise.all(
        [
            fetch(url, options),
            fetch(gameUrl,options)
        ]
    )
    const [data, games] = await Promise.all([response.json(), response2.json()]);

    return { data, games };
}
export async function fetchAPublisher(page:number,id:number) {
    const url = `${BASE_URL}/publishers/${id}?key=${
        API_KEY
      }`;
    const gameUrl = `${BASE_URL}/games?publishers=${id}&key=${
        API_KEY
      }&page=${page}`;
      const options = {
        method: "GET",
        next: { revalidate: 86400 },
      };
    const[response,response2]= await Promise.all(
        [
            fetch(url, options),
            fetch(gameUrl,options)
        ]
    )
    const [data, games] = await Promise.all([response.json(), response2.json()]);

    return { data, games };
}

export async function fetchAGame(id:number) {
  const url = `${BASE_URL}/games/${id}?key=${
    API_KEY
  }`;
  const screenUrl = `${BASE_URL}/games/${id}/screenshots?key=${
    API_KEY
  }`;
  const options = {
    method: "GET",
  };

   const [response,response2] = await Promise.all ([fetch(url, options), fetch(screenUrl,options)]);

   const [data, screens] = await Promise.all ([response.json(),response2.json()]);
  return {data, screens}

  
}







