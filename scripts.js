const KEY = 'c4cd1c21b93c9234b83093f45bd8d710'

function outputData(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Previsão para " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${KEY}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    outputData(dados)
}

function cliqueBotao() {
    const cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)
}