/* Grupos do filtro lateral da listagem. `key` indica o campo do estado de filtros. */
export const filterGroups = [
  {
    key: 'brands',
    title: 'Marca',
    inputType: 'checkbox',
    options: [{ text: 'Adidas' }, { text: 'K-Swiss' }, { text: 'Nike' }, { text: 'Puma' }],
  },
  {
    key: 'categories',
    title: 'Categoria',
    inputType: 'checkbox',
    options: [{ text: 'Casual' }, { text: 'Corrida' }, { text: 'Esporte e lazer' }, { text: 'Utilitário' }],
  },
  {
    key: 'genders',
    title: 'Gênero',
    inputType: 'checkbox',
    options: [{ text: 'Masculino' }, { text: 'Feminino' }, { text: 'Unisex' }],
  },
  {
    key: 'states',
    title: 'Estado',
    inputType: 'radio',
    options: [{ text: 'Novo' }, { text: 'Usado' }],
  },
];

export const sortOptions = [
  { value: '', text: 'Padrão' },
  { value: 'asc', text: 'Menor preço' },
  { value: 'desc', text: 'Maior preço' },
];

export const emptyFilters = { brands: [], categories: [], genders: [], states: [] };
