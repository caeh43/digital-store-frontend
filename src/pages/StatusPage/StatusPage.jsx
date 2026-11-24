import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout.jsx';
import './StatusPage.css';

function StatusPage({ title, message }) {
  return (
    <Layout>
      <div className="container status-page">
        <h1 className="status-page__title">{title}</h1>
        <p>{message}</p>
        <Link className="btn" to="/">
          Voltar para a Home
        </Link>
      </div>
    </Layout>
  );
}

/** Páginas fora do escopo desta etapa (login, cadastro, categorias, pedidos, institucionais). */
export function UnderConstructionPage({ title }) {
  return (
    <StatusPage
      title={title}
      message="Esta página está em construção. Ela não faz parte do escopo desta etapa do projeto."
    />
  );
}

export function NotFoundPage() {
  return <StatusPage title="Página não encontrada" message="O endereço acessado não existe nesta loja." />;
}
