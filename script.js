document.addEventListener("DOMContentLoaded", function () {
    const moviesContainer = document.getElementById("movies-container");
    const categoryContainer = document.getElementById("category-container");
  
        
    async function fecthMovies() {
      try {
        const res = await fetch("http://localhost:3000/movies");
        const movies = await res.json();
  
        displayMovies(movies);
      } catch (error) {
        console.log("Erro ao buscar filmes: ", error.message);
      }
    }

    async function fecthCategory() {
      try {
        const res = await fetch("http://localhost:3000/category");
        const category = await res.json();
  
        displayCategory(Category);
      } catch (error) {
        console.log("Erro ao buscar categoria: ", error.message);
      }
    }
  
    function displayMovies(movies) {
      moviesContainer.innerHTML = "";
  
      movies.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("col");
  
        movieCard.innerHTML = `
    <div class="card d-flex flex-column" style="height: 200px;">
        <div class="card-body p-0">
            <h5 class="card-title m-0 p-1">${movie.title}</h5>
            <p class="card-text mt-2 p-1">${movie.description}</p>
        </div>
        <div class="card-footer text-muted text-end">${
            movie.release_date ?? "01/01/2024"
        }</div>
    </div>
`;
  
        moviesContainer.appendChild(movieCard);
      });
    }
  
    function displayCategory(category) {
      moviesContainer.innerHTML = "";
  
      category.forEach((category) => {
        const categoryCard = document.createElement("div");
        categoryCard.classList.add("col");
  
        categoryCard.innerHTML = `
          <div class="card" style="height: 226px;">
              <div class="card-body p-0">
                  <h5 class="card-title m-0 p-1">${category.category_name}</h5>
                  <small class="p-1">${category.category_id}</small>
                  <p class="card-text mt-2 p-1">${category.category_description}</p>
               </div>
          </div> 
        `;
  
        categoryContainer.appendChild(categoryCard);
      });
    }


    fecthMovies();
    fecthCategory();

    

  });