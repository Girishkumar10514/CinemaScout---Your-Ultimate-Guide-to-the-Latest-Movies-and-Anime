// const { truncateSync } = require("fs");

let container = document.querySelector(".container");
// Retrieve the value from localStorage
var myData2 = localStorage.getItem("movieval");
console.log(myData2);
// loadMovies(myData2);

const url = `https://ott-details.p.rapidapi.com/gettitleDetails?imdbid=${myData2}`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6b258f4761msh0532fe3e780338bp1639cfjsn8d42ae8cbc1d",
    "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
  },
};

let ottdetails;
async function loadott(xyz) {
  const urlx = `https://moviesminidatabase.p.rapidapi.com/movie/id/${xyz}/`;
  const optionsx = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6b258f4761msh0532fe3e780338bp1639cfjsn8d42ae8cbc1d",
      "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(urlx, optionsx);
    const result = await response.text();
    console.log(result);
    ottdetails = result;
  } catch (error) {
    console.error(error);
    const img = document.createElement("img");
    img.src = "img/imdb_not_found.webp";
    document.body.appendChild(img);
  }
}

// let val;
loaddetails();
async function loaddetails() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
    loadMovies(myData2, result);
  } catch (error) {
    console.error(error);
    const img = document.createElement("img");
    img.src = "/img/imdb_not_found.webp";
    document.body.appendChild(img);
  }
  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.text();
  //     //   console.log(result);
  //     // val = result;
  //     //   console.log("assigned");
  //     loadMovies(myData2, result);
  //   } catch (error) {
  //     console.error(error);
  //   }
}

// console.log(val);

async function loadMovies(movieId, result1) {
  const URL = `https://omdbapi.com/?i=${movieId}&page=1&apikey=aee4aaff`;
  const res = await fetch(`${URL}`);
  const data = await res.json();
  //   console.log(data);
  //   console.log(val);
  displayMovieDetails(data, result1);
}

function displayMovieDetails(details, details1) {
  //   console.log(typeof details1);

  //   const obj2 = JSON.parse(obj1);
  //   loadott();

  const jsonString = details1;
  const obj = JSON.parse(jsonString);
  console.log(obj);

  //     loadott(obj.imdbid);

  //   console.log(ottdetails);
  //   //   console.log(obj.streamingAvailability.country.US[5].url);

  //   //   console.log(obj.result.youtubeTrailerVideoLink);
  let valx, valy;
  if (obj.streamingAvailability.country.US == undefined) {
    valx = "#";
    valy = "#";
  } else {
    valx = obj.streamingAvailability.country.US[0].url;
    valy = obj.streamingAvailability.country.US[0].platform;
  }
  let val = `https://www.youtube.com/results?search_query=${details.Title}`;

  container.innerHTML = `
    <div class = "movie-poster">
        <img src = "${
          details.Poster != "N/A" ? details.Poster : "/img/img_not_found"
        }" alt = "movie poster">
    </div>
    <div class = "movie-info">
        <h3 class = "movie-title">${details.Title}</h3>
        <ul class = "movie-misc-info">
            <li class = "year">Year: ${details.Year}</li>
            <li class = "rated">Ratings: ${details.Rated}+${obj.imdbrating}</li>
            <li class = "released">Released: ${details.Released}</li>
        </ul>
        <p>runtime: ${obj.runtime}</p> 
        <p class = "genre"><b>Genre:</b> ${details.Genre}</p>
        <p class = "writer"><b>Writer:</b> ${details.Writer}</p>
        <p class = "actors"><b>Actors: </b>${details.Actors}</p>
        <p class = "plot"><b>Plot:</b> ${details.Plot}</p>
        <p class = "language"><b>Language:</b> ${details.Language}</p>
        <p class = "awards"><b><i class = "fas fa-award"></i></b> ${
          details.Awards
        }</p>

        <a class="btn btn-primary" href=${valx} role="button">Watch on ${valy}</a>


        <a class="btn btn-primary" href=${val} role="button">Trailer</a>

        

    `;
}

/* <a class="btn btn-primary" href=${
    obj.streamingAvailability.country.US[1].url
  } role="button">Watch on ${
obj.streamingAvailability.country.US[1].platform
}</a>
  <a class="btn btn-primary" href=${
    obj.streamingAvailability.country.US[3].url
  } role="button">Watch on ${
obj.streamingAvailability.country.US[3].platform
}</a> */
