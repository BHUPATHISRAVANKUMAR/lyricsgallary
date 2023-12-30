function openLyricsPage(movieName) {
    // You can replace this with actual navigation logic or AJAX requests
    const movieTitleElement = document.getElementById("movieTitle");
    const lyricsContentElement = document.getElementById("lyricsContent");
    fetch(`lyrics/${movieName}.html`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch lyrics for ${movieName}`);
        }
        return response.text();
    })
    .then(lyrics => {
        // Update content based on the fetched lyrics
        movieTitleElement.textContent = `${movieName} Lyrics`;
        lyricsContentElement.innerHTML = lyrics;
    })
    .catch(error => {
        console.error(error);
        // Handle error, e.g., display a default message
        movieTitleElement.textContent = "Error";
        lyricsContentElement.textContent = "Failed to fetch lyrics.";
    });
    // Set the movie title and lyrics content based on the selected movie
    switch (movieName) {
        case "salaar":
            movieTitleElement.textContent = '${Animal} ';
            lyricsContentElement.textContent = "#Lyrics1";
            break;
        case "Animal":
            salaarElement.textContent = '{$salaar}';
            lyricsContentElement.textContent = "#Lyrics2";
            break;
        case "Pushpa":
            movieTitleElement.textContent = "Movie 3 Lyrics";
            lyricsContentElement.textContent = "salaarsongs.html";
            break;
        case "Mad":
            movieTitleElement.textContent = "Movie 4 Lyrics";
            lyricsContentElement.textContent = "Lyrics for Movie 4.";
            break;
        case "Jawan":
            movieTitleElement.textContent = "Movie 5 Lyrics";
            lyricsContentElement.textContent = "Lyrics for Movie 5.";
            break;
        case "dj":
            movieTitleElement.textContent = "Movie 6 Lyrics";
            lyricsContentElement.textContent = "Lyrics for Movie 6.";
            break;
        default:
            break;
    }

    // You can also navigate to the lyrics.html page with query parameters if needed
    window.location.href = "salaarsongs.html";
}
