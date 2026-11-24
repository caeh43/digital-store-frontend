import { Link } from 'react-router-dom';
import './InfoColumn.css';

function InfoItem({ text, link }) {
  if (!link) return <>{text}</>;
  if (link.startsWith('/')) return <Link to={link}>{text}</Link>;
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
}

/**
 * Coluna de informações do rodapé.
 *
 * title         título da coluna
 * informations  [{ text, link? }] renderizados dinamicamente
 */
export default function InfoColumn({ title, informations = [] }) {
  return (
    <div className="info-column">
      <h3 className="info-column__title">{title}</h3>
      <ul className="info-column__list">
        {informations.map((information) => (
          <li key={`${information.text}-${information.link ?? ''}`}>
            <InfoItem text={information.text} link={information.link} />
          </li>
        ))}
      </ul>
    </div>
  );
}
