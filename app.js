const filmsButton = document.getElementById("films");
const peopleButton = document.getElementById("people");
const gallery = document.getElementById("gallery");

const setActive = activeButton => {
    filmsButton.classList.remove("active");
    peopleButton.classList.remove("active");
    activeButton.classList.add("active");
} 


const fetchData = async (url) => {

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Films data not found");
        }

        const data = await response.json();
        
        gallery.innerHTML = "";

        if (filmsButton.classList.contains("active")) {

            result = data.result;

            result.forEach(item => {

                const card = document.createElement("div");
                card.className = "card";

                const title = document.createElement("h3");
                title.className = "title";
                title.textContent = item.properties.title;

                const description = document.createElement("p");
                description.className = "description";
                description.textContent = item.properties.opening_crawl;

                card.appendChild(title);
                card.appendChild(description);
                gallery.appendChild(card);
            });
        }

        else if (peopleButton.classList.contains("active")) {

            results = data.results;
            

            results.forEach(async item => {
                temp_data = await fetch(item.url);
                temp = await temp_data.json();
                filtered = temp.result.properties;

                const card = document.createElement("div");
                card.className = "card";

                const title = document.createElement("h3");
                title.className = "title";
                title.textContent = filtered.name;

                const description = document.createElement("p");
                description.className = "description";
                description.textContent = filtered.starship_class;

                card.appendChild(title);
                card.appendChild(description);
                gallery.appendChild(card);
            });
        }
        

    } catch(err) {
        console.error(err);
    }

}



filmsButton.addEventListener("click", () => {
    setActive(filmsButton);
    fetchData("https://www.swapi.tech/api/films");
})

peopleButton.addEventListener("click", () => {
    setActive(peopleButton);
    fetchData("https://www.swapi.tech/api/starships");
})
