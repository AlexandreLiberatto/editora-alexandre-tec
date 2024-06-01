import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topo from "./components/Topo";
import Home from "./components/Home";
import Frontend from "./components/Frontend";
import Programacao from "./components/Programacao";
import Design from "./components/Design";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
import Rodape from "./components/Rodape";
import "./index.css";
import Livro from "./components/Livro";
import axios from "axios";

class App extends Component {
  state = {
    livros: []
  };

  async componentDidMount() {
    try {
      const { data: livros } = await axios.get("/api/todosOsLivros.json");
      this.setState({ livros });
    } catch (error) {
      console.log(error);
      document
      .querySelectorAll(".principal")[0]
      .insertAdjacentHTML(
        "beforeend",
        "<p class='erro'>Mensagem de erro</p>"
      );
    }
  }

  render() {
    return (
      <Router>
        <Topo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/programacao" element={<Programacao />} />
          <Route path="/design" element={<Design />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Rodape />
      </Router>
    );
  }
}

export default App;


/* Substituí Switch por Routes.
Substituí render por element ao definir as rotas.
A rota de NotFound agora usa "*" para capturar todas as rotas não definidas */