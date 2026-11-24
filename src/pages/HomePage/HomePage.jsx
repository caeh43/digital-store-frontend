import Layout from '../Layout/Layout.jsx';
import Gallery from '../../components/Gallery/Gallery.jsx';
import Section from '../../components/Section/Section.jsx';
import ProductListing from '../../components/ProductListing/ProductListing.jsx';
import { handleImageError } from '../../utils/image.js';
import { collections, homeSlides } from '../../data/home.js';
import { featuredProducts } from '../../data/products.js';
import './HomePage.css';

export default function HomePage() {
  return (
    <Layout>
      <Gallery className="home-page__gallery" images={homeSlides} width="1440" height="681" radius="0px" />

      <div className="container">
        <div className="page-section">
          <Section title="Coleções em destaque" titleAlign="center">
            <ul className="home-page__collections">
              {collections.map((collection) => (
                <li key={collection.src}>
                  <img src={collection.src} alt={collection.alt} loading="lazy" onError={handleImageError} />
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <div className="page-section">
          <Section title="Produtos em alta" titleAlign="left" link={{ text: 'Ver todos', href: '/products' }}>
            <ProductListing products={featuredProducts} />
          </Section>
        </div>
      </div>
    </Layout>
  );
}
