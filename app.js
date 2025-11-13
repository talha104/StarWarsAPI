const fetchData = async () => {

    try {

        const response = await fetch("https://www.swapi.tech/api/films");

        if (!response.ok) {
            throw new Error("Films data not found");
        }

        const data = await response.json();
        console.log(data);

    } catch(err) {
        console.error(err);
    }

}

fetchData();