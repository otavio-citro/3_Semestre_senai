import { estilos } from "../Style/estilos"
import Aula07_Multicomponentes, {MeucomponenteNomeado, endereçoServidor} from "./Aula07_Multicomponentes"
import Aula07_Perfil from "./Aula07_Perfil"
const Aula07 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 07 - Importação e exportação de modulos</h2>
            <h3>compreendendo Importação e exportação padrao ou nomeada </h3>
            <hr />
            <Aula07_Multicomponentes/>
            <MeucomponenteNomeado/>
            <p>{endereçoServidor}</p>
            <hr />
            <Aula07_Perfil/>
        </div>
    )
}



export default Aula07