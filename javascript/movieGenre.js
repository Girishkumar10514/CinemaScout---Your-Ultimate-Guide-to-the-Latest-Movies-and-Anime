var myLinks = document.querySelectorAll('.my-link');
for (var i = 0; i < myLinks.length; i++) {
  myLinks[i].addEventListener('click', function(event) {
    event.preventDefault();
    var myValue = this.dataset.myValue;
    console.log('Clicked on link with value: ' + myValue);
    // Set a value in localStorage
    localStorage.setItem('moviegenreval', myValue);

    // call your function here, passing in the value if needed
    window.location.href = "/html/movie/movieList.html";
  });
}
