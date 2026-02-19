import { estilos } from "../Style/estilos"
const Aula07_Multicomponentes = () => {
    return (
        <div style={estilos.cardAula}>
          <p>meu componente padrão</p>
        <MeucomponenteNomeado/>
            
        </div>
    )
}

export const MeucomponenteNomeado = () => {
    return (
        <p>Meu componente nomeado 1</p>
    )
}

export const MeucomponenteNomeado2 = () => {
    return (
        <p>Meu componente nomeado 2</p>
    )
}

export const endereçoServidor = "locarlhost"

//exportando componentes e variaveis nomeadas
// export {MeucomponenteNomeado2, MeucomponenteNomeado, endereçoServidor }
//exportando componente padrão "principal"
export default Aula07_Multicomponentes