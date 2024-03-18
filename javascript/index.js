const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    clickCounter++;
    if (itemNumber - (4 + clickCounter) >= 0) {
      movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
        }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

});


function toggle() {
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');
  var popup = document.getElementById('popup');
  popup.classList.toggle('active');
}

function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');
  var arrowIcon = document.getElementById('arrow-icon');
  arrowIcon.classList.toggle('rotate');
}

document.addEventListener("DOMContentLoaded", function() {
  var startingContent = document.querySelector('.starting-content');
  var imageUrl = 'img/f-1.jpg'; // Default image URL

  // Function to change background image dynamically
  function changeBackgroundImage(url) {
      startingContent.style.backgroundImage = "url('" + url + "')";
  }

  // Call changeBackgroundImage with the desired image URL
  changeBackgroundImage(imageUrl);
});



