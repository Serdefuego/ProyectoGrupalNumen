import'./Navbar.css'

function Navbar() {
  return (
    <div>
      <p className="textoenvios">
        ¡Envios gratis a partir de $30.000!
      </p>
      <nav className="navbar">
      <div className="logo">
        <a href="#"> <img src="./src/assets/gamland.png" alt="Logo de la tienda" /></a>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Buscar productos" />
        <button>Buscar</button>
      </div>
      <div className="user-actions">
        <a href="#">Iniciar Sesión</a>
        <a href="#">Mi Carrito</a>
      </div>
    </nav>
    <div>
        <ul className="categorias">
          <li><a href="#" className="categoria">Armá tu Pc</a></li>
          <li><a href="#" className="categoria">PC Armadas</a></li>
          <li><a href="#" className="categoria">Hardware</a></li>
          <li><a href="#" className="categoria">Periféricos</a></li>
          <li><a href="#" className="categoria">Ver todo</a></li>
        </ul>
      </div>
    </div> 
  );
}

export default Navbar;
