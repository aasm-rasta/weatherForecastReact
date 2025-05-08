import './TempoInfo.css'


//ponho os {} para que ele possa pegar somente o que tem dentro de tempo
function TempoInfo({ tempo }) {
    // condição criada para o erro de quebra de imagem antes de digitar uma cidade
    if (!tempo.name) return null
    console.log(tempo)

    return (
        <div className='tempo-container'>
            {/*to indo dentro de tempo e pegando somente o nome e mostrando na tela*/}
            <h2>{tempo.name}</h2>
            <div className='tempo-info'>
                {/*puxando a imagem de acordo com a cidade que é digitado*/}
                <img src={`https://openweathermap.org/img/wn/${tempo.weather?.[0]?.icon}@2x.png`} />
                {/*puxando a temperatura, math serve pra arredondar*/}
                <p className='temperatura'>{Math.round(tempo.main.temp)}°C</p>
            </div>
            <p className='descricao'>{tempo.weather[0].description}</p>
            <div className='detalhes'>
                <p>Sensação térmica: {Math.round(tempo.main.feels_like)}°C</p>
                <p>Umidade: {tempo.main.humidity}%</p>
                <p>Pressão: {tempo.main.pressure}</p>
            </div>

        </div>
    )

}

export default TempoInfo