# Digital Store

Front-end da loja virtual **Digital Store (Drip Store)**, desenvolvido a partir da documentação oficial da Digital College
([digitalcollegebr/projeto-digital-store](https://github.com/digitalcollegebr/projeto-digital-store)).
Três páginas (Home, Listagem de produtos e Visualização do produto) com dados locais, sem back-end, autenticação, carrinho ou pagamento reais.

## Tecnologias

- React 19 e JavaScript
- Vite 7
- React Router DOM 7 (`NavLink`, `useSearchParams`, rotas dinâmicas)
- CSS puro, organizado por componente, com variáveis de cor em `src/styles/variables.css`

## Requisitos

- Node.js 20.19 ou superior (ou 22.12+)
- npm

## Instalação e execução

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente http://localhost:5173).

Outros comandos:

```bash
npm run build     # gera a versão de produção em dist/
npm run preview   # serve a versão de produção localmente
```

## Imagens oficiais (importante)

O código usa os nomes de arquivo citados na documentação oficial. Copie para a pasta `public/` deste projeto o conteúdo da
pasta `public/` do repositório oficial da Digital College:

| Uso | Arquivos esperados em `public/` |
| --- | --- |
| Galeria da Home (1440x681) | `home-slide-1.jpeg` a `home-slide-4.jpeg` |
| Coleções em destaque | `collection-1.png`, `collection-2.png`, `collection-3.png` |
| Cartões de produto | `product-thumb-1.png` a `product-thumb-12.png` |
| Galeria do produto (700x570) | `product-image-1.png` a `product-image-4.png` |

Se um arquivo não existir, a interface mostra `public/placeholder.svg` no lugar, sem quebrar o layout. Ajuste os nomes e as
quantidades em `src/data/home.js` e `src/data/products.js` caso o repositório oficial use outros.

A logomarca (`src/components/Logo/Logo.jsx`) é um SVG criado para este projeto. Para usar a arte oficial, substitua o conteúdo do
componente por um `<img>` apontando para os arquivos de `src/assets`. O mesmo vale para os ícones: os ícones de setas, lupa, carrinho,
estrela e redes sociais estão em `src/components/Icons/Icons.jsx` como SVG inline.

## Estrutura de pastas

```
digital-store/
├── public/                     # imagens oficiais, favicon e placeholder
├── src/
│   ├── assets/                 # arquivos oficiais de logo/ícones (opcional)
│   ├── components/
│   │   ├── BuyBox/
│   │   ├── FilterGroup/
│   │   ├── Footer/
│   │   ├── Gallery/
│   │   ├── Header/
│   │   ├── Icons/
│   │   ├── InfoColumn/         # componente de informações do rodapé (title, informations)
│   │   ├── Logo/
│   │   ├── ProductCard/
│   │   ├── ProductDetails/
│   │   ├── ProductListing/
│   │   ├── ProductOptions/
│   │   └── Section/
│   ├── data/                   # produtos, filtros, navegação e conteúdo da Home
│   ├── pages/
│   │   ├── HomePage/
│   │   ├── Layout/
│   │   ├── ProductListingPage/
│   │   ├── ProductViewPage/
│   │   └── StatusPage/         # "em construção" e "não encontrada"
│   ├── styles/                 # variáveis de cor e estilos globais
│   ├── utils/                  # filtro, busca, ordenação, formatação de preço
│   ├── App.jsx                 # rotas
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Funcionalidades

- **Rotas:** `/` (Home), `/products` (Listagem), `/produtos` (redireciona para `/products` mantendo a busca), `/product/:id` (Produto).
  Login, cadastro, categorias, meus pedidos e páginas institucionais abrem uma página "em construção"; qualquer outro endereço mostra "página não encontrada".
- **Header:** logo, busca (lupa ou Enter levam a `/products?filter=termo`, sem diferenciar acentos e maiúsculas), Cadastre-se, Entrar, ícone do carrinho (sem ação),
  navegação com `NavLink` e destaque da página ativa; menu recolhível em telas pequenas.
- **Footer:** fundo `#1F1F1F`, logo branca, descrição, redes sociais, colunas geradas por `InfoColumn`, linha divisória e direitos autorais com o ano atual.
- **Home:** galeria principal (1440x681), "Coleções em destaque" (3 imagens) e "Produtos em alta" (8 produtos).
- **Listagem:** título com a quantidade de produtos, filtros por marca, categoria, gênero (checkbox) e estado (radio), ordenação por menor/maior preço,
  estado vazio e botão "Limpar filtros". Dentro de um grupo as opções se somam (OU); entre grupos todas valem (E).
- **Produto:** galeria 700x570 com miniaturas, BuyBox (nome, referência, estrelas, avaliações, preço e desconto, descrição), seleção de tamanho e cor (borda de 2px na cor primary),
  ficha do produto e produtos recomendados. O botão COMPRAR exige tamanho e cor e informa que a compra não está disponível nesta versão de demonstração.
- **Gallery:** setas desabilitadas na primeira e na última imagem, miniaturas opcionais (`showThumbs`) com destaque da selecionada e propriedades `className`, `width`, `height`, `radius`, `images`.
- **Responsividade:** layouts ajustados para desktop, notebook, tablet e celular.

## Integrantes do grupo

| Nome | GitHub |
| --- | --- |
| _Nome do integrante 1_ | _@usuario_ |
| _Nome do integrante 2_ | _@usuario_ |
| _Nome do integrante 3_ | _@usuario_ |

## Publicar no GitHub

```bash
git init
git add .
git commit -m "Front-end da Digital Store"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
git push -u origin main
```
