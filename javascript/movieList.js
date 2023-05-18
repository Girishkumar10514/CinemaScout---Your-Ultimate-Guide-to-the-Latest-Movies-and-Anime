var container = document.querySelector(".container");

// Retrieve the value from localStorage
var moviegenreval = localStorage.getItem("moviegenreval");
console.log(moviegenreval);

// let temp = moviegenreval.replace(/\s+/g, "%20");
// console.log(temp);

const url = `https://online-movie-database.p.rapidapi.com/title/v2/get-popular-movies-by-genre?genre=${moviegenreval}&limit=20`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6b258f4761msh0532fe3e780338bp1639cfjsn8d42ae8cbc1d",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

let dataArr = [];
function first() {
  call();
  async function call() {
    const response = await fetch(url, options);
    const result = await response.text();
    // console.log(result);
    // const list = result.split(",");
    // console.log(list);

    const str = result;

    const arr = JSON.parse(str)
      .filter((item) => item.startsWith("/title/tt"))
      .map((item) => item.match(/tt\d+/)[0]);

    // console.log(arr);

    arr.forEach((element) => {
      loadMovies(element);
    });
  }
  // call();

  // let str1 = ``;
  async function loadMovies(movieId) {
    const URL = `https://omdbapi.com/?i=${movieId}&page=1&apikey=aee4aaff`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    // console.log(data);
    if (data.Response == "False") {
      return;
    }
    dataArr.push(data);
    console.log(dataArr.length);
  }

  // console.log(str1);

  // console.log(dataArr);
}
//  catch (error) {}

function hey() {
  console.log(dataArr);

  let str = ``;
  let i = 0;
  while (i < 10) {

    if(dataArr[i].imdbID=="N/A"){
        i++;
    }
    if(dataArr[i].Poster=="N/A"){
        dataArr[i].Poster = "/img/img_not_found.webp";
    }
    let str1 = `
    
    <a alt="" class="my-link2" data-my-value=${dataArr[i].imdbID} href="#">
		<div class="card mb-2">
			<div class="row g-0">
			<div class="col-md-4" >
				<img class="img-fluid rounded-start" src=${dataArr[i].Poster} alt="">
			</div>
			<div class="col-md-8">
				<div class="card-body">
				<h3 class="card-title">${dataArr[i].Title}</h3>
				<p class="card-text">${dataArr[i].Plot}.</p>
				<button class="btn btn-primary">Watch</button>
				</div>
			</div>
			</div>
		</div>
		</a>
    
     

    `;
    str += str1;
    i++;
  }

  // console.log(htmlcode);

  container.innerHTML = str;

  const style = document.createElement("style");
  style.innerHTML = `
  		.my-link2 {
  			text-decoration: none;
  		}
        `;

  document.head.appendChild(style);

  const js = document.createElement("script");
  js.innerHTML = `
  	var myLinks = document.querySelectorAll('.my-link2');
  	for (var i = 0; i < myLinks.length; i++) {
  	  myLinks[i].addEventListener('click', function(event) {
  		event.preventDefault();
  		var myValue = this.dataset.myValue;
  		console.log('Clicked on link with value: ' + myValue);
  		// Set a value in localStorage
  		localStorage.setItem('movieval', myValue);

  		// call your function here, passing in the value if needed
  		window.location.href = "/html/movie/movieFinal.html";
  	  });
  	}

  	`;

  document.head.appendChild(js);
}

function waitThenCall() {
  first(); // call functionFirst first

  setTimeout(function () {
    hey(); // call functionSecond after 7 seconds
  }, 7000);
}

waitThenCall();
