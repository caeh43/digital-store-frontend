import { Link } from 'react-router-dom';
import './Section.css';

function SectionLink({ link }) {
  const isInternal = link.href.startsWith('/');

  return isInternal ? (
    <Link className="section__link" to={link.href}>
      {link.text}
    </Link>
  ) : (
    <a className="section__link" href={link.href} target="_blank" rel="noopener noreferrer">
      {link.text}
    </a>
  );
}

/**
 * Seção com título (à esquerda ou centralizado), link opcional à direita e
 * conteúdo livre em children.
 *
 * link: { text: string, href: string }
 */
export default function Section({ title, titleAlign = 'left', link, children }) {
  const alignment = titleAlign === 'center' ? 'center' : 'left';

  return (
    <section className={`section section--${alignment}`}>
      <header className="section__header">
        {alignment === 'center' && <span className="section__spacer" aria-hidden="true" />}
        <h2 className="section__title">{title}</h2>
        {link && <SectionLink link={link} />}
      </header>
      {children}
    </section>
  );
}
