# Digital Store (Drip Store)

Projeto final de Front-end da **Digital College**: uma loja virtual de tênis com três páginas (Home, Listagem de produtos e Visualização do produto), feita em React a partir da [documentação oficial](https://github.com/digitalcollegebr/projeto-digital-store) e do [design no Figma](https://www.figma.com/design/nUk0ihM3x4u8JQtxUoAEJf/DRIP-STORE---DIGITAL-COLLEGE--Copy-?node-id=22-30&p=f).

Os dados são locais (sem API, back-end, autenticação, carrinho ou pagamento reais).

<!-- Quando publicar, descomente e coloque o link:
**Projeto no ar:** https://SEU-PROJETO.vercel.app
-->

## Autor

| Nome | GitHub |
| --- | --- |
| Vinicius Caeh Henriques de Mendonca Lima | [@caeh43](https://github.com/caeh43) |

Projeto feito individualmente.

<!-- Se quiser, adicione prints das telas e descomente:
## Telas

| Home | Listagem | Produto |
| --- | --- | --- |
| ![Home](docs/home.png) | ![Listagem](docs/listagem.png) | ![Produto](docs/produto.png) |
-->

## Tecnologias

- React 19 e JavaScript
- Vite 7
- React Router DOM 7 (`NavLink`, `useSearchParams`, rotas dinâmicas)
- CSS puro, organizado por componente, com variáveis de cor em `src/styles/variables.css`
- Fonte Inter (Google Fonts)

## Como rodar

Requisitos: **Node.js 20.19 ou superior** (ou 22.12+) e **npm**.

```bash
git clone https://github.com/caeh43/digital-store-frontend.git
cd digital-store-frontend
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente http://localhost:5173).

Outros comandos:

```bash
npm run build     # gera a versão de produção em dist/
npm run preview   # serve a versão de produção localmente
```

As imagens já estão incluídas na pasta `public/`, então não é preciso baixar nada além das dependências.

## Páginas e rotas

| Rota | Página |
| --- | --- |
| `/` | Home |
| `/products` | Listagem de produtos (aceita `?filter=termo` para busca) |
| `/produtos` | Redireciona para `/products`, mantendo a busca |
| `/product/:id` | Visualização do produto |
| `/login`, `/cadastro`, `/categorias`, `/meus-pedidos`, `/about`, `/security`, `/wishlist`, `/blog`, `/careers` | Página "em construção" (fora do escopo mínimo) |
| qualquer outra | Página "não encontrada" |

## Funcionalidades

**Geral**
- **Header:** logo, busca (a lupa ou Enter levam a `/products?filter=termo`, sem diferenciar acentos e maiúsculas), links de Cadastre-se e Entrar, ícone do carrinho (sem ação), navegação com destaque da página ativa e menu recolhível em telas pequenas.
- **Footer:** logo, descrição, redes sociais, colunas geradas pelo componente `InfoColumn`, linha divisória e direitos autorais com o ano atual.
- **Responsividade:** layouts ajustados para desktop, notebook, tablet e celular.
- **Rolagem:** ao trocar de página, a tela volta ao topo.

**Home**
- Galeria principal (1440x681) com setas.
- "Coleções em destaque" com 3 imagens.
- "Produtos em alta" com 8 produtos.

**Listagem de produtos**
- Título com a quantidade de produtos e o termo buscado.
- Filtros por marca, categoria e gênero (múltipla escolha) e por estado (escolha única).
- Dentro de um grupo as opções se somam (OU); entre grupos todas precisam valer (E).
- Ordenação por menor ou maior preço.
- Estado vazio ("Nenhum produto encontrado") e botão "Limpar filtros".

**Visualização do produto**
- Navegação estrutural (breadcrumb).
- Galeria 700x570 com miniaturas e setas desabilitadas na primeira e na última imagem.
- Caixa de compra com nome, referência, estrelas, avaliações, preço, desconto e descrição.
- Seleção de tamanho e de cor (a opção escolhida ganha borda na cor primária).
- O botão **COMPRAR** exige tamanho e cor e informa que a compra não está disponível nesta versão de demonstração.
- Ficha do produto e "Produtos recomendados" (mesma categoria e marca primeiro).
- Mensagem amigável quando o produto não existe.

## Componentes reutilizáveis

| Componente | Responsabilidade |
| --- | --- |
| `Gallery` | Carrossel de imagens. Props: `className`, `width`, `height`, `radius`, `images`, `showThumbs` |
| `ProductCard` / `ProductListing` | Cartão de produto e grade de produtos |
| `ProductOptions` | Seletor de tamanhos e cores (formato quadrado ou circular) |
| `BuyBox` | Nome, preços, descrição, opções e botão de compra |
| `FilterGroup` | Grupo de filtros (checkbox ou radio) |
| `Section` | Título de seção com link opcional |
| `InfoColumn` | Coluna de informações do rodapé (`title`, `informations`) |
| `Header`, `Footer`, `Logo`, `Icons` | Estrutura da página, logomarca e ícones em SVG |

## Estrutura de pastas

```
digital-store-frontend/
├── public/                     # imagens, favicon e placeholder
├── src/
│   ├── components/             # componentes reutilizáveis
│   ├── data/                   # produtos, filtros, navegação e conteúdo da Home
│   ├── pages/                  # Home, Listagem, Produto, Layout e páginas de status
│   ├── styles/                 # variáveis de cor e estilos globais
│   ├── utils/                  # filtro, busca, ordenação, formatação de preço e imagens
│   ├── App.jsx                 # rotas
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Imagens

As imagens ficam em `public/` e seguem os nomes da documentação oficial:

| Uso | Arquivos |
| --- | --- |
| Galeria da Home (1440x681) | `home-slide-1.jpeg` a `home-slide-4.jpeg` |
| Coleções em destaque | `collection-1.png` a `collection-3.png` |
| Cartões de produto | `product-thumb-1.jpeg` a `product-thumb-12.jpeg` |
| Galeria do produto (700x570) | `product-image-1.jpeg` a `product-image-4.jpeg` |

Se algum arquivo estiver faltando, a interface mostra `public/placeholder.svg` no lugar, sem quebrar o layout. Os nomes e as quantidades podem ser ajustados em `src/data/home.js` e `src/data/products.js`.

## Decisões e limitações

- **Dados locais:** o catálogo de 12 produtos está em `src/data/products.js`, e a lógica de filtro, busca e ordenação está em `src/utils/products.js`.
- **Logo e ícones:** a logomarca e os ícones (setas, lupa, carrinho, estrela e redes sociais) são SVGs criados para este projeto, não os arquivos oficiais do Figma.
- **Fora do escopo:** login, cadastro, carrinho e pagamento não foram implementados.

## Deploy

O app usa `BrowserRouter`. Em hospedagens como Vercel ou Netlify, configure o redirecionamento de todas as rotas para `index.html`; caso contrário, abrir um endereço como `/product/3` diretamente resulta em erro 404.
