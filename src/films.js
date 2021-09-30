// https://lemoncode.net/lemoncode-blog/2017/6/22/javascript-es6-no-mas-bucles-for

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(pelicula => {
    return pelicula.director
  });
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(pelicula => pelicula.director == director);
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  //Buscar totes les pelicules del Director X
  let peliculasDirector = array.filter(pelicula => pelicula.director == director);

  //Buscar la grandaria:
  let qDirector = peliculasDirector.length;

  //Buscar el sumaroi del score de les pelicules seleccionades
  let sumatori = peliculasDirector.reduce((total, pelicula) => total + pelicula.score, 0);

  //Buscar la mitja
  let result = Math.round((sumatori/qDirector)*100)/100;
  
  console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let arraynew = [...array]; // Operador spread (de propagación) en Javascript ES6
   let result = arraynew.sort(function (a, b) {
     const titleA = a.title;
     const titleB = b.title;
     if (titleA < titleB) {
       return -1;
     }
     if (titleA > titleB) {
       return 1;
     }
     return 0;
  });
  result = result.map(pelicula => {
    return pelicula.title
  });
  if (result.length > 20) {
    result.length = 20;
  }

  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let arraynew = [...array]; // Operador spread (de propagación) en Javascript ES6
  let result = arraynew.sort(function (a, b) {
    const yearA = a.year;
    const yearB = b.year;
    if (yearA < yearB) {
      return -1;
    }
    if (yearA > yearB) {
      return 1;
    }
    if (yearA == yearB) { //En este caso ordenar por titulo
      const titleA = a.title;
      const titleB = b.title;
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      } return 0;
    }
  });
  console.log("EXERCICE 5 ->", result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, categoria) {
  //Buscar un listado de las peliculas deseadas:
  let moviesSameCategory = array.filter(movieSameCategory => ((movieSameCategory.genre == categoria) && (movieSameCategory.score!=="")) );
  

  //Buscar la cantidad de peliculas deseadas:
  let qMoviesSameCategory = moviesSameCategory.length;

  //Buscar el sumatorio de valoración
  let sumatorio = moviesSameCategory.reduce((total, movie) => total + movie.score, 0);

  //Buscar la valoración de la categoria:
  let result = Math.round((sumatorio/qMoviesSameCategory)*100)/100;
  
  console.log(moviesSameCategory);
  console.log(sumatorio);
  console.log("EXERCICE 6 ->", result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
