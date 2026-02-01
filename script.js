// Simulate SQL data retrieval by fetching from a JSON file (in a real app, this would be an API call to a SQL database)
fetch('models.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('models-container');
        data.forEach(model => {
            const modelDiv = document.createElement('div');
            modelDiv.className = 'model animate__animated animate__fadeInUp';
            modelDiv.innerHTML = `
                <h2>${model.name}</h2>
                <img src="${model.image}" alt="${model.name}" />
                <table>
                    <tr><th>Spec</th><th>Detail</th></tr>
                    <tr><td>Engine</td><td>${model.engine}</td></tr>
                    <tr><td>Horsepower</td><td>${model.horsepower}</td></tr>
                    <tr><td>Torque</td><td>${model.torque}</td></tr>
                    <tr><td>0-60 mph</td><td>${model.zeroToSixty}</td></tr>
                    <tr><td>Top Speed</td><td>${model.topSpeed}</td></tr>
                    <tr><td>Transmission</td><td>${model.transmission}</td></tr>
                    <tr><td>Drivetrain</td><td>${model.drivetrain}</td></tr>
                    <tr><td>Price (Starting)</td><td>${model.price}</td></tr>
                </table>
            `;
            container.appendChild(modelDiv);
        });
    })
    .catch(error => console.error('Error loading models:', error));
