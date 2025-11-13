const fetchData = async () => {

    try {

        const response = await fetch("https://www.swapi.tech/api/films");

        if (!response.ok) {
            throw new Error("Films data not found");
        }

        const data = await response.json();
        result = data.result;

        
        const gallery = document.getElementById("gallery");
        
        const card = document.createElement("div");
        card.className = "card";

        const title = document.createElement("h3");
        title.className = "title";
        title.textContent = result[0].properties.title;

        const description = document.createElement("p");
        description.className = "description";
        description.textContent = result[0].properties.opening_crawl;

        card.appendChild(title);
        card.appendChild(description);
        gallery.appendChild(card);

    } catch(err) {
        console.error(err);
    }

}

fetchData();