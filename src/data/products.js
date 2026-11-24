import { publicAsset } from '../utils/image.js';

/*
 * Catálogo local de demonstração. As imagens seguem os nomes citados na
 * documentação oficial (product-thumb-N.jpeg e product-image-N.jpeg), que devem
 * estar na pasta public/. Se algum arquivo não existir, a interface mostra uma
 * imagem neutra no lugar.
 */

const productImages = [1, 2, 3, 4].map((number) => ({
  src: publicAsset(`product-image-${number}.jpeg`),
  alt: `Foto ${number} do produto`,
}));

export const sizes = ['39', '40', '41', '42', '43'];
export const colors = ['#E2E3FF', '#FFE8BC', '#FFC0BC', '#DEC699', '#E8DFCF'];

const longDescription =
  'Tênis com cabedal respirável, solado de borracha antiderrapante e entressola macia para amortecer o impacto. ' +
  'Ideal para o dia a dia, com ajuste firme e acabamento reforçado. Texto de demonstração para o projeto.';

function createProduct(id, data) {
  return {
    id,
    reference: `38416${String(700 + id)}`,
    image: publicAsset(`product-thumb-${id}.jpeg`),
    images: productImages,
    sizes,
    colors,
    description: longDescription,
    ...data,
  };
}

export const products = [
  createProduct(1, { name: 'Tênis Nike Air Zoom Pegasus', brand: 'Nike', category: 'Corrida', gender: 'Masculino', state: 'Novo', price: 649.9, priceDiscount: 499.9, stars: 4.8, rating: 124 }),
  createProduct(2, { name: 'Tênis Adidas Ultraboost Light', brand: 'Adidas', category: 'Corrida', gender: 'Feminino', state: 'Novo', price: 899.9, stars: 4.9, rating: 98 }),
  createProduct(3, { name: 'Tênis Puma Suede Classic', brand: 'Puma', category: 'Casual', gender: 'Unisex', state: 'Novo', price: 399.9, priceDiscount: 319.9, stars: 4.5, rating: 210 }),
  createProduct(4, { name: 'Tênis K-Swiss Classic VN', brand: 'K-Swiss', category: 'Casual', gender: 'Masculino', state: 'Usado', price: 299.9, priceDiscount: 199.9, stars: 4.2, rating: 56 }),
  createProduct(5, { name: 'Tênis Nike Air Max 90', brand: 'Nike', category: 'Casual', gender: 'Unisex', state: 'Novo', price: 799.9, stars: 4.7, rating: 340 }),
  createProduct(6, { name: 'Tênis Adidas Duramo SL', brand: 'Adidas', category: 'Esporte e lazer', gender: 'Masculino', state: 'Novo', price: 349.9, priceDiscount: 279.9, stars: 4.4, rating: 87 }),
  createProduct(7, { name: 'Tênis Puma RS-X Feminino', brand: 'Puma', category: 'Esporte e lazer', gender: 'Feminino', state: 'Novo', price: 549.9, stars: 4.6, rating: 73 }),
  createProduct(8, { name: 'Tênis K-Swiss Tubes Sport', brand: 'K-Swiss', category: 'Esporte e lazer', gender: 'Unisex', state: 'Usado', price: 259.9, stars: 4.1, rating: 31 }),
  createProduct(9, { name: 'Tênis Nike Revolution 6', brand: 'Nike', category: 'Corrida', gender: 'Feminino', state: 'Novo', price: 329.9, priceDiscount: 249.9, stars: 4.3, rating: 152 }),
  createProduct(10, { name: 'Bota Adidas Terrex Utilitária', brand: 'Adidas', category: 'Utilitário', gender: 'Masculino', state: 'Novo', price: 699.9, stars: 4.6, rating: 64 }),
  createProduct(11, { name: 'Tênis Puma Carina Street', brand: 'Puma', category: 'Casual', gender: 'Feminino', state: 'Usado', price: 219.9, stars: 4.0, rating: 22 }),
  createProduct(12, { name: 'Tênis Nike Court Vision', brand: 'Nike', category: 'Utilitário', gender: 'Unisex', state: 'Usado', price: 399.9, priceDiscount: 299.9, stars: 4.4, rating: 45 }),
];

/** Produtos exibidos em "Produtos em alta" na Home (8 itens). */
export const featuredProducts = products.slice(0, 8);
