import { useState } from "react"


const Aula06_Contador = () =>{
    const [Contador, setContador] = useState(0)
    
    function botaoDiminuir() {
        
        if (Contador > 0) {
            setContador(Contador - 1)
        }

      
    
    }

    return (
        <div>
            <h2>Contador: {Contador}</h2>
            <button onClick={() => setContador(Contador + 1)}>Aumentar</button>
            <button onClick={botaoDiminuir}>Diminuir</button>
        </div>
    )
}

export default Aula06_Contador