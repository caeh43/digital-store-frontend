const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export function formatPrice(value) {
  return currencyFormatter.format(value);
}

/** Minúsculas e sem acentos, para busca tolerante ("tenis" encontra "Tênis"). */
export function normalizeText(text) {
  return String(text ?? '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim();
}

/** Preço efetivamente cobrado (com desconto, quando existir). */
export function getFinalPrice(product) {
  return product.priceDiscount ?? product.price;
}

function matchesGroup(selectedValues, productValue) {
  return selectedValues.length === 0 || selectedValues.includes(productValue);
}

/**
 * Filtra produtos. Dentro de um grupo as opções são combinadas com OU;
 * entre grupos diferentes, com E.
 */
export function filterProducts(products, { term = '', brands = [], categories = [], genders = [], states = [] } = {}) {
  const normalizedTerm = normalizeText(term);

  return products.filter((product) => {
    const searchable = normalizeText(`${product.name} ${product.brand} ${product.category}`);
    return (
      (normalizedTerm === '' || searchable.includes(normalizedTerm)) &&
      matchesGroup(brands, product.brand) &&
      matchesGroup(categories, product.category) &&
      matchesGroup(genders, product.gender) &&
      matchesGroup(states, product.state)
    );
  });
}

/** order: 'asc' (menor preço), 'desc' (maior preço) ou qualquer outro valor para manter a ordem. */
export function sortProducts(products, order) {
  if (order !== 'asc' && order !== 'desc') return products;
  const direction = order === 'asc' ? 1 : -1;
  return [...products].sort((a, b) => (getFinalPrice(a) - getFinalPrice(b)) * direction);
}

export function findProductById(products, id) {
  return products.find((product) => String(product.id) === String(id));
}

/** Recomendados: mesma categoria e marca primeiro; completa com os demais. */
export function getRecommendedProducts(products, productId, limit = 4) {
  const current = findProductById(products, productId);
  return products
    .filter((product) => String(product.id) !== String(productId))
    .map((product, index) => ({
      product,
      index,
      score: current ? (product.category === current.category ? 2 : 0) + (product.brand === current.brand ? 1 : 0) : 0,
    }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit)
    .map(({ product }) => product);
}
