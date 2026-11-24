import { useState } from 'react';
import './ProductOptions.css';

/**
 * Seletor de variações do produto (tamanhos, cores).
 *
 * options   ["39", "41", ...] ou ["#000", "#111", ...]
 * shape     "square" (padrão) ou "circle"
 * radius    border-radius dos itens quando shape="square"
 * type      "text" (exibe o valor) ou "color" (usa o valor como cor de fundo)
 * value     (opcional) opção selecionada, para uso controlado
 * onChange  (opcional) recebe a opção escolhida
 * label     texto de acessibilidade para o grupo
 */
export default function ProductOptions({
  options = [],
  radius = '4px',
  shape = 'square',
  type = 'text',
  value,
  onChange,
  label = 'Opções do produto',
}) {
  const [internalValue, setInternalValue] = useState(null);
  const isControlled = value !== undefined;
  const selected = isControlled ? value : internalValue;
  const isCircle = shape === 'circle';
  const isColor = type === 'color';

  function select(option) {
    if (!isControlled) setInternalValue(option);
    if (onChange) onChange(option);
  }

  return (
    <div className="product-options" role="radiogroup" aria-label={label}>
      {options.map((option) => {
        const isSelected = selected === option;
        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={isSelected}
            aria-label={isColor ? `Cor ${option}` : option}
            className={[
              'product-options__item',
              isCircle ? 'product-options__item--circle' : 'product-options__item--square',
              isSelected ? 'product-options__item--selected' : '',
            ].join(' ')}
            style={{
              ...(isCircle ? {} : { borderRadius: radius }),
              ...(isColor ? { backgroundColor: option } : {}),
            }}
            onClick={() => select(option)}
          >
            {isColor ? null : option}
          </button>
        );
      })}
    </div>
  );
}
