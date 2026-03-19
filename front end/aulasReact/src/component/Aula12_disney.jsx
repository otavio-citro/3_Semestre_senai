import { useState } from "react"
import { estilos } from "../Style/estilos"

const Aula12_disney = () => {
    const [id, setId] = useState('')
    const [films, setfilms] = useState('')
    const [tvShows, settvShows] = useState('')
    const [videoGames, setvideoGames] = useState('')
    const [imageUrl, setimageUrl] = useState('')

    const buscar = async () => {
        try {
            const buscas = await fetch(`https://api.disneyapi.dev/character/${id}`)
            const dados = await buscas.json()
            setfilms(dados.data.films)
            settvShows(dados.data.tvShows)
            setvideoGames(dados.data.videoGames)
            setimageUrl(dados.data.imageUrl)

        } catch (error) {
            console.error('erro ao buscar dados', error);
        }
    }



    return (
        <div style={estilos.cardAula}>
            <h2>Buscar personagens disney</h2>
            <input type="number" films="" id="" placeholder="exemplo: 112" onChange={(event) => setId(event.target.value)} value={id} />
            <button onClick={buscar}>buscar</button>
            <p>filmes:{films}</p>
            <p>tvShows:{tvShows}</p>
            <p>videoGames:{videoGames}</p>
            <img src={imageUrl} width={300} />
        </div>
    )
}

export default Aula12_disney