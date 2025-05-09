import './TempoInfo5D.css'


//ponho os {} para que ele possa pegar somente o que tem dentro de tempo
function TempoInfo5D({ tempo5D }) {
    // condição criada para o erro de quebra de imagem antes de digitar uma cidade
    //if (!tempo5D.name) return null
    console.log(tempo5D)

    let previsoesDiarias = {}

    for(let forecast of tempo5D.list){
        //pegando a data e criando posições de um array
        const date = new Date(forecast.dt * 1000).toLocaleDateString()
        
        if(!previsoesDiarias[date]){
           previsoesDiarias[date] = forecast
        }
    }

    const next5DaysForecast = Object.values(previsoesDiarias).slice(0,6)
    
    function convertDate(date){
       const newDate = new Date(date.dt *1000).toLocaleDateString('pt-BR', {weekday:'long',day:'2-digit'})
       return newDate
    }

    return (
        <div className='weather-container'>
            <h3>Previsão Próximos 5 Dias</h3>
            <div className='weather-list'>
                {next5DaysForecast.map(forecast => (
                    <div key={forecast.dt} className='weather-item'>
                        <p className='forecast-day'>{convertDate(forecast)}</p>
                        <img src={`https://openweathermap.org/img/wn/${forecast.weather?.[0]?.icon}@2x.png`}/>
                        <p className='forecast-description'>{forecast.weather[0].description}</p>
                        <p>{Math.round(forecast.main.temp_min)} ºC Min / {Math.round(forecast.main.temp_max)} °C Max</p>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default TempoInfo5D 