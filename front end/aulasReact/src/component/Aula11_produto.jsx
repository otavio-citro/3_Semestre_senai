import Aula11_produto from "./Aula11_CadastroProdutos"

const Aula11_card = ({ produto }) => {
    return (
        <div style={estilos.cardProduto}>
           <img src={produto.linkImagem} alt="" style={estilos.produtoImagem} />
            <h2 style={estilos.titulo}>{produto.listaNome}</h2>
            <p style={estilos.preco}>R$ {Number(produto.listaPreco).toFixed(2)}</p>
            <p>{produto.categoria}</p>
            {/* {produto.frete == true ? <p>frete Gratis</p>: null} */}
            {produto.frete == true && <p>frete Gratis</p>}
            <a href={produto.linkProduto} style={estilos.botao}>ver produto</a>
        </div>
    )
}

const estilos = {
    cardProduto: {
        border: "1px solid #ccc",
        padding: 10,
        width: 250
    },


    produtoImagem: {
        height: 150,
        width: "100%",
        objectFit: "contain"
    },


    titulo: {
        fontSize: 14,
        color: "#333",
        textAlign: "center"
    },


    preco: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#e30613"
    },


    botao: {
        display: "inline-block",
        background: "#e30613",
        color: "white",
        textDecoration: "none",
        padding: "8px 12px",
        borderRadius: 5,
        marginTop: 10,
        fontWeight: "bold"
    },


    freteGratis: {
        fontWeight: "bold"
    }
};
export default Aula11_card