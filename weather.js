
const input = document.querySelector("#input");
const button = document.querySelector("button");
const div = document.querySelector("#weather-output");

button.addEventListener("click", async function () {
    const city = input.value; 
    const apiKey = "40f08c5cf09a4e68a77211342241908";
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
      
    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log(data);

        div.innerHTML = `
            <h2>Weather in ${data.location.name}</h2>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Condition: ${data.current.condition.text}</p>
            <p>Wind Speed: ${data.current.wind_kph} kph</p>
        `;
    } catch (error) {
        console.error('Error:', error);
        outputDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
    
});
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
         button.click();
    }
});