import ProductCard from '../ProductCard/ProductCard.jsx';
import './ProductListing.css';

/**
 * Renderiza uma lista de produtos em grade usando ProductCard.
 * products: [{ id?, name, image, price, priceDiscount? }]
 */
export default function ProductListing({ products = [] }) {
  return (
    <ul className="product-listing">
      {products.map((product) => (
        <li key={product.id ?? product.name}>
          <ProductCard
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            priceDiscount={product.priceDiscount}
          />
        </li>
      ))}
    </ul>
  );
}
