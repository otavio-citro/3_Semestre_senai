import { useEffect, useState } from "react"
import Aula09_Nome from "./Aula09_Nome"
import { estilos } from "../Style/estilos"
import { entradaMouse, saidaMouse } from "./exportacao"



const Aula09_ListaNome = () => {
    const [listaPresenca, setListaPresenca] = useState([])
    const [nome, setNome] = useState("")

    useEffect(() => {
            const ListaSalvo = localStorage.getItem('valorlista') || "[]";
            setListaPresenca(JSON.parse(ListaSalvo))
        }, [])

    function botaoExcluir(nm) {
        const novasPresencas = listaPresenca.filter((nome) => nome != nm)
        setListaPresenca(novasPresencas)
        localStorage.setItem('valorlista', JSON.stringify(novasPresencas))
    }

    function AdicionarBotao() {

        localStorage.setItem('valorlista', JSON.stringify([...listaPresenca, nome ]))
        setListaPresenca([...listaPresenca, nome])
        setNome("")

    }

    function botaoLimpar() {
        localStorage.removeItem('valorlista')
        setListaPresenca([])
        setNome("")
    }

 
    return (
        <div style={estilos.loginConteudo}>
            <h1>Lista de Presença do Churrasco</h1>
            <div>
            <input type="text" name="" id="" placeholder="digite um nome e oq deve levar" style={estilos.input09} onChange={(event) => setNome(event.target.value)} value={nome} />
            <button onClick={AdicionarBotao} style={estilos.button09} onMouseEnter={entradaMouse} onMouseLeave={saidaMouse}>adicionar</button>

            </div>
           <div style={estilos.card09}>
            {
                listaPresenca.map((nome, index) => (
                    <Aula09_Nome key={index} nome={nome} excluir={() => botaoExcluir(nome)} />
                ))
            } 
           </div>
            <button onClick={botaoLimpar} style={estilos.button09} onMouseEnter={entradaMouse} onMouseLeave={saidaMouse}>Limpar</button>
        </div>

    )

}


export default Aula09_ListaNome