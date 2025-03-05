const apiKey = "85d4d539ee193c3d8dd1d30350b60740";

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Digite o nome de uma cidade!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      document.getElementById("weatherResult").innerHTML =
        "Cidade não encontrada.";
      return;
    }

    document.getElementById("weatherResult").innerHTML = `
            <p><strong>${data.name}, ${data.sys.country}</strong></p>
            <p>Temperatura: ${data.main.temp}°C</p>
            <p>Clima: ${data.weather[0].description}</p>
            <p>Umidade: ${data.main.humidity}%</p>
            <p>Vento: ${data.wind.speed} m/s</p>
        `;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML =
      "Erro ao buscar a previsão.";
  }
}
