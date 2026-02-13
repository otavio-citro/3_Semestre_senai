import Aula01 from "./component/Aula01";
import Aula02 from "./component/Aula02";
import Aula03 from "./component/Aula03";
import Aula04 from "./component/Aula04";
import Aula05 from "./component/Aula05";
import Cabecalho from "./component/Cabecalho";
import { estilos } from "./Style/estilos";


const App = () => {
  return (
    <div style={estilos.fundo}>
      <Cabecalho aula="react"/>
      <main style={estilos.conteudo}>
        <h2>Aulas</h2>
        <div style={estilos.lista_aulas}>
          {/* aqui incluiremos todos os componentes de aula */}
          <Aula01/>
          <Aula02/>
          <Aula03/>
          <Aula04/>
          <Aula05/>
        </div>
      </main>

    </div>
  )
}

export default App;