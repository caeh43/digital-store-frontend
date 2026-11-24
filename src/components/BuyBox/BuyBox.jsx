import { StarIcon } from '../Icons/Icons.jsx';
import { formatPrice } from '../../utils/products.js';
import './BuyBox.css';

/**
 * Caixa de compra: nome, referência, avaliação, preços, descrição, opções
 * (children) e botão COMPRAR.
 *
 * onBuy     função chamada ao clicar em COMPRAR
 * feedback  mensagem de status exibida abaixo do botão (opcional)
 */
export default function BuyBox({ name, reference, stars, rating, price, priceDiscount, description, children, onBuy, feedback }) {
  const hasDiscount = priceDiscount !== undefined && priceDiscount !== null;

  return (
    <div className="buy-box">
      <h1 className="buy-box__name">{name}</h1>
      <p className="buy-box__reference">Ref: {reference}</p>

      <div className="buy-box__rating">
        <span className="buy-box__stars">
          <StarIcon size={14} />
          {stars}
        </span>
        <span className="buy-box__reviews">({rating} avaliações)</span>
      </div>

      <p className="buy-box__prices">
        {hasDiscount ? (
          <>
            <span className="buy-box__price buy-box__price--old">{formatPrice(price)}</span>
            <span className="buy-box__price-current">{formatPrice(priceDiscount)}</span>
          </>
        ) : (
          <span className="buy-box__price-current">{formatPrice(price)}</span>
        )}
      </p>

      <div className="buy-box__description">
        <h2 className="buy-box__label">Descrição do produto</h2>
        <p>{description}</p>
      </div>

      {children}

      <button type="button" className="buy-box__buy" onClick={onBuy}>
        COMPRAR
      </button>
      {feedback && (
        <p className="buy-box__feedback" role="status">
          {feedback}
        </p>
      )}
    </div>
  );
}
