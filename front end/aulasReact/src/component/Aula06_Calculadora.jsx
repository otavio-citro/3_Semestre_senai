import { useState } from "react"


const Aula06_Calculadora = () =>{
    const [nmr1, setnmr1] = useState(0)
    const [nmr2, setnmr2] = useState(0)
    const [operador, setOperador] = useState('')
    const [resultado, setResultado] = useState(0)
    
    function Operador(params) {
        if (operador == "+") {
            setnmr1(nmr1 + nmr2)
        } else if (operador == '-'){
            setnmr1(nmr1 - nmr2)
        }else if (operador == '*'){
            
        }
    }
    
    return (
        <div>
            <h2>Calculadora</h2>
            <input type="text" />
            <select name="" id="">
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="**">**</option>
            </select>
        </div>
    )
}

export default Aula06_Calculadora