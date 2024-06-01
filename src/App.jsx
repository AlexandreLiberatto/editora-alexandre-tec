import { Component } from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Topo from "./components/Topo";
import Home from "./components/Home";
import Frontend from "./components/Frontend";
import Programacao from "./components/Programacao";
import Design from "./components/Design";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
import Rodape from "./components/Rodape";
import Livro from "./components/Livro";
import axios from "axios";
import "./index.css";

class App extends Component {
  state = {
    livros: [],
  };

  async componentDidMount() {
    try {
      const { data: livros } = await axios.get("/api/todosOsLivros.json");
      this.setState({ livros });
    } catch (error) {
      console.log(error);
      document
        .querySelectorAll(".principal span")
        .forEach((span) => (span.textContent = "Mensagem amigável para o usuário"));
    }
  }

  getLivro = (slug) => {
    const livro = this.state.livros.find((livro) => livro.slug === slug);
    return livro;
  };

  render() {
    const { livros } = this.state;

    const LivroWrapper = () => {
      const { slug } = useParams();
      const livro = this.getLivro(slug);
      return livro ? <Livro livro={livro} /> : <NotFound />;
    };

    return (
      <Router>
        <div className="App">
          <Topo />
          <Routes>
            <Route path="/" element={<Home livros={livros} />} />
            <Route path="/frontend" element={<Frontend livros={livros} />} />
            <Route path="/programacao" element={<Programacao livros={livros} />} />
            <Route path="/design" element={<Design livros={livros} />} />
            <Route path="/catalogo" element={<Catalogo livros={livros} />} />
            <Route path="/livro/:slug" element={<LivroWrapper />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Rodape />
        </div>
      </Router>
    );
  }
}

export default App;


/* Substituí Switch por Routes.
Substituí render por element ao definir as rotas.
A rota de NotFound agora usa "*" para capturar todas as rotas não definidas */
