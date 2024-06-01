import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetch("/api/todosOsLivros.json")
      .then((response) => response.json())
      .then((data) => setLivros(data))
      .catch((error) => console.error("Erro ao carregar livros:", error));
  }, []);

  return (
    <main className="principal">
      <h2>Últimos lançamentos</h2>
      {livros.length > 0 ? (
        livros
          .filter((n, index) => index < 6)
          .map((livro) => (
            <div className="card" key={livro.id}>
              <div className="thumb">
                <img
                  src={"/imagens/capas/" + livro.isbn.replace(/-/g, "") + ".jpg"}
                  alt={`Capa do livro ${livro.titulo}`}
                />
              </div>
              <Link to={`/livro/${livro.slug}`}>
                <div className="detalhes">
                  <h3>{livro.titulo}</h3>
                  <p>{livro.descricao.slice(0, 130) + "..."}</p>
                  <p>Leia mais &gt;</p>
                </div>
              </Link>
            </div>
          ))
      ) : (
        <p>Nenhum livro disponível</p>
      )}
    </main>
  );
};

export default Home;
