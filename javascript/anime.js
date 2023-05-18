let container = document.querySelector(".container");
// Retrieve the value from localStorage
var myData2 = localStorage.getItem("myData2");
console.log(myData2);

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6b258f4761msh0532fe3e780338bp1639cfjsn8d42ae8cbc1d",
    "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
  },
};

fetch(`https://anime-db.p.rapidapi.com/anime/by-id/${myData2}`, options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    const keyword = response.title;
    const encodedKeyword = encodeURIComponent(keyword);
    const url = "https://zoro.to/search?keyword=" + encodedKeyword;
    console.log(url);

    // let genreArray = response.genres;

    container.innerHTML = `
                <section class="movie-detail">
                    <div class="container">

                        <figure class="movie-detail-banner">

                            <img src=${response.image} alt="">


                        </figure>

                        <div class="movie-detail-content">

                            <p class="detail-subtitle">Episodes : ${response.episodes}</p>

                            <h1 class="h1 detail-title">
                                ${response.title}
                            </h1>

                            <div class="meta-wrapper">

                                <div class="ganre-wrapper">
                                    <p>Genres: </p>
                                    <p>${response.genres[0]}</p>
                                    <p>${response.genres[1]}</p>

                                </div>

                                <div class="date-time">

                                    <div>
                                        <p>Status: </p>

                                        <p>${response.status}</p>
                                    </div>

                                    <div>
                                        <p>Type: </p>

                                        <p>${response.type}</p>
                                    </div>

                                </div>

                            </div>

                            <p class="storyline">
                                ${response.synopsis}
                            </p>

                            <a alt="" href=${url}>
                                <button class="btn btn-primary">
                                    <ion-icon name="play"></ion-icon>

                                    <span>Watch Now</span>
                                </button>
                            </a>



                        </div>

                    </div>
                </section>

                <!-- icon link -->

                <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        `;

    // let genre1 = document.querySelector('.ganre-wrapper');

    // let genre = document.createElement('p');
    // for (var i = 0; i < genreArray.length; i++) {
    //     genre.innerHTML=
    //     `
    //      <p>genreArray[i]</p>
    //     `;
    //     document.genre1.appendChild(genre);

    // }
  })
  .catch((err) => console.error(err));
