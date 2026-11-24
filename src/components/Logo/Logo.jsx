import './Logo.css';

/**
 * Logomarca da Digital Store (253x44 de referência).
 * variant="white" é usada no rodapé.
 *
 * Observação: é uma logomarca em SVG criada para este projeto. Para usar a
 * arte oficial, troque o conteúdo deste componente por <img src={...}> com
 * os arquivos da pasta src/assets do repositório da Digital College.
 */
export default function Logo({ variant = 'default', width = 253, height = 44 }) {
  const isWhite = variant === 'white';

  return (
    <svg
      className={`logo logo--${variant}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 253 44"
      width={width}
      height={height}
      role="img"
      aria-label="Digital Store"
    >
      <rect x="0" y="2" width="40" height="40" rx="10" className="logo__mark" />
      <path
        d="M13 12h8.5a10 10 0 0 1 0 20H13z"
        fill="none"
        stroke={isWhite ? '#1f1f1f' : '#ffffff'}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <text x="52" y="31" className="logo__text">
        <tspan className="logo__word logo__word--first">Digital</tspan>
        <tspan className="logo__word logo__word--second" dx="6">Store</tspan>
      </text>
    </svg>
  );
}
