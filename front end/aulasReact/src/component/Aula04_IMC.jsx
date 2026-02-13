const Aula04_IMC = ({nome, peso, altura, cor}) => {
    // let nome = 'mauricio'
    // let peso = 70
    // let altura = 1.70
    let imc = peso / (altura ** 2)
    
    return (
        <div>
           <h3 style={{color:cor}}>calculadora de IMC</h3> 
           <p>ola {nome}  </p>
           <p>altura: {altura}cm  </p>
           <p>peso: {peso}kg  </p>
           <p>imc: {imc.toFixed(1)}kg/m²  </p>
        </div>
    )
}

export default Aula04_IMC