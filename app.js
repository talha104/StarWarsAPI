const fetchData = async () => {

    try {

        const response = await fetch("https://www.swapi.tech/api/films");

        if (!response.ok) {
            throw new Error("Films data not found");
        }

        const data = await response.json();
        result = data.result;

        
        const gallery = document.getElementById("gallery");


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
        })
        
        

    } catch(err) {
        console.error(err);
    }

}

fetchData();