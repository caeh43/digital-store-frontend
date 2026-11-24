import { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '../Icons/Icons.jsx';
import { handleImageError } from '../../utils/image.js';
import './Gallery.css';

const toCssSize = (value) => (/^\d+(\.\d+)?$/.test(String(value)) ? `${value}px` : String(value));

/**
 * Galeria de imagens com setas, miniaturas opcionais e destaque da miniatura
 * selecionada.
 *
 * className   classe extra no elemento raiz
 * width       largura máxima do slide (ex.: "1440" ou "700px")
 * height      altura de referência do slide; define a proporção (ex.: "681")
 * radius      arredondamento das bordas (ex.: "4px")
 * showThumbs  quando presente, exibe miniaturas (117x95) abaixo do slide
 * images      [{ src, alt? }]
 */
export default function Gallery({ className = '', width = 700, height = 450, radius = '0px', showThumbs = false, images = [] }) {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;

  const lastIndex = images.length - 1;
  const index = Math.min(current, lastIndex);
  const ratio = `${parseFloat(width)} / ${parseFloat(height)}`;

  return (
    <div className={`gallery ${className}`.trim()} style={{ maxWidth: toCssSize(width) }}>
      <div
        className="gallery__viewport"
        style={{ aspectRatio: ratio, borderRadius: radius }}
        role="group"
        aria-roledescription="carrossel"
        aria-label="Galeria de imagens"
      >
        <div className="gallery__track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((image, imageIndex) => (
            <div
              className="gallery__slide"
              key={`${image.src}-${imageIndex}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`Imagem ${imageIndex + 1} de ${images.length}`}
              aria-hidden={imageIndex !== index}
            >
              <img src={image.src} alt={image.alt ?? `Imagem ${imageIndex + 1}`} onError={handleImageError} />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="gallery__arrow gallery__arrow--left"
          onClick={() => setCurrent(index - 1)}
          disabled={index === 0}
          aria-label="Imagem anterior"
        >
          <ArrowLeftIcon size={28} />
        </button>
        <button
          type="button"
          className="gallery__arrow gallery__arrow--right"
          onClick={() => setCurrent(index + 1)}
          disabled={index === lastIndex}
          aria-label="Próxima imagem"
        >
          <ArrowRightIcon size={28} />
        </button>
      </div>

      {showThumbs && (
        <ul className="gallery__thumbs">
          {images.map((image, imageIndex) => (
            <li key={`${image.src}-${imageIndex}`}>
              <button
                type="button"
                className={`gallery__thumb${imageIndex === index ? ' gallery__thumb--selected' : ''}`}
                style={{ borderRadius: radius }}
                onClick={() => setCurrent(imageIndex)}
                aria-label={`Mostrar imagem ${imageIndex + 1}`}
                aria-current={imageIndex === index}
              >
                <img src={image.src} alt="" onError={handleImageError} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
