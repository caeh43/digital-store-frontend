import { Link } from 'react-router-dom';
import { handleImageError } from '../../utils/image.js';
import { formatPrice } from '../../utils/products.js';
import './ProductCard.css';

/**
 * Cartão de produto: imagem (referência 292x321), nome, preço e, quando
 * existir, preço com desconto. Com `id`, o cartão leva à página do produto.
 */
export default function ProductCard({ id, name, image, imagem, price, priceDiscount }) {
  const hasDiscount = priceDiscount !== undefined && priceDiscount !== null;

  const content = (
    <>
      <div className="product-card__image">
        <img src={image ?? imagem} alt={name} loading="lazy" onError={handleImageError} />
      </div>
      <h3 className="product-card__name">{name}</h3>
      <p className="product-card__prices">
        <span className={hasDiscount ? 'product-card__price product-card__price--old' : 'product-card__price'}>
          {formatPrice(price)}
        </span>
        {hasDiscount && <span className="product-card__price">{formatPrice(priceDiscount)}</span>}
      </p>
    </>
  );

  if (id === undefined || id === null) {
    return <article className="product-card">{content}</article>;
  }

  return (
    <Link className="product-card" to={`/product/${id}`}>
      {content}
    </Link>
  );
}
