import { estilos } from "../Style/estilos"
import Aula11_produto from "./Aula11_CadastroProdutos"
const Aula11 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 11 - cadastro de produtos</h2>
            <h3>criando uma lista de produtos e armazenando os dados localmente </h3>
            <hr />
            <Aula11_produto/>
        </div>
    )
}

export default Aula11