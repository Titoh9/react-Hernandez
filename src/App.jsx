import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        {/* Catálogo completo */}
        <Route
          path="/"
          element={<ItemListContainer greeting="¡Bienvenido a la tienda!" />}
        />

        {/* Catálogo filtrado por categoría */}
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer />}
        />

        {        /* Detalle de producto */}
        <Route
          path="/item/:productId"
          element={<ItemDetailContainer />}
        />

        {/* Página 404 */}
        <Route
          path="*"
          element={<h2 className="text-center mt-5">404 - Página no encontrada</h2>}
        />
      </Routes>
    </>
  );
}

export default App;
