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
            <Aula07_Perfil foto={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCEgWVVJ0Q0Ow4rj-gbyRQSThtTjEcdbYl1rOEmVWkd5x40eu3YqeZ5uibwQv1QqZ3s1e8XZtNLwmd9fOJOP2r8r_17oR1nyOWkboQdyg&s=10'} nome={'douglas'}/>
        </div>
    )
}



export default Aula07