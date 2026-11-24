import './ProductDetails.css';

/** Ficha técnica resumida do produto (marca, categoria, gênero, estado). */
export default function ProductDetails({ product }) {
  const details = [
    { label: 'Marca', value: product.brand },
    { label: 'Categoria', value: product.category },
    { label: 'Gênero', value: product.gender },
    { label: 'Estado', value: product.state },
    { label: 'Referência', value: product.reference },
  ];

  return (
    <dl className="product-details">
      {details.map((item) => (
        <div className="product-details__item" key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
