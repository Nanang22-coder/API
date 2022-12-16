const buttonSearch = document.querySelector('.search-button');
buttonSearch.addEventListener('click', async function () {
    const inputSearch = document.querySelector('.input-search');
    const tes = inputSearch.value;
    console.log(tes);
    const movies =  await fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=' + tes)
.then(response => response.json())
.then(response => response.Search);
    console.log(movies);
    looping(movies);
});

function dataGet(keyword) {

  }

function showcard(m) {
return `<div class="col-md-4 my-3">
<div class="card" >
<img src="${m.Poster}" class="card-img-top" alt="">
<div class="card-body">
<h5 class="card-title">${m.Title}</h5>
<h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
<a href="#" class="btn btn-primary">show detail</a>
</div></div></div>`
};

function looping(film) {
let cards = '';
    film.forEach(m => cards += showcard(m));
    const containerMovie = document.querySelector('.movie-container');
    containerMovie.innerHTML = cards;
};