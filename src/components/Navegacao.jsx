import { NavLink } from "react-router-dom";

const linkCorrente = {
  color: "#027399",
};

const Navegacao = () => {
  return (
    <ul>
      <li>
        <NavLink to="/" exact="true" style={({ isActive }) => (isActive ? linkCorrente : undefined)}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/frontend" style={({ isActive }) => (isActive ? linkCorrente : undefined)}>
          Frontend
        </NavLink>
      </li>
      <li>
        <NavLink to="/programacao" style={({ isActive }) => (isActive ? linkCorrente : undefined)}>
          Programação
        </NavLink>
      </li>
      <li>
        <NavLink to="/design" style={({ isActive }) => (isActive ? linkCorrente : undefined)}>
          Design
        </NavLink>
      </li>
      <li>
        <NavLink to="/catalogo" style={({ isActive }) => (isActive ? linkCorrente : undefined)}>
          Catálogo
        </NavLink>
      </li>
    </ul>
  );
};

export default Navegacao;
