import { estilos } from "../Style/estilos"
import { entradaMouse, saidaMouse } from "./exportacao"

const Aula09_Nome = ({ nome, index, excluir }) => {
    


    return (
        <div style={estilos.cardAula09}>
            <p style={{display: 'flex', alignItems: "center"}}>{nome}</p>
            <button onClick={excluir} style={estilos.button09} onMouseEnter={entradaMouse} onMouseLeave={saidaMouse}>Excluir</button>
        </div>

    )

}


export default Aula09_Nome