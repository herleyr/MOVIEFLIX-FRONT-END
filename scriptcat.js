document.addEventListener("DOMContentLoaded", async function () {
    const categoryContainer = document.getElementById("categorycontainer");

    async function fetchCategory() {
        try {
            const res = await fetch("http://localhost:3000/category/");
            const categories = await res.json();

            displayCategory(categories);
        } catch (error) {
            console.log("Erro ao buscar categorias: ", error.message);
        }
    }

    function displayCategory(categories) {
        categoryContainer.innerHTML = ""; // Limpa o conteúdo existente

        categories.forEach((category) => {
            const categoryCard = document.createElement("div");
            categoryCard.classList.add("col");

            categoryCard.innerHTML = `
                        <div class="card d-flex flex-column" style="height: 200px;">
                        <div class="card-body p-0">
                        <h5 class="card-title m-0 p-1 text-center">${category.name}</h5>
                        
                         </div>
                        <div class="card-footer text-muted text-end">${category.description}</div>




                    </div>
                </div>
            `;

            categoryContainer.appendChild(categoryCard);
        });
    }

    await fetchCategory();
});