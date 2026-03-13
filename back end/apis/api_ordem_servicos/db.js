import { Pool } from 'pg';
const BD = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'bd_ordem_servicos',
    port: 5432,
    password: 'admin'
})
// const BD = new Pool({
//     user: 'postgres',
//     host: 'db.wymajbhyenwcodclskmg.supabase.co',
//     database: 'postgres',
//     port: 5432,
//     password: 'bancodedadossenai'
// })

const testarConexao = async () => {
    try {
        const cliente = await BD.connect()
        console.log('conexão realizada com sucesso!');
        cliente.release()
        
    } catch (error) {
        console.log('Erro ao conectar ao babco de dados', error.message);
        
    }
}

export {BD, testarConexao};
