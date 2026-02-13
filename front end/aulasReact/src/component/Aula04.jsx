import { estilos } from "../Style/estilos"
import Aula04_IMC from "./Aula04_IMC"
import Aula04_filmes from "./Aulas04_Filmes"
const Aula04 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 04 - Props</h2>
            <p>crianção de componentes reutilizaveis e suas estilizações</p>
            <hr />
            <Aula04_IMC nome='jorge' peso={80} altura={1.80} cor="red"/>
            <Aula04_IMC nome='jorginho' peso={85} altura={1.80} cor='blue'/>
            <Aula04_IMC nome='arroz' peso={89} altura={1.80} cor='pink'/>
            <hr />
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 20}}>
            <Aula04_filmes img='https://jpimg.com.br/uploads/2017/04/1096038412-stranger-things.jpg' nome='Stranger Things' genero='ficção cientifica'/>
            <Aula04_filmes img='https://jpimg.com.br/uploads/2017/04/1096038412-stranger-things.jpg' nome='Stranger Things' genero='ficção cientifica'/>
            <Aula04_filmes img='https://jpimg.com.br/uploads/2017/04/1096038412-stranger-things.jpg' nome='Stranger Things' genero='ficção cientifica'/>
            <Aula04_filmes img='https://upload.wikimedia.org/wikipedia/pt/5/5f/Tf2_standalonebox.jpg' nome='Team fortress' genero='first person shotter teamwork based game free'/>

            </div>
            
        </div>
    )
}

export default Aula04