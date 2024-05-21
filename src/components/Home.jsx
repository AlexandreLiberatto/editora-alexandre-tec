

const Home = () => {
  return (
    <>
    <h2>Últimos laçamentos</h2>
    <div className="card">
      <div className="thumb">
        <img src="/imagens/capas/9788575228142.jpg" alt="Imagem" />
      </div>
      <div className="detalhes">
        <h3>Padrões para kubernetes</h3>
        <p>O modo como os...</p>
        <a href="#">Leia mais &gt;</a>
      </div>
    </div>

    <div className="card">
      <div className="thumb">
        <img src="/imagens/capas/9788575228074.jpg" alt="Imagem" />
      </div>
      <div className="detalhes">
        <h3>Introdução ao Pentest - 2º Edição</h3>
        <p>Introdução ao pentest...</p>
        <a href="#">Leia mais &gt;</a>
      </div>
    </div>
    </>
  )
}

export default Home