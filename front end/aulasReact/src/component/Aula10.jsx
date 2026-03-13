import { useEffect, useState } from "react"
import { estilos } from "../Style/estilos"



const Aula10 = () => {
    const [contador, setContador] = useState(0)

    //o use effect fica monitorando uma variavel e executa a função semrpe q ela sofrer uma alteração
    //esse efeito sera executado sempre q o contador mudar

    useEffect( () => {
        console.log(contador);
        document.title = `contagem: ${contador}`
      
        
    }, [contador] )
    //o useEffect com a chave vazia significa q o efeito deve ser executada apenas quando a pagina é carregada
    useEffect(() => {
        const contadorSalvo = localStorage.getItem('valorContador') || 0;
        setContador(JSON.parse(contadorSalvo))
    }, [])

    function botaoContador() {
        const novoContador = contador + 1
        setContador(novoContador)
          //armazenando lcoalmente nosso contador
        localStorage.setItem('valorContador', JSON.stringify(novoContador))
    }

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 10 - useEffect e localStorage</h2>
            <h3>Conhecendo a Hook useEffect e aprendendo a armazenar dados localmente</h3>
            <hr />


            <p>Você clicou {contador} vezes</p>
            <button onClick={botaoContador} >Clique aqui</button>
        </div>
    )
}


export default Aula10