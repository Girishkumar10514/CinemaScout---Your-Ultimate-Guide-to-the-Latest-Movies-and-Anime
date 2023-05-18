var container = document.querySelector(".container");

// Retrieve the value from localStorage
var myData = localStorage.getItem('myData');
console.log(myData);


let temp = myData.replace(/\s+/g, "%20");
console.log(temp);

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6b258f4761msh0532fe3e780338bp1639cfjsn8d42ae8cbc1d',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=12&genres=${temp}&sortBy=ranking&sortOrder=asc`, options)
	.then(response => response.json())
	.then(response => {


		console.log(response);

		let data = response.data;
		container.innerHTML =
		`
		<a alt="" class="my-link2" data-my-value="${data[0]._id}" href="#">
		<div class="card mb-2">
			<div class="row g-0">
			<div class="col-md-4" >
				<img class="img-fluid rounded-start" src=${data[0].image} alt="">
			</div>
			<div class="col-md-8">
				<div class="card-body">
				<h3 class="card-title">${data[0].title}</h3>
				<p class="card-text">${data[0].synopsis}.</p>
				<button class="btn btn-primary">Watch</button>
				</div>
			</div>
			</div>
		</div>
		</a>
		
		<a alt="" class="my-link2" data-my-value=${data[1]._id} href="#">
		<div class="card mb-2">
			<div class="row g-0">
			<div class="col-md-4" >
				<img class="img-fluid rounded-start" src=${data[1].image} alt="">
			</div>
			<div class="col-md-8">
				<div class="card-body">
				<h3 class="card-title">${data[1].title}</h3>
				<p class="card-text">${data[1].synopsis}.</p>
				<button class="btn btn-primary">Watch</button>
				</div>
			</div>
			</div>
		</div>
		</a>
		
		<a alt="" class="my-link2" data-my-value=${data[2]._id} href="#">
		<div class="card mb-2">
			<div class="row g-0">
			<div class="col-md-4" >
				<img class="img-fluid rounded-start" src=${data[2].image} alt="">
			</div>
			<div class="col-md-8">
				<div class="card-body">
				<h3 class="card-title">${data[2].title}</h3>
				<p class="card-text">${data[2].synopsis}.</p>
				<button class="btn btn-primary">Watch</button>
				</div>
			</div>
			</div>
		</div>
		</a>
		
		<a alt="" class="my-link2" data-my-value=${data[3]._id} href="#">
		<div class="card mb-2">
			<div class="row g-0">
			<div class="col-md-4" >
				<img class="img-fluid rounded-start" src=${data[3].image} alt="">
			</div>
			<div class="col-md-8">
				<div class="card-body">
				<h3 class="card-title">${data[3].title}</h3>
				<p class="card-text">${data[3].synopsis}.</p>
				<button class="btn btn-primary">Watch</button>
				</div>
			</div>
			</div>
		</div>
		</a>
		
		<a alt="" class="my-link2" data-my-value=${data[4]._id} href="#">
		<div class="card mb-2">
			<div class="row g-0">
			<div class="col-md-4" >
				<img class="img-fluid rounded-start" src=${data[4].image} alt="">
			</div>
			<div class="col-md-8">
				<div class="card-body">
				<h3 class="card-title">${data[4].title}</h3>
				<p class="card-text">${data[4].synopsis}.</p>
				<button class="btn btn-primary">Watch</button>
				</div>
			</div>
			</div>
		</div>
		</a>

		<a alt="" class="my-link2" data-my-value=${data[5]._id} href="#">
		<div class="card mb-2">
			<div class="row g-0">
			<div class="col-md-4" >
				<img class="img-fluid rounded-start" src=${data[5].image} alt="">
			</div>
			<div class="col-md-8">
				<div class="card-body">
				<h3 class="card-title">${data[5].title}</h3>
				<p class="card-text">${data[5].synopsis}.</p>
				<button class="btn btn-primary">Watch</button>
				</div>
			</div>
			</div>
		</div>
		</a>

		<a alt="" class="my-link2" data-my-value=${data[6]._id} href="#">
		<div class="card mb-2">
			<div class="row g-0">
			<div class="col-md-4" >
				<img class="img-fluid rounded-start" src=${data[6].image} alt="">
			</div>
			<div class="col-md-8">
				<div class="card-body">
				<h3 class="card-title">${data[6].title}</h3>
				<p class="card-text">${data[6].synopsis}.</p>
				<button class="btn btn-primary">Watch</button>
				</div>
			</div>
			</div>
		</div>
		</a>
		
		<a alt="" class="my-link2" data-my-value=${data[7]._id} href="#">
		<div class="card mb-2">
			<div class="row g-0">
			<div class="col-md-4" >
				<img class="img-fluid rounded-start" src=${data[7].image} alt="">
			</div>
			<div class="col-md-8">
				<div class="card-body">
				<h3 class="card-title">${data[7].title}</h3>
				<p class="card-text">${data[7].synopsis}.</p>
				<button class="btn btn-primary">Watch</button>
				</div>
			</div>
			</div>
		</div>
		</a>

		<a alt="" class="my-link2" data-my-value=${data[8]._id} href="#">
		<div class="card mb-2">
			<div class="row g-0">
			<div class="col-md-4" >
				<img class="img-fluid rounded-start" src=${data[8].image} alt="">
			</div>
			<div class="col-md-8">
				<div class="card-body">
				<h3 class="card-title">${data[8].title}</h3>
				<p class="card-text">${data[8].synopsis}.</p>
				<button class="btn btn-primary">Watch</button>
				</div>
			</div>
			</div>
		</div>
		</a>
		
		<a alt="" class="my-link2" data-my-value=${data[9]._id} href="#">
		<div class="card mb-2">
			<div class="row g-0">
			<div class="col-md-4" >
				<img class="img-fluid rounded-start" src=${data[9].image} alt="">
			</div>
			<div class="col-md-8">
				<div class="card-body">
				<h3 class="card-title">${data[9].title}</h3>
				<p class="card-text">${data[9].synopsis}.</p>
				<button class="btn btn-primary">Watch</button>
				</div>
			</div>
			</div>
		</div>
		</a>`
			;

		const style = document.createElement('style');
		style.innerHTML = `
			.my-link2 {
				text-decoration: none;
			}
        `;

		document.head.appendChild(style);

		const js = document.createElement('script');
		js.innerHTML = 
		`
		var myLinks = document.querySelectorAll('.my-link2');
		for (var i = 0; i < myLinks.length; i++) {
		  myLinks[i].addEventListener('click', function(event) {
			event.preventDefault();
			var myValue = this.dataset.myValue;
			console.log('Clicked on link with value: ' + myValue);
			// Set a value in localStorage
			localStorage.setItem('myData2', myValue);
		
			// call your function here, passing in the value if needed
			window.location.href = "/html/anime.html";
		  });
		}
		
		`;

		document.head.appendChild(js);


	})
	.catch(err => console.error(err));