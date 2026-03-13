import { useState } from "react"
import { estilos } from "../Style/estilos"



const Aula07_Perfil = ({ foto, nome }) => {
    return (
        <div style={estilao.fundo}>
            <Imagem foto={foto} />
            <InfoUsuario nome={nome} />
            <BotaoSeguir />

        </div>
    )
}


export const Imagem = ({ foto }) => {
    return (
        <img src={foto} alt="" style={estilao.imagem} />
    )
}

export const InfoUsuario = ({ nome }) => {
    return (
        <p style={estilao.h2}>{nome}</p>
    )
}
export const BotaoSeguir = () => {
    const [visivel, setVisivel] = useState(false)

    return (
        <button onClick={() => setVisivel(!visivel)} style={{
            ...estilao.botao,
            backgroundColor: visivel ? '#ff0000' : '#3cff00'
        }}>
            {visivel == false ? <p>seguir</p> : <p>deixar de seguir</p>}
        </button>
    )
}
/** @type {{ [key: string]: import('react').CSSProperties }} */

const estilao = {
    imagem: {
        borderRadius: 50,
       
        width: 70,
        height: 70
    },
    fundo: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        width: '150px',
        boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
        textAlign: 'center',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        border: '1px solid #fff'


    },
    botao: {

        borderRadius: 5,
        border: 'none',
        minWidth: 50,
        minHeight: 25,
        boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
        color: '#fff',
        padding: 3
    },
    h2: {
        fontSize: 15,


    }

}


export default Aula07_Perfil