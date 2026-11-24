export const mainNavigation = [
  { text: 'Home', to: '/', end: true },
  { text: 'Produtos', to: '/products' },
  { text: 'Categorias', to: '/categorias' },
  { text: 'Meus Pedidos', to: '/meus-pedidos' },
];

export const footerColumns = [
  {
    title: 'Informação',
    informations: [
      { text: 'Sobre Drip Store', link: '/about' },
      { text: 'Segurança', link: '/security' },
      { text: 'Wishlist', link: '/wishlist' },
      { text: 'Blog', link: '/blog' },
      { text: 'Trabalhe conosco', link: '/careers' },
      { text: 'Meus Pedidos', link: '/meus-pedidos' },
    ],
  },
  {
    title: 'Categorias',
    informations: [
      { text: 'Camisetas', link: '/categorias' },
      { text: 'Calças', link: '/categorias' },
      { text: 'Bonés', link: '/categorias' },
      { text: 'Headphones', link: '/categorias' },
      { text: 'Tênis', link: '/products?filter=tenis' },
    ],
  },
  {
    title: 'Contato',
    informations: [
      { text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161' },
      { text: '(85) 3051-3411' },
    ],
  },
];

export const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/' },
  { name: 'Instagram', href: 'https://www.instagram.com/' },
  { name: 'Twitter', href: 'https://twitter.com/' },
];

/* Rotas ainda sem conteúdo (fora do escopo mínimo) e o título mostrado em cada uma. */
export const underConstructionPages = {
  '/login': 'Entrar',
  '/cadastro': 'Cadastre-se',
  '/categorias': 'Categorias',
  '/meus-pedidos': 'Meus Pedidos',
  '/about': 'Sobre Drip Store',
  '/security': 'Segurança',
  '/wishlist': 'Wishlist',
  '/blog': 'Blog',
  '/careers': 'Trabalhe conosco',
};
