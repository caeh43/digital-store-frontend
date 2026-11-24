import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Logo from '../Logo/Logo.jsx';
import { CartIcon, CloseIcon, MenuIcon, SearchIcon } from '../Icons/Icons.jsx';
import { mainNavigation } from '../../data/navigation.js';
import './Header.css';

const LISTING_PATHS = ['/products', '/produtos'];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const isListingPage = LISTING_PATHS.includes(location.pathname);
  const filterParam = searchParams.get('filter') ?? '';

  // Mantém o campo de busca coerente com a URL e fecha o menu ao navegar.
  useEffect(() => {
    setSearchTerm(isListingPage ? filterParam : '');
    setMenuOpen(false);
  }, [location.pathname, isListingPage, filterParam]);

  function handleSearch(event) {
    event.preventDefault();
    const term = searchTerm.trim();
    navigate(term ? `/products?filter=${encodeURIComponent(term)}` : '/products');
    setMenuOpen(false);
  }

  function getNavLinkClass(item, isActive) {
    // "Produtos" também fica ativo na página de um produto.
    const active = isActive || (item.to === '/products' && location.pathname.startsWith('/product/'));
    return `header__nav-link${active ? ' header__nav-link--active' : ''}`;
  }

  return (
    <header className="header">
      <div className="container header__top">
        <button
          type="button"
          className="header__menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
        </button>

        <Link to="/" className="header__logo" aria-label="Digital Store - página inicial">
          <Logo />
        </Link>

        <form className="header__search" role="search" onSubmit={handleSearch}>
          <label className="visually-hidden" htmlFor="header-search">
            Pesquisar produto
          </label>
          <input
            id="header-search"
            type="search"
            placeholder="Pesquisar produto..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button type="submit" className="header__search-button" aria-label="Pesquisar">
            <SearchIcon size={24} />
          </button>
        </form>

        <div className="header__actions">
          <Link to="/cadastro" className="header__signup">
            Cadastre-se
          </Link>
          <Link to="/login" className="header__login">
            Entrar
          </Link>
          <span className="header__cart" role="img" aria-label="Carrinho de compras">
            <CartIcon size={28} />
          </span>
        </div>
      </div>

      <nav
        id="main-navigation"
        className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}
        aria-label="Navegação principal"
      >
        <ul className="container header__nav-list">
          {mainNavigation.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.end} className={({ isActive }) => getNavLinkClass(item, isActive)}>
                {item.text}
              </NavLink>
            </li>
          ))}
          <li className="header__nav-auth">
            <Link to="/cadastro" className="header__nav-link">
              Cadastre-se
            </Link>
          </li>
          <li className="header__nav-auth">
            <Link to="/login" className="header__nav-link">
              Entrar
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
