// ==============================
// 🌱 Sélection des éléments
// ==============================
const movieSearchInput = document.querySelector(`.movie-search-input`);
const searchButton = document.querySelector(`.search-button`);

const displayedMoviesContainer = document.querySelector(`.displayed-films-container`);

// ==============================
// 🎊 Fonctionnalités
// ==============================
async function getMovies(movieSearch) {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6631e5f1dc96088e0d26b86da29b5b6a&query=${movieSearch}&include_adult=false&language=fr-FR&page=1`);
  
      const data = await response.json();
      console.log(data);
  
      return data.results;
      
        
    } catch (error) {
      console.error("Erreur :", error);
    }
  }
  
async function displayMovies(movieSearch) {
    const moviesList = await getMovies(movieSearch);
    displayedMoviesContainer.innerHTML = ``;

    moviesList.forEach(movie => {
        displayedMoviesContainer.innerHTML += `
          <div class="swiper-slide">
            <h2>${movie.title}</h2>
            <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
          </div>`;
      });

      swiper.update();

}

// getMovies(`Bonjour`)
// displayMovies(`Hello`);


// ==============================
// 🧲 Événements
// ==============================
searchButton.addEventListener('click', function(e) { 
    e.preventDefault();
  
    displayMovies(movieSearchInput.value);
  });



//   Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    mousewheel: true,
    spaceBetween: 10,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    breakpoints: {
    "@0.00": {
        slidesPerView: 1,
        spaceBetween: 0,
    },
    "@0.75": {
        slidesPerView: 3,
        spaceBetween: 0,
    },
    "@1.00": {
        slidesPerView: 4,
        spaceBetween: 0,
    },
    "@1.50": {
        slidesPerView: 6,
        spaceBetween: 0,
    },
    },
});