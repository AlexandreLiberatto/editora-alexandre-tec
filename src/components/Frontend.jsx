import { Link } from "react-router-dom";

const Frontend = ({ livros }) => (
  <main className="principal">
    <h2>Categoria Frontend</h2>
    {livros
      .filter((cat) => cat.categoria === "frontend")
      .map((livro) => (
        <div className="card" key={livro.id}>
          <div className="thumb">
            <img
              src={"/imagens/capas/" + livro.id + ".jpg"}
              alt="Thumbnail da capa do livro ..."
            />
          </div>
          <div className="detalhes">
            <h3>{livro.titulo}</h3>
            <p>{livro.descricao.slice(0, 130) + "..."}</p>
            <p>Leia mais &gt;</p>
            <Link to={`/livro/${livro.slug}`}>Ver detalhes</Link>
          </div>
        </div>
      ))}
  </main>
);

export default Frontend;

