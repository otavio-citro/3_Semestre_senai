import { useEffect, useState } from "react"
import { estilos } from "../Style/estilos"
import Aula12_cep from "./Aula12_CEP"
import Aula12_rick from "./Aula12_rick"
import Aula12_store from "./Aula12_store"
import Aula12_disney from "./Aula12_disney"
const Aula12 = () => {
 
    const [imagem, setImagem] = useState('')

    const buscarDados = async () => {
       try {
        
           //no fetch colocamos o endpoint da API
           // http://localhost:3000/usuarios
           const resposta = await fetch('https://dog.ceo/api/breeds/image/random')
           const dados = await resposta.json()
           console.log(dados);
           setImagem(dados.message)
       } catch (error) {
        console.error('erro ao buscar dados', error);
        
       }
        
    }

    useEffect(()=>{
        buscarDados()
    }, [])

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 12 - Consumo de Api</h2>
            <h3>aprendendo a utilizar APIs em React </h3>
            <hr />
            <div>
                <p>imagem de cachorro</p>
                <img src={imagem} width={500} height={300}/>
                <button onClick={buscarDados}>exibir foto</button>
            </div>
            <hr />
            <Aula12_cep/>
            <hr />
            <Aula12_rick/>
            <hr />
            <Aula12_store/>
            <hr />
            <Aula12_disney/>
        </div>
    )
}

export default Aula12