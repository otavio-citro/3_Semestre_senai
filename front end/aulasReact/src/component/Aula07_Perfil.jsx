import { useState } from "react"
import { estilos } from "../Style/estilos"



const Aula07_Perfil = () => {
    return (
        <div style={estilao.fundo}>
            <Imagem />
            <InfoUsuario />
            <BotaoSeguir />

        </div>
    )
}


export const Imagem = () => {
    return (
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCEgWVVJ0Q0Ow4rj-gbyRQSThtTjEcdbYl1rOEmVWkd5x40eu3YqeZ5uibwQv1QqZ3s1e8XZtNLwmd9fOJOP2r8r_17oR1nyOWkboQdyg&s=10" alt="" style={estilao.imagem}/>
    )
}

export const InfoUsuario = () => {
    return (
        <p>cleiton</p>
    )
}
export const BotaoSeguir = () => {
    const [visivel, setVisivel] = useState(false)

    return (
        <button onClick={() => setVisivel(!visivel)}>
            {visivel == false ? <p>seguir</p> : <p>deixar de seguir</p>}
        </button>
    )
}
/** @type {{ [key: string]: import('react').CSSProperties }} */

const estilao = {
    imagem: {
        borderRadius: 50,
        height: 50,
        width:50
    },
    fundo: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        width: '100px',
        boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
        textAlign: 'center'
    }
}


export default Aula07_Perfil