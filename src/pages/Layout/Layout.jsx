import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './Layout.css';

/** Estrutura comum a todas as páginas: cabeçalho, conteúdo (children) e rodapé. */
export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main">{children}</main>
      <Footer />
    </div>
  );
}
