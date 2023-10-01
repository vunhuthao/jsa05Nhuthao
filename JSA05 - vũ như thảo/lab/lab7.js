


const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log("data",data);

        for (let i of fetchData.data){
            let userId = document.createElement('h1');
            let title = document.createElement('h1');
            let body = document.createElement('h1');

            userId.textContent = ' ID: ' + data.id.i;
            title.textContent = 'Task Title: ' + data.i.title;
            body.textContent = 'Body: ' + data.i.body;

            const dataElement = document.getElementById('data');

                dataElement.appendChild(userId);
                dataElement.appendChild(title);
                dataElement.appendChild(body);
            
        }
    }
catch (error) {
    console.error('Error:', error);
}
}

fetchData();