const fetchData = async () => {
    try {
        const response = await fetch('https://picsum.photos/v2/list');
        const data = await response.json();
        console.log(data);

        for (let i of fetchData.data){

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.setAttribute("src", i.url)
    imgContainer.appendChild(image)
    //card.appendChild(imgContainer) 
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

fetchData();


