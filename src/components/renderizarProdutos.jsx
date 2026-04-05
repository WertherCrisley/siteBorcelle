import produtos from '../data/listaProdutos'


function Rendezirarprodutos({ produto, abrirPreview }) {



    return (

        <>
            {/* {produtos.map((produto) => ( */}

            <div key={produto.id} className='container'>

                <div className='imagemProduto'>
                    <img src={produto.imagem} />
                </div>

                <div className='legendaProduto'>
                    <p>{produto.nome}</p>
                    <h3>R$ {produto.preco}</h3>
                </div>

                <div className='pedido'>
                    <button className='comprar' onClick={() => {
                        console.log("clicou")
                        abrirPreview(produto)
                    }} >comprar</button>
                </div>
            </div>
            {/* ))} */}
        </>)


}
export default Rendezirarprodutos