import { useState } from "react"
import { estilos } from "../Style/estilos"

const Aula12_rick = () => {
    const [id, setId] = useState('')
    const [name, setname] = useState('')
    const [status, setstatus] = useState('')
    const [species, setspecies] = useState('')
    const [gender, setgender] = useState('')
    
    const buscar = async() => {
        try {
            const buscas = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const dados = await buscas.json() 
            setname(dados.name)
            setstatus(dados.status)
            setspecies(dados.species)
            setgender(dados.gender)

        } catch (error) {
            console.error('erro ao buscar dados', error);
        }
    }



    return (    
        <div style={estilos.cardAula}>
            <h2>Buscar personagem de rick and morty</h2>
            <input type="number" name="" id="" placeholder="exemplo: 1" onChange={(event) => setId(event.target.value)} value={id} />
            <button onClick={buscar}>buscar</button>
            <p>nome:{name}</p>
            <p>status:{status}</p>
            <p>espécie:{species}</p>
            <p>Estado:{gender}</p>
        </div>
    )
}

export default Aula12_rick