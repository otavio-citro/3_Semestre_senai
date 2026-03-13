import { estilos } from "../Style/estilos"
import imagem from "../assets/otebinho123.png"
const Aula08 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 08 - revisao</h2>
            <h3>revisao de conteudo com o jogo numero secreto </h3>
            <a href="https://jogo-numero-secreto-coral-two.vercel.app/" target="_blank">
            <img src={imagem} style={{width:'100%'}} />
            Link do joguinho q demorou 3 horas ou mais para realizar
            </a>

            
        </div>
    )
}


export default Aula08