export async function getJokes() {
    const jokesResponse = await fetch("https://official-joke-api.appspot.com/jokes/ten",
        {
            method:'GET',
        }
    );
    return await jokesResponse.json();
}