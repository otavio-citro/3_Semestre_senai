import { useEffect, useState } from "react"
import { estilos } from "../Style/estilos"
import Aula11_card from "./Aula11_produto"


const Aula11_produto = () => {
     const [listaNome, setListaNome] = useState('')
    const [listaPreco, setListaPreco] = useState(0)
    const [linkImagem, setLinkImagem] = useState('')
    const [linkProduto, setLinkProduto] = useState('')
    const [frete, setFrete] = useState(false)
    const [categoria, setCategoria] = useState('')
    const [listaProdutos, setListasProdutos] = useState([
            {
                listaNome: "hotwheels",
                listaPreco: 20,
                linkProduto: 'https://www.amazon.com.br/Wheels-Pacote-Sortidos-Mattel-Multicor/dp/B000GKUEVE/ref=asc_df_B000GKUEVE?mcid=5561f6baf995397ca8184ceeb5140c5d&tag=googleshopp00-20&linkCode=df0&hvadid=709869765588&hvpos=&hvnetw=g&hvrand=8773269160838097691&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9100681&hvtargid=pla-521568263950&psc=1&language=pt_BR&gad_source=4',
                linkImagem: "https://m.media-amazon.com/images/I/81GMRnT1SsL._AC_SY300_SX300_QL70_ML2_.jpg",
                categoria: "eletronicos",
                frete: true
            },
            {
                listaNome: "Monitor Gamer Ultra Flick, 27 Pol, Quad HD, IPS, 180Hz, 0.5ms, 112% sRGB, FreeSync/G-Sync, HDMI/DP, DXMOPRO270",
                listaPreco: 1176.46,
                linkProduto: 'https://www.terabyteshop.com.br/produto/36475/monitor-gamer-duex-pro-ultra-flick-27-pol-quad-hd-ips-180hz-05ms-112-srgb-freesyncg-sync-hdmidp-dxmopro270',
                linkImagem: "https://img.terabyteshop.com.br/produto/g/monitor-gamer-duex-pro-ultra-flick-27-pol-quad-hd-ips-180hz-05ms-112-srgb-freesyncg-sync-hdmidp-dxmopro270_262869.jpg",
                categoria: "eletronicos",
                frete: false
            }
    ])
   
        function adicionar() {
            const novoProduto = {
                    listaNome: listaNome,
                    listaPreco: listaPreco,
                    linkProduto: linkProduto,
                    linkImagem: linkImagem,
                    categoria: categoria,
                    frete: frete
                }
                const novoListadeProdutos = [...listaProdutos, novoProduto ]
                setListasProdutos(novoListadeProdutos)
                localStorage.setItem('vetorListaProdutos', JSON.stringify(novoListadeProdutos))
                setListaNome('')
                setListaPreco(0)
                setLinkImagem('')
                setLinkProduto('')
                setCategoria('')
                setFrete(false)
            }
            useEffect(() => {
                const listaSalva = localStorage.getItem('vetorListaProdutos') || '[]'
                setListasProdutos(JSON.parse(listaSalva))
            },[])
            return (
        <div>
            <h1>Cadastro de produtos</h1>
            <div style={{ display: "flex" , flexDirection:'column', gap:10}}>
                <input type="text" placeholder="Nome" onChange={(event) => setListaNome(event.target.value)} value={listaNome} />
                <input type="number" placeholder="preco" onChange={(event) => setListaPreco(event.target.value)} value={listaPreco} />
                <input type="text" placeholder="link de imagem" onChange={(event) => setLinkImagem(event.target.value)} value={linkImagem} />
                <input type="text" placeholder="link do produto" onChange={(event) => setLinkProduto(event.target.value)} value={linkProduto} />
                <select name="" id="" onChange={(event) => setCategoria(event.target.value)} value={categoria}>
                    <option value="">selecione uma categoria</option>
                    <option value="Eletronicos">eletronicos</option>
                    <option value="brinquedos">brinquedos</option>
                    <option value="monitores">monitores</option>
                </select>
                <label >
                <input type="checkbox" onChange={(event) => setFrete(event.target.value)} checked={frete} />
                    frete gratis
                    </label>
                <button onClick={adicionar}>Adicionar produto</button>
                <hr />
                <div style={{display: "flex", gap: 10 , flexWrap: "wrap"}}>
                    {
                        listaProdutos.map((produto, pos) => (
                             <Aula11_card key={pos} produto={produto}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Aula11_produto
