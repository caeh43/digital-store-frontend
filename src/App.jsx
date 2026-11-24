import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import ProductListingPage from './pages/ProductListingPage/ProductListingPage.jsx';
import ProductViewPage from './pages/ProductViewPage/ProductViewPage.jsx';
import { NotFoundPage, UnderConstructionPage } from './pages/StatusPage/StatusPage.jsx';
import { underConstructionPages } from './data/navigation.js';

/** Ao trocar de página, volta ao topo. */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/** /produtos é aceito por compatibilidade com a documentação e leva a /products. */
function RedirectToProducts() {
  const { search } = useLocation();
  return <Navigate to={`/products${search}`} replace />;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/produtos" element={<RedirectToProducts />} />
        <Route path="/product/:id" element={<ProductViewPage />} />
        {Object.entries(underConstructionPages).map(([path, title]) => (
          <Route key={path} path={path} element={<UnderConstructionPage title={title} />} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
