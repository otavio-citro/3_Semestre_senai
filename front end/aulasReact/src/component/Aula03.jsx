// importando um arquivo css tradicional
import '../Style/Aula03.css'
import { estilos } from '../Style/estilos'
import Aula03_Login from './Aulas03_login'

const Aula03 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 03 - Componentes e estilização</h2>
            <h3>Criação de componentes reutilizáveis e seus estilizações</h3>
            <p>Aprendendo a criar e re9utilizar componentes e estilizações para melhorar a UI</p>

            <hr />
            <p className='texto'>css externo</p>
            <p className='descricao'>A forma mais simples e classica de estilização CSS</p>

            <hr />

            <p style={{ color:'blue', fontWeight: 'bold' }}>estilização inline</p>
           <p style={{fontStyle: 'italic'}}>
             estilos aplicados diretamente nos elementos como objetos
             </p> 

             <hr />
             <p style={estilos.tituloModulo}>Css modules</p>
             <p style={estilos.descricaoModulo}>CSS modularizado é a forma mais comum para mobile</p>

             <hr />
             <Aula03_Login/>
        </div>
    )
}



export default Aula03