var container = document.querySelector(".container");

// Retrieve the value from localStorage
var myData = localStorage.getItem("myData");
console.log(myData);

let temp = myData.replace(/\s+/g, "%20");
console.log(temp);

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6b258f4761msh0532fe3e780338bp1639cfjsn8d42ae8cbc1d",
    "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
  },
};

fetch(
  `https://anime-db.p.rapidapi.com/anime?page=1&size=12&genres=${temp}&sortBy=ranking&sortOrder=asc`,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    let data = response.data;
    container.innerHTML = "";

    data.forEach((anime) => {
      const card = `
            <a alt="" class="my-link2" data-my-value="${anime._id}" href="#">
              <div class="card mb-2">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img class="img-fluid rounded-start" src="${
                      anime.image
                    }" alt="">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h3 class="card-title">${anime.title}</h3>
                      <p class="card-text">${truncateText(
                        anime.synopsis,
                        100
                      )}.</p>
                      <button class="btn btn-primary custom-watch-btn" data-my-value="${anime._id}">Watch</button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          `;
      container.insertAdjacentHTML("beforeend", card);
    });

    // Add styling to the container
    container.classList.add("card-container");

    // Add event listeners to the buttons
    var btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
      btn.addEventListener('click', function(event) {
        event.preventDefault();
        var myValue = this.dataset.myValue;
        console.log('Clicked on button with value: ' + myValue);
        redirectToAnimePage(myValue);
      });
    });
  })
  .catch((err) => console.error(err));

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

function redirectToAnimePage(myValue) {
  // Set the value in localStorage
  localStorage.setItem('myData2', myValue);
  
  // Redirect to anime.html
  window.location.href = "/html/anime.html";
}
