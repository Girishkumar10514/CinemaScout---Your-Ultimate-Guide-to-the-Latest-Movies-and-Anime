document.addEventListener("DOMContentLoaded", function () {
    // Select the container element
    const container = document.querySelector(".container");

    // Retrieve the value from localStorage
    const myData2 = localStorage.getItem("myData2");
    console.log(myData2);

    if (!myData2) {
        console.error("No data found in localStorage.");
        return;
    }

    // API request options
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "6b258f4761msh0532fe3e780338bp1639cfjsn8d42ae8cbc1d",
            "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
        },
    };

    // Fetch anime data from the API
    fetch(`https://anime-db.p.rapidapi.com/anime/by-id/${myData2}`, options)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok.");
            }
            return response.json();
        })
        .then(animeData => {
            // Log the response for debugging
            console.log(animeData);

            // Construct the URL for watching the anime
            const encodedKeyword = encodeURIComponent(animeData.title);
            const url = `https://zoro.to/search?keyword=${encodedKeyword}`;
            console.log(url);

            // Generate HTML content for displaying anime details
            container.innerHTML = `
                <section class="movie-detail">
                    <div class="container">
                        <figure class="movie-detail-banner">
                            <img src="${animeData.image}" alt="${animeData.title}">
                        </figure>
                        <div class="movie-detail-content">
                            <p class="detail-subtitle">Episodes: ${animeData.episodes}</p>
                            <h1 class="h1 detail-title">${animeData.title}</h1>
                            <div class="meta-wrapper">
                                <div class="genre-wrapper">
                                    <p>Genres:</p>
                                    <p>${animeData.genres.join(', ')}</p>
                                </div>
                                <div class="date-time">
                                    <div>
                                        <p>Status:</p>
                                        <p>${animeData.status}</p>
                                    </div>
                                    <div>
                                        <p>Type:</p>
                                        <p>${animeData.type}</p>
                                    </div>
                                </div>
                            </div>
                            <p class="storyline">${animeData.synopsis}</p>
                            <a href="${url}" target="_blank" rel="noopener noreferrer">
                                <button class="btn btn-primary">
                                    <ion-icon name="play"></ion-icon>
                                    <span>Watch Now</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </section>
                <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            `;
        })
        .catch(error => {
            console.error("Error fetching anime data:", error);
        });
});
