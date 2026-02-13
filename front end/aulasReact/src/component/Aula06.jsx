import { useState } from "react"
import { estilos } from "../Style/estilos"
import Aula06_Contador from "./Aula06_Contador"
import Aula06_Placar from "./Aula06_placar"
import Aula06_Calculadora from "./Aula06_calculadora"

const Aula06 = () => {
    //declarando uma variavel de estado

    const [nome, setNome] = useState('')

    const [cidade, setcidade] = useState('')

    const [telefone, setTelefone] = useState('')

    const [visivel, setVisivel] = useState(false)

    function botaoLimpar() {
        setNome('')
        setcidade('')
        setTelefone('')
    }

    return (
        <div style={estilos.cardAluno}>
            <h2>Aula 06 - Estado de um componente</h2>
            <h3>o hook useState adiciona estados a componentes funcionais</h3>

            <input type="text" onChange={(event) => setNome(event.target.value)} value={nome} />
            <input type="text" onChange={(event) => setcidade(event.target.value)} value={cidade} />
            <input type="text" onChange={(event) => setTelefone(event.target.value)} value={telefone} />
            <p>ola {nome}</p>
            <p>voce mora em {cidade}</p>
            <p>seu telefone é {telefone}</p>
            <button onClick={botaoLimpar}>Limpar</button>
            <hr />

            <button onClick={() => setVisivel(!visivel)}>
                {visivel == false ? <p>mostrar 👀</p> : <p>ocultar 😶‍🌫️</p>}

            </button>

            {visivel == false ? <p>R$ ***,**</p> : <p>R$ 732,10</p>}
            <hr />

            <Aula06_Contador/>
            <hr />
            <Aula06_Placar/>
            <hr />
            <Aula06_Calculadora/>
        </div>
    )
}

export default Aula06