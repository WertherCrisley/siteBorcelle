//Bibliotecas
import './styles.css'
import './nones.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState, useEffect, useRef } from "react"


//componentes
import Rendezirarprodutos from '../../components/renderizarProdutos'
import Enderecoloja from '../../components/enderecoloja'
import Zap from '../../components/zap'
import Instagram from '../../components/insta'
import Produtos from '../../data/listaProdutos'

//imagens
import logo from '../../assets/logoBorcele.jpg'
import mainimg from '../../assets/mainimg.png'

function Home() {

    // Abrir dropdown atendimento
    const [abrir, setAbrir] = useState(false)
    const ref = useRef()
    useEffect(() => {
        function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setAbrir(false)
            }
        }

        document.addEventListener("mousedown", handleClick)

        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [])

    //abrir carrinho
    const [abrirCarrinho, setAbrirCarrinho] = useState(false);

    //PesquisarProduto
    const [busca, setBusca] = useState("");
    const [filtrados, setFiltrados] = useState(Produtos);

    function pesquisar() {
        const resultado = Produtos.filter(produto =>
            produto.nome.toLowerCase().includes(busca.toLowerCase())

        );

        setFiltrados(resultado);
        setBusca("");
    }
    //Abrir Previw
    const [produtoSelecionado, setProdutoSelecionado] = useState(null)
    const [abrirPreview, setAbrirPreview] = useState(false)


    //quantidade produto no previw
    const [quantidade, setQuantidade] = useState(1)
    //tamaho produto no previw
    const [tamanho, setTamanho] = useState("")
    //armazenar no carrinho
    const [carrinho, setCarrinho] = useState([])

    //calcular total carrinho
    const total = carrinho.reduce((acc, item) => {
        return acc + (item.preco * item.quantidade)
    }, 0)
    return (
        <div>

            <nav>
                <div onClick={pesquisar} className='imagemlogo'><img src={logo} /></div>
                <div className='search'>
                    <input value={busca} onChange={(e) => setBusca(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && pesquisar()} id='searchInput' type="text" placeholder='Olá, pesquise mais itens' />
                    <button onClick={pesquisar} id='searchBtn'><i class="bi bi-search"></i></button>
                </div>

                <div className='botaonav' ref={ref}>

                    <button onClick={() => setAbrir(!abrir)}><i class="bi bi-telephone-fill"></i>  Atendimento</button>
                    {/* 
                    <div className={`clicarAtendimento'${abrir ? "ativo" : ""}`}>
                        <Zap> <button><i class="bi bi-whatsapp"></i> fale Conosco </button>
                        </Zap>

                        <Enderecoloja>
                            <button><i class="bi bi-geo-alt-fill"></i>Endereço loja física</button>
                        </Enderecoloja>
                    </div> */}
                    <div className={`clicarAtendimento ${abrir ? "ativo" : ""}`}>
                        <Zap> <button><i className="bi bi-whatsapp"></i> fale Conosco </button></Zap>

                        <Enderecoloja>
                            <button><i className="bi bi-geo-alt-fill"></i>Endereço loja física</button>
                        </Enderecoloja>
                    </div>
                </div>

                <div className='btncart'> <button onClick={() => setAbrirCarrinho(true)}><i class="bi bi-bag-fill"></i><span>{carrinho.length}</span></button>
                </div>

            </nav>

            {abrirCarrinho && (
                <div className='carrinho'>
                    <div className='filhocarrinho'>
                        <h3>Carrinho de compras</h3>

                        <div className='produtoscart'>
                            {carrinho.map((item, index) => (
                                <div
                                    key={index}
                                    style={{
                                        display: "flex",
                                        borderBottom: "1px solid #ccc",
                                        padding: "10px",
                                        gap: "10px",
                                        alignItems: "center"
                                    }}
                                >

                                    {/* IMAGEM */}
                                    <img
                                        src={item.imagem}
                                        style={{ width: "70px", height: "70px", objectFit: "cover" }}
                                    />

                                    {/* INFO */}
                                    <div style={{ flex: 1 }}>
                                        <p><strong>{item.nome}</strong></p>
                                        <p>Tamanho: {item.tamanho}</p>
                                        <p>Qtd: {item.quantidade}</p>
                                        <p>R$ {item.preco}</p>
                                    </div>

                                    {/* REMOVER */}
                                    <button onClick={() => {
                                        setCarrinho(prev => prev.filter((_, i) => i !== index))
                                    }}>
                                        ❌
                                    </button>

                                </div>
                            ))}
                        </div>

                        <p className='totalprice'>  Total: R$ {total.toFixed(2)}</p>
                        <div className='botaodentrodocart'>
                            <button className='btnfacharcard' onClick={() => setAbrirCarrinho(false)}>Fechar</button>
                            <button className='btfinalizar' onClick={() => {

                                if (carrinho.length === 0) {
                                    alert("Carrinho vazio")
                                    return
                                }

                                const mensagem = carrinho.map(item => {
                                    return ` ${item.nome} 
                                    Tamanho: ${item.tamanho}
                                    Qtd: ${item.quantidade}
                                    Preço: R$ ${item.preco}`
                                }).join("\n\n")

                                const totalMsg = `\n\n Total: R$ ${total.toFixed(2)}`

                                const textoFinal = encodeURIComponent(
                                    `Olá, quero fazer um pedido:\n\n${mensagem}${totalMsg}`
                                )

                                const numero = "5585988800053"

                                window.open(`https://wa.me/${numero}?text=${textoFinal}`, "_blank")

                            }}>Finalizar</button>
                        </div>
                    </div>
                </div>)}

            {/* abrir Preview */}
            {abrirPreview && produtoSelecionado && (
                <div className="selecaoCorTam">

                    <div className="filhoselecaoCorTam">

                        <button
                            className="btnFecharpreviw"
                            onClick={() => setAbrirPreview(false)}
                        >
                            X
                        </button>

                        <img src={produtoSelecionado.imagem} />

                        <h2>{produtoSelecionado.nome}</h2>
                        <h3>R$ {produtoSelecionado.preco}</h3>

                        {/* TAMANHO */}
                        <div className="Tamanho">
                            <label>
                                <input
                                    type="radio"
                                    name="tam"
                                    value="P"
                                    onChange={(e) => setTamanho(e.target.value)}
                                /> P
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="tam"
                                    value="M"
                                    onChange={(e) => setTamanho(e.target.value)}
                                /> M
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="tam"
                                    value="G"
                                    onChange={(e) => setTamanho(e.target.value)}
                                /> G
                            </label>
                        </div>

                        {/* QUANTIDADE */}
                        <div className="Sele">

                            <div className="quantidade">
                                <button onClick={() => setQuantidade(q => Math.max(1, q - 1))}>-</button>
                                <p>{quantidade}</p>
                                <button onClick={() => setQuantidade(q => q + 1)}>+</button>
                            </div>

                            <div className="BTNADD">
                                <button onClick={() => {

                                    if (!tamanho) {
                                        alert("Escolha um tamanho")
                                        return
                                    }

                                    const item = {
                                        ...produtoSelecionado,
                                        quantidade,
                                        tamanho
                                    }

                                    setCarrinho(prev => [...prev, item])

                                    // reset
                                    setQuantidade(1)
                                    setTamanho("")
                                    setAbrirPreview(false)

                                }}>Adicionar</button>
                            </div>

                        </div>

                    </div>
                </div>
            )}

            <main><img src={mainimg} /></main>

            <div className='whatsapMobile'><i class="bi bi-whatsapp"></i></div>

            <div className='opcoes'>
                <Enderecoloja>
                    <div className='icone'>
                        <i class="bi bi-geo-alt-fill"></i>
                        <p>Endereço loja fisica</p>
                        <h6>clique aqui</h6>
                    </div>
                </Enderecoloja>

                <Zap >
                    <div id='sumir600px' className='icone'>
                        <i class="bi bi-whatsapp"></i>
                        <p>Compre Pelo WhatsApp</p>
                        <h6>clique aqui</h6>
                    </div>
                </Zap>

                <Instagram>
                    <div className='icone'>
                        <i class="bi bi-instagram"></i>
                        <p>Nosso Instagram</p>
                        <h6>clique aqui</h6>
                    </div>
                </Instagram>
                <Zap>
                    <div id='sumir' className='icone'>
                        <i class="bi bi-box2-heart"></i>
                        <p>Envios para todo Brasil</p>
                        <h6>Receba em casa</h6>
                    </div>
                </Zap>


            </div>

            <div className='titulo'><h2>Produtos</h2></div>

            <section>
                {filtrados.map((produto) => (
                    <Rendezirarprodutos key={produto.id} produto={produto} abrirPreview={(produto) => {
                        setProdutoSelecionado(produto)
                        setAbrirPreview(true)
                    }} />
                ))}
                {/* exemplo de produto */}
                {/* <div className='container'>
                    <div className='imagemProduto'>
                        <img src={produto1} />
                    </div>

                    <div className='legendaProduto'>
                        <p>Vestido Rosa de Agua</p>
                        <h3>R$349,99</h3>
                    </div>
                    <div className='pedido'>
                        <button className='comprar'>conprar</button>
                        <button className='addCart'><i class="bi bi-cart-plus"></i></button>
                    </div>

                </div> */}
            </section>



            <footer>
                <div><h5>Atendimento</h5>
                    <p><i class="bi bi-telephone"></i>88 8888-8888</p>
                    <Zap><p><i class="bi bi-whatsapp"></i>Fale no WhatsApp</p></Zap>
                    <p><i class="bi bi-envelope-at"></i>borcele@email.com</p>
                </div>
                <div><h5>Formas de pagamento</h5>
                    <p>Pix</p>
                    <p>Cartão Visa</p>
                    <p>Dinheiro Real</p></div>
                <div><h5>Segurança</h5>
                    <p>Todos os direitos reservados - Borcelestory - 2026</p>
                    <p>Borcele Story</p>
                    <p>CNPJ 6474747</p>
                </div>
            </footer>

        </div>
    )




}

export default Home