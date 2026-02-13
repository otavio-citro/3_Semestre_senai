import logoReact from '../assets/react.svg'
import '../Style/Cabecalho.css'
const Cabecalho  = ( {aula} ) => {
    return (
        <header className='cabecalho'> 
            <img src={logoReact} alt="" />
            <div>
                <h1>SENAI - Desenvolvimento de Sitemas</h1>
                <p>aulas de front end</p>
            </div>
            <img src="https://d2k0cnxtow3qpj.cloudfront.net/arqs/sesisp/ups/SESI-SENAI-COR-sp-preto-1-.png" alt="" />
        </header>
    )
}

export default Cabecalho