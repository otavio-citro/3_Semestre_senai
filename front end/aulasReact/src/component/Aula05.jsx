import Aula05_ex from './Aula05_exercicio';

const Aula05 = () => {
    function botaoClique() {
        alert('Você clicou no botão')

    }

    const botaoDuplo = () => alert('duplo clique')

    function entradaMouse(event) {
        console.log('mouse entrou');
        event.target.style.color = 'rgb(97, 119, 241)'

    }
    function saidaMouse(event) {
        console.log('mouse saiu');
        event.target.style.color = 'rgb(255, 0, 0)'

    }
    function alterarCor(event) {
        if (event.key == "a") {
            event.target.style.color = 'rgb(44, 0, 240)'
            console.log("a");
            
        } else if (event.key == "v") {
            event.target.style.color = 'rgb(17, 255, 0)'
        } else if (event.key == "c") {
            event.target.style.color = 'rgb(126, 126, 126)'
        } else if (event.key == "r") {
            event.target.style.color = 'rgb(137, 0, 116)'
        }

    }


    return (
        <div >
            <h2>Aula 05 - Eventos de um componente</h2>
            <h3>Os eventos são fundamentais para criar interatividade em aplicações web</h3>
            <hr />


            <p>Evento onClick - clique do usuário em qualquer elemento</p>
            <button onClick={botaoClique}>Clique aqui</button>
            <p onDoubleClick={() => alert('duplo clique')}>Este paragrafo recebe um duplo clique</p>


            <hr />

            <p>Evento onChance - sempre que um campo de entrada é alterado</p>


            <input onChange={() => console.log(event.target.value)} type="text" placeholder='Digite algo...' />

            <select onChange={() => console.log(event.target.value)}>
                <option value="1A">1° A EM</option>
                <option value="2A">2° A EM</option>
                <option value="3A">3° A EM</option>
                <option value="3B">3° B EM</option>
            </select>

            <hr />

            <p>Evento onMouseEnter / onMouseLeave</p>
            <p onMouseEnter={entradaMouse} onMouseLeave={saidaMouse}>passe o mouse aqui</p>

            <hr />

            <p>Evento onKeyDown - Aciona em evento quando pressiona uma tecla</p>
            <input type="text" onKeyDown={(event) => alert(event.key)} />
            <input type="text" onKeyDown={alterarCor} placeholder='a - azul, v - verde, c - cinza, r - roxo' />
            <hr />

            <Aula05_ex/>

        </div>
    )
}




export default Aula05