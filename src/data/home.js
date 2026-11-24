import { publicAsset } from '../utils/image.js';

/* Imagens da galeria principal (1440x681), conforme a pasta public oficial. */
export const homeSlides = [1, 2, 3, 4].map((number) => ({
  src: publicAsset(`home-slide-${number}.jpeg`),
  alt: `Destaque ${number} da Digital Store`,
}));

/* Coleções em destaque. */
export const collections = [1, 2, 3].map((number) => ({
  src: publicAsset(`collection-${number}.png`),
  alt: `Coleção em destaque ${number}`,
}));
