import './TempoInfo5D.css'


//ponho os {} para que ele possa pegar somente o que tem dentro de tempo
function TempoInfo5D({ tempo5D }) {
    // condição criada para o erro de quebra de imagem antes de digitar uma cidade
    //if (!tempo5D.name) return null
    console.log(tempo5D)

    let previsoesDiarias = {

    }

    for(let forecast of tempo5D.list){
        const date = new Date(forecast.dt * 1000).toLocaleDateString()
        if(!previsoesDiarias[date]){
           previsoesDiarias[date] = forecast
        }
    }

    const nextFiveDays = Object.values(previsoesDiarias).slice(1,6)


    return (
        <div className='tempo-container'>
            <p>5 dias</p>
            <div>
                
            </div>
        </div>
    )

}

export default TempoInfo5D 