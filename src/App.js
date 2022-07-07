import Contacto from "./pages/Contacto";
import Herramientas from "./pages/Herramientas";
import Introduccion from "./pages/Introduccion";
import Nav from "./pages/Nav";
import Portafolio from "./pages/Portafolio";
import Proyectos from "./pages/Proyectos";










function App() {


  return (<>
    <Portafolio />
    <Nav />
    <Introduccion />
    <Proyectos />
    <Herramientas id='tres' />
    <Contacto />
  </>
  );
}

export default App;
