const buttonSearch = document.querySelector('.search-button');
buttonSearch.addEventListener("click", function() { 
  const inputSearch =document.querySelector('.input-search');
  fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=' + inputSearch.value)
.then(response => response.json())
.then(response => {
  const movies = response.Search;
  console.log(movies);
  let cards = "";
  movies.forEach(m => cards += `<div class="col-md-4 my-3"><div class="card" >
<img src="${m.Poster}" class="card-img-top" alt=""><div class="card-body">
<h5 class="card-title">${m.Title}</h5>
<h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6> <a href="#" class="btn btn-primary">show detail</a>
</div></div></div>`)
const container = document.querySelector('.movie-container');
container.innerHTML = cards;

})
  
  
})