import { useState } from 'react';
import './FilterGroup.css';

/**
 * Grupo de filtros com checkbox ou radio.
 *
 * title      título do grupo
 * inputType  "checkbox" (padrão) ou "radio"
 * options    [{ text, value? }] - value é opcional; sem ele usa-se o text
 * selected   (opcional) valores selecionados, para uso controlado
 * onChange   (opcional) recebe o array de valores selecionados
 *
 * Sem `selected`, o componente guarda a própria seleção.
 */
export default function FilterGroup({ title, inputType = 'checkbox', options = [], selected, onChange }) {
  const [internalSelected, setInternalSelected] = useState([]);
  const isControlled = Array.isArray(selected);
  const currentValues = isControlled ? selected : internalSelected;
  const type = inputType === 'radio' ? 'radio' : 'checkbox';

  function handleChange(value, checked) {
    let nextValues;
    if (type === 'radio') {
      nextValues = [value];
    } else {
      nextValues = checked ? [...currentValues, value] : currentValues.filter((item) => item !== value);
    }

    if (!isControlled) setInternalSelected(nextValues);
    if (onChange) onChange(nextValues);
  }

  return (
    <fieldset className="filter-group">
      <legend className="filter-group__title">{title}</legend>
      {options.map((option) => {
        const value = option.value ?? option.text;
        return (
          <label className="filter-group__option" key={value}>
            <input
              type={type}
              name={title}
              value={value}
              checked={currentValues.includes(value)}
              onChange={(event) => handleChange(value, event.target.checked)}
            />
            <span>{option.text}</span>
          </label>
        );
      })}
    </fieldset>
  );
}
