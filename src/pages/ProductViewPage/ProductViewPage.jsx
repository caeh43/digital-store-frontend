import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../Layout/Layout.jsx';
import Gallery from '../../components/Gallery/Gallery.jsx';
import BuyBox from '../../components/BuyBox/BuyBox.jsx';
import ProductOptions from '../../components/ProductOptions/ProductOptions.jsx';
import ProductDetails from '../../components/ProductDetails/ProductDetails.jsx';
import Section from '../../components/Section/Section.jsx';
import ProductListing from '../../components/ProductListing/ProductListing.jsx';
import { products } from '../../data/products.js';
import { findProductById, getRecommendedProducts } from '../../utils/products.js';
import './ProductViewPage.css';

function ProductView({ product }) {
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [feedback, setFeedback] = useState('');

  const recommended = getRecommendedProducts(products, product.id, 4);

  function handleBuy() {
    if (!size) {
      setFeedback('Selecione um tamanho para continuar.');
    } else if (!color) {
      setFeedback('Selecione uma cor para continuar.');
    } else {
      setFeedback(
        `Seleção registrada: tamanho ${size}. A compra não está disponível nesta versão de demonstração.`,
      );
    }
  }

  return (
    <div className="container product-page">
      <nav className="product-page__breadcrumb" aria-label="Você está em">
        <Link to="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link to="/products">Produtos</Link>
        <span aria-hidden="true">/</span>
        <Link to={`/products?filter=${encodeURIComponent(product.category)}`}>{product.category}</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{product.name}</span>
      </nav>

      <div className="product-page__main">
        <Gallery
          className="product-page__gallery"
          images={product.images}
          width="700"
          height="570"
          radius="4px"
          showThumbs
        />

        <BuyBox
          name={product.name}
          reference={product.reference}
          stars={product.stars}
          rating={product.rating}
          price={product.price}
          priceDiscount={product.priceDiscount}
          description={product.description}
          onBuy={handleBuy}
          feedback={feedback}
        >
          <div>
            <p className="buy-box__section-label">Tamanho</p>
            <ProductOptions
              options={product.sizes}
              shape="square"
              radius="4px"
              type="text"
              value={size}
              onChange={setSize}
              label="Tamanhos disponíveis"
            />
          </div>
          <div>
            <p className="buy-box__section-label">Cor</p>
            <ProductOptions
              options={product.colors}
              shape="circle"
              type="color"
              value={color}
              onChange={setColor}
              label="Cores disponíveis"
            />
          </div>
        </BuyBox>
      </div>

      <div className="page-section">
        <ProductDetails product={product} />
      </div>

      <div className="page-section">
        <Section title="Produtos recomendados" titleAlign="left" link={{ text: 'Ver todos', href: '/products' }}>
          <ProductListing products={recommended} />
        </Section>
      </div>
    </div>
  );
}

export default function ProductViewPage() {
  const { id } = useParams();
  const product = findProductById(products, id);

  return (
    <Layout>
      {product ? (
        // key reinicia seleção e galeria ao navegar entre produtos.
        <ProductView key={product.id} product={product} />
      ) : (
        <div className="container page-section product-page__not-found" role="status">
          <h1>Produto não encontrado</h1>
          <p>O produto que você procura não existe ou foi removido.</p>
          <Link className="btn" to="/products">
            Ver todos os produtos
          </Link>
        </div>
      )}
    </Layout>
  );
}
