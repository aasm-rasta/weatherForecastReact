//useRef é usado para criar uma referencia
import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import TempoInfo from './components/TempoInfo/TempoInfo'
import TempoInfo5D from './components/TempoInfo5D/TempoInfo5D'

function App() {

  //puxando o hook useState()
  //tempo= a const em sí, setTempo= será o novo valor "setado"
  const [tempo, setTempo] = useState()

  const [tempo5D, setTempo5D] = useState()
  //puxando o hook useRef()
  const inputRef = useRef()
  // função que após o Onclique do button vai ser chamada 
  async function buscarCidade(){
    console.log(inputRef.current.value)

    //const city vai pegar a cidade que digitarem
    const city = inputRef.current.value

    //Const key serve para pegar minha key dentro da apiKeys no OpenWeath
    const key = "31b4440b240beb79914b3c93366259c5"

    //Foi pega dentro da "Api by city name" 
    //usei as crases p/ por variaveis 
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    //const que receberá api de 5 dias
    const url5Dias = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    //axios ajuda ao acesso das informações na api
    //preciso que o js espere a resposta da chamada externa voltar por isso ponho await,função assicrona
    const apiInfo = await axios.get(url) 

    //ajudando ao acesso a api de 5dias
    const apiInfo5Dias = await axios.get(url5Dias)

    setTempo5D(apiInfo5Dias.data)
    setTempo(apiInfo.data)
  }

  return (
    <>
      <div className='container'>
        <h1>Previsão do Tempo</h1>
        {/* dentro do input to fazendo a referencia com o hook useRef()*/}
        <input ref={inputRef} type="text" placeholder='Digite o nome da cidade'/>
        <button onClick={buscarCidade}>Buscar</button>
        {/* condicao criada para caso nao tenha nada ainda escrito*/}
        {tempo && <TempoInfo tempo={tempo}/>}
        {tempo5D && <TempoInfo5D tempo5D={tempo5D}/>}
      </div>      
    </>
  )
}

export default App
