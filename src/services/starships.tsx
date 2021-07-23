export async function getStarships() {
    const URL = "https://swapi.dev/api/starships";
    const response = await fetch(URL);
    const data = await response.json();
    return data.results;
}